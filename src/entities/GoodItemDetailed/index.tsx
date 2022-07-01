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
  const goodsData = useSelector(getGoodsData);
  const detailedItem = goodsData.find((item) => item.uuid === params.uuid);
  const [editable, setEditable] = useState(false);
  const storeDispatch = useDispatch();

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
  const onSave = ()=>{
    if (params.add === 'add') {
      storeDispatch(addItem(currentItem))
    }
    else {
      storeDispatch(editItem(currentItem))
    }
  }
  useEffect(() => {
    if (editable) {
      setCurrentItem(state);
    }
  }, [state]);

  useEffect(() => {
    if (location.search === '?edit') {
      setEditable(true);
    }
    if (params.add === 'add') {
      setEditable(true);
    }
  }, [location]);
  return (
    <div className={style.detailed_wrapper}>
      <DetailedHeader
        editable={editable}
        name={currentItem?.name}
        onSave={onSave}
      />
      <DetailedInfoForm item={currentItem} edit={editable} handleInputChange={handleInputChange} />
    </div>
  );
};

export default GoodItemDetailed;
