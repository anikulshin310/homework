import React, { FC, useState, useRef, useEffect } from 'react';
import style from './goodsItem.module.scss';
import dots from '../../../assets/svg/dots.svg';
import { IData } from '../../../mocks/data';
import Modal from '../../../components/Modal';

interface IGoodsItem {
  item: IData;
  modalMenuAction: (action: string, item: IData) => void;
}
const GoodsItem: FC<IGoodsItem> = ({ item, modalMenuAction }) => {
  const [isModal, setIsModal] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const clickOutside = (e: MouseEvent) => {
      if (isModal && ref.current && !ref.current.contains(e.target as Node)) {
        setIsModal(false);
      }
    };

    document.addEventListener('mousedown', clickOutside);

    return () => {
      document.removeEventListener('mousedown', clickOutside);
    };
  }, [isModal]);

  return (
    <div className={style.goods_item_wpapper} ref={ref}>
      <div className={style.goods_item}>
        <div className={style.item}>{item.name}</div>
        <div className={style.item}>{item.category}</div>
        <div className={style.item}>{item.date}</div>
        <div className={style.item}>{item.publicated ? 'Да' : 'Нет'}</div>
        <button type="button" className={style.menu_dots} onClick={() => setIsModal(!isModal)}>
          <img src={dots} alt="dots" />
        </button>
        {isModal ? <Modal modalMenuAction={modalMenuAction} goodsItem={item} /> : null}
      </div>
    </div>
  );
};

export default GoodsItem;
