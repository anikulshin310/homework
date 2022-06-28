import React, { FC, useEffect, useState } from 'react';
import style from './BulletInBoardItems.module.scss';
import { IData } from '../../../mocks/data';
import SearchInput from '../../../components/SearchInput';
import Pagination from '../../../components/Pagination';
import GoodsSort from '../GoodsSort';
import GoodsItem from '../GoodsItem';

interface IBulletInBoardItems {
  items: IData[];
  filterItems: (e: React.ChangeEvent<HTMLInputElement>) => void;
  sortByName: () => void;
  modalMenuAction: (action: string, item: IData) => void;
  nextPage: () => void;
  prevPage: () => void;
  totalPages: number;
  page: number;
  firstContentIndex: number;
  lastContentIndex: number;
}

const BulletInBoardItems: FC<IBulletInBoardItems> = ({
  items,
  filterItems,
  sortByName,
  modalMenuAction,
  nextPage,
  prevPage,
  totalPages,
  page,
  firstContentIndex,
  lastContentIndex,
}) => {
  return (
    <>
      <div className={style.items_wrapper}>
        <SearchInput onChange={filterItems} placeHolder={'Найти объявление'} />
        <Pagination
          nextPage={nextPage}
          prevPage={prevPage}
          totalPages={totalPages}
          page={page}
          firstContentIndex={firstContentIndex}
          lastContentIndex={lastContentIndex}
          count={items.length}></Pagination>
      </div>
      <GoodsSort onClick={sortByName} />

      <div className={style.goods_wrapper}>
        {items.slice(firstContentIndex, lastContentIndex).map((item: IData) => (
          <GoodsItem item={item} key={item.name} modalMenuAction={modalMenuAction}></GoodsItem>
        ))}
      </div>
    </>
  );
};

export default BulletInBoardItems;
