import React, { FC, useEffect, useReducer, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';
import { IData } from '../../mocks/data';
import { addItem, editItem, setCurrentItem } from '../../store/Goods/actions';
import { getCurrentGood } from '../../store/Goods/selectors';
import { generateUuid } from '../../utils/generateUuid';
import DetailedHeader from './components/DetailedHeader';
import DetailedInfoForm from './components/DetailedInfoForm';
import style from './GoodItemDetailed.module.scss';

const GoodItemDetailed: FC = () => {
  const location = useLocation();
  const params = useParams();
  const cGood = useSelector(getCurrentGood);
  const storeDispatch = useDispatch();
  const currentItem = useSelector((state: any) =>
    state.goods.goods.find((item: IData) => item.uuid === params.uuid)
  );
  const [editable, setEditable] = useState(false);

  // Стор обязательно вынести надо туда, где ему место, да и в целом подумать еще раз над вот этим подходом,
  // что ты берешь данные из стора, как-то их обрабатываешь и создаешь на основании этого новый стор по сути
  // (новый редьюсер). Можно тут без стора лучше обойдить в таком случае, а всю логику фильтрации сделать
  // в селекторе, и вернуть нужное значение в компонент

  const reducer = (state = currentItem, action: any) => {
    switch (action.type) {
      case 'HANDLE_INPUT_TEXT':
        return { ...state, [action.field]: action.payload };
      case 'HANDLE_UUID':
        return { ...state, [action.field]: action.payload };

      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, currentItem);

  const handleInputChange = (e: any) => {
    dispatch({
      type: 'HANDLE_INPUT_TEXT',
      field: e.target.name,
      payload: e.target.value,
    });
  };

  const onSave = () => {
    if (params.add === 'add') {
      storeDispatch(addItem(state));
    } else {
      storeDispatch(editItem(state));
    }
  };

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
    storeDispatch(setCurrentItem(currentItem));
  }, [params, location]);
  return (
    <div className={style.detailed_wrapper}>
      <DetailedHeader editable={editable} name={state?.name} onSave={onSave} />
      <DetailedInfoForm item={state} edit={editable} handleInputChange={handleInputChange} />
    </div>
  );
};

export default GoodItemDetailed;
