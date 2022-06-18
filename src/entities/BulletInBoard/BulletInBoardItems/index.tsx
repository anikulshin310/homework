import React, { FC, ReactHTMLElement, useEffect, useState } from "react";
import style from "./BulletInBoardItems.module.scss";
import { IData } from "../../../mocks/data";
import SearchInput from "../../../components/SearchInput";
import usePagination from "../../../hooks/usePagination";
import Pagination from "../../../components/Pagination";
import GoodsSort from "../GoodsSort";
import GoodsItem from "../GoodsItem";


interface IBulletInBoardItems {
  items: IData[];
}

const BulletInBoardItems: FC<IBulletInBoardItems> = ({ items }) => {

  const [listItems,setListItems] = useState(items)
 /*  useEffect(()=>
    setListItems([...items].sort((a,b)=>a.date>b.date? 1:-1))
  ) */

  const {
    totalPages,
    nextPage,
    prevPage,
    setPage,
    firstContentIndex,
    lastContentIndex,
    page,
  } = usePagination({ contentPerPage: 8, count: listItems.length });
  
const filterItems = (e:React.ChangeEvent<HTMLInputElement>)=>{
  const filtered = items.filter((item)=>item.name.toLowerCase().includes(e.target.value.toLowerCase()))
  
  
  setListItems(filtered)
  if (e.target.value==='') {
    setPage(1)
    setListItems(items)
  }
  
  
}

  return (
    <>
     
      <div className={style.items_wrapper}>
        <SearchInput
          onChange={filterItems}
          placeHolder={"Найти объявление"}
        />
        <Pagination nextPage={nextPage} prevPage={prevPage} totalPages={totalPages} page={page} firstContentIndex={firstContentIndex} lastContentIndex={lastContentIndex} count={listItems.length}></Pagination>
      </div>
      <GoodsSort/>
      
     <div className={style.goods_wrapper}>
      {listItems
    .slice(firstContentIndex, lastContentIndex)
    .map((item: IData) => (
      <GoodsItem item={item} key={item.name}></GoodsItem>
   ))}
   </div>
      
    </>
  );
};

export default BulletInBoardItems;
