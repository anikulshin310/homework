import React, { FC } from 'react';
import style from './goodsSort.module.scss';
import { sortConfig } from './sortConfig';
import SortIcons from './SortIcons';

interface IGoodsSort {
  onClick: () => void;
}

const GoodsSort: FC<IGoodsSort> = ({ onClick }) => {
  return (
    <div className={style.goods_sort_wrapper}>
      <div className={style.goods_sort}>
        {sortConfig.map((item) => (
          <div key={item.name} className={style.item_name}>
            {item.name}
            {/* items.sortable && <SortIcons.../> */}
            {item.sortable ? <SortIcons onClick={onClick} /> : null}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GoodsSort;
