import React, { FC, useEffect } from "react";
import style from "./BulletInBoardItems.module.scss";
import { IData } from "../../../mocks/data";
import SearchInput from "../../../components/SearchInput";
import Pagination from "../../../components/Pagination";

interface IBulletInBoardItems {
  items: IData[];
}

const BulletInBoardItems: FC<IBulletInBoardItems> = ({ items }) => {
  useEffect(() => console.log(items));
  return (
    <>
      {" "}
      <div className={style.items_wrapper}>
        <SearchInput
          onChange={(e) => console.log(e.target.value)}
          placeHolder={"Найти объявление"}
        />
      </div>
      <Pagination contentPerPage={8} count={items.length}></Pagination>
    </>
  );
};

export default BulletInBoardItems;
