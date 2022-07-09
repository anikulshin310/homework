import React, { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';
import { IData } from '../../mocks/data';
import {
  clearCurrent,
  handleInputText,
  handleUuid,
  setCurrentItem,
} from '../../store/CurrentGood/actions';
import { addItem, editItem } from '../../store/Goods/actions';
import { getCurrentGood } from '../../store/Goods/selectors';
import { generateUuid } from '../../utils/generateUuid';
import DetailedHeader from './components/DetailedHeader';
import DetailedInfoForm from './components/DetailedInfoForm';
import style from './GoodItemDetailed.module.scss';

const GoodItemDetailed: FC = () => {
  const location = useLocation();
  const params = useParams();
  const currentGood = useSelector(getCurrentGood);
  const storeDispatch = useDispatch();
  const currentItem = useSelector((state: any) =>
    state.goods.goods.find((item: IData) => item.uuid === params.uuid)
  );
  const [editable, setEditable] = useState(false);
  const handleInputChange = (e: any) => {
    storeDispatch(handleInputText(e.target.value, e.target.name));
  };

  const onSave = () => {
    if (params.add === 'add') {
      storeDispatch(addItem(currentGood));
    } else {
      storeDispatch(editItem(currentGood));
    }
    storeDispatch(clearCurrent());
  };

  useEffect(() => {
    if (location.search === '?edit') {
      setEditable(true);
      storeDispatch(setCurrentItem(currentItem));
    }
    if (params.add === 'add') {
      setEditable(true);
      storeDispatch(handleUuid(generateUuid(), 'uuid'));
      storeDispatch(setCurrentItem(currentItem));
    }
  }, [params, location, currentItem, storeDispatch]);
  return (
    <div className={style.detailed_wrapper}>
      <DetailedHeader editable={editable} name={currentItem?.name} onSave={onSave} />
      <DetailedInfoForm
        item={params.uuid && editable ? currentGood : currentItem}
        edit={editable}
        handleInputChange={handleInputChange}
      />
    </div>
  );
};

export default GoodItemDetailed;
