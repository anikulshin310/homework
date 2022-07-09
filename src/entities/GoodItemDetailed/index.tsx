import React, { FC, useEffect, useReducer, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';
import { IData } from '../../mocks/data';
import {
  addItem,
  clearCurrent,
  editItem,
  handleInputText,
  handleUuid,
  setCurrentItem,
} from '../../store/Goods/actions';
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

  const handleInputChange = (e: any) => {
    storeDispatch(handleInputText(e.target.value, e.target.name));
  };

  const onSave = () => {
    if (params.add === 'add') {
      storeDispatch(addItem(cGood));
    } else {
      storeDispatch(editItem(cGood));
    }
    storeDispatch(clearCurrent());
  };

  useEffect(() => {
    setEditable(true);
    if (location.search === '?edit') {
      /* storeDispatch(setCurrentItem(currentItem)); */
      storeDispatch(setCurrentItem(currentItem));
    }
    if (params.add === 'add') {
      storeDispatch(handleUuid(generateUuid(), 'uuid'));
      storeDispatch(setCurrentItem(currentItem));
    }
  }, [params, location]);
  return (
    <div className={style.detailed_wrapper}>
      <DetailedHeader editable={editable} name={cGood?.name} onSave={onSave} />
      <DetailedInfoForm item={cGood} edit={editable} handleInputChange={handleInputChange} />
    </div>
  );
};

export default GoodItemDetailed;
