import React, { FC, useEffect } from "react";
import style from "./BulletInBoardItems.module.scss";
import { IData } from "../../../mocks/data";
import SearchInput from "../../../components/SearchInput";
import usePagination from "../../../hooks/usePagination";

interface IBulletInBoardItems {
  items: IData[];
}

const BulletInBoardItems: FC<IBulletInBoardItems> = ({ items }) => {

  const {
    totalPages,
    nextPage,
    prevPage,
    setPage,
    firstContentIndex,
    lastContentIndex,
    page,
  } = usePagination({ contentPerPage: 6, count: items.length });
  
  return (
    <>
      
      <div className={style.items_wrapper}>
        <SearchInput
          onChange={(e) => console.log(e.target.value)}
          placeHolder={"Найти объявление"}
        />
      </div>
      <div onClick={prevPage}>prev</div>
      <div onClick={nextPage}>next</div>
      
      {items
    .slice(firstContentIndex, lastContentIndex)
    .map((el: any) => (
      <div className="item">{el.name}</div>
   ))}
      
    </>
  );
};

export default BulletInBoardItems;
