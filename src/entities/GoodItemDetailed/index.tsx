import React, { FC, useEffect, useReducer, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';
import { addItem, editItem } from '../../store/Goods/actions';
import { getGoodsData } from '../../store/Goods/selectors';
import DetailedHeader from './components/DetailedHeader';
import DetailedInfoForm from './components/DetailedInfoForm';
import style from './GoodItemDetailed.module.scss';

const GoodItemDetailed: FC = () => {
  const location = useLocation();
  const params = useParams();
  const storeDispatch = useDispatch();
  const goodsData = useSelector(getGoodsData);
  const detailedItem = goodsData.find((item) => item.uuid === params.uuid);
  const [editable, setEditable] = useState(false);

  // Стор обязательно вынести надо туда, где ему место, да и в целом подумать еще раз над вот этим подходом, что ты берешь данные из стора, как-то их обрабатываешь и создаешь на основании этого новый стор по сути (новый редьюсер). Можно тут без стора лучше обойдить в таком случае, а всю логику фильтрации сделать в селекторе, и вернуть нужное значение в компонент
  const initialState = {
    name: detailedItem?.name,
    category: detailedItem?.category,
    price: detailedItem?.price,
    phone: detailedItem?.phone,
    description: detailedItem?.description,
    date: detailedItem?.date,
    coordinates: {
      latitude: detailedItem?.coordinates.latitude,
      longtitude: detailedItem?.coordinates.longtitude,
    },
    publicated: detailedItem?.publicated,
    uuid: detailedItem?.uuid,
  };
  const reducer = (state = initialState, action: any) => {
    switch (action.type) {
      case 'HANDLE_INPUT_TEXT':
        return { ...state, [action.field]: action.payload };
      case 'HANDLE_UUID':
        return { ...state, [action.field]: action.payload };

      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  const [currentItem, setCurrentItem] = useState(initialState);
  const handleInputChange = (e: any) => {
    dispatch({
      type: 'HANDLE_INPUT_TEXT',
      field: e.target.name,
      payload: e.target.value,
    });
  };

  const onSave = () => {
    if (params.add === 'add') {
      storeDispatch(addItem(currentItem));
    } else {
      storeDispatch(editItem(currentItem));
    }
  };
  // у тебя уже есть на это дело утилка
  function generateUuid(): string {
    return 'xxxx-xxxx-xxx-xxxx'.replace(/[x]/g, (c) => {
      const r = Math.floor(Math.random() * 16);
      return r.toString(16);
    });
  }

  useEffect(() => {
    if (editable) {
      setCurrentItem(state);
      console.log(state);
    }
  }, [state]);

  useEffect(() => {
    if (location.search === '?edit') {
      setEditable(true);
    }
    if (params.add === 'add') {
      setEditable(true);
      dispatch({
        type: 'HANDLE_UUID',
        field: 'uuid',
        payload: generateUuid(),
      });
    }
  }, [params, location]);
  return (
    <div className={style.detailed_wrapper}>
      <DetailedHeader editable={editable} name={currentItem?.name} onSave={onSave} />
      <DetailedInfoForm item={currentItem} edit={editable} handleInputChange={handleInputChange} />
    </div>
  );
};

export default GoodItemDetailed;
