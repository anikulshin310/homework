import React, { FC } from 'react';
import style from './BulletInBoardItems.module.scss';
import { IData } from '../../../mocks/data';
import GoodsItem from '../GoodsItem';

interface IBulletInBoardItems {
  items: IData[];
  modalMenuAction: (action: string, item: IData) => void;
  firstContentIndex: number;
  lastContentIndex: number;
}

const BulletInBoardItems: FC<IBulletInBoardItems> = ({
  items,
  modalMenuAction,
  firstContentIndex,
  lastContentIndex,
}) => {
  return (
    <div className={style.goods_wrapper}>
      {items.slice(firstContentIndex, lastContentIndex).map((item: IData) => (
        <GoodsItem item={item} key={item.name} modalMenuAction={modalMenuAction} />
      ))}
    </div>
  );
};

export default BulletInBoardItems;
