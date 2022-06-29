import React, { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';
import { getGoodsData } from '../../store/Goods/selectors';
import DetailedHeader from './components/DetailedHeader';
import DetailedInfoForm from './components/DetailedInfoForm';
import style from './GoodItemDetailed.module.scss';

const GoodItemDetailed: FC = () => {
  const dispatch = useDispatch();

  const location = useLocation();
  const params = useParams();
  const goodsData = useSelector(getGoodsData);
  const currentItem = goodsData.find((item) => item.uuid === params.uuid);
  const [editable, setEditable] = useState(false);

  useEffect(() => {
    if (location.search === '?edit') {
      setEditable(true);
    }
  });
  return (
    <div className={style.detailed_wrapper}>
      <DetailedHeader name={currentItem?.name} />
      <DetailedInfoForm item={currentItem} editable={editable} />
    </div>
  );
};

export default GoodItemDetailed;
