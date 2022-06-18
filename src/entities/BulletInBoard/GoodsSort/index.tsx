import React from "react";
import style from "./goodsSort.module.scss";
import { sortConfig } from "./sortConfig";
import SortIcons from "./SortIcons";

const GoodsSort = () => {
  return (
    <div className={style.goods_sort_wrapper}>
      <div className={style.goods_sort}>
        {sortConfig.map((item) => (
          <div key={item.name} className={style.item_name}>
            {item.name}
            {item.sortable ? (
              <SortIcons sortFunction={() => console.log("sortFunction")} />
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GoodsSort;
