import React, { FC, useState } from "react";
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
  const [listItems, setListItems] = useState(items);
  const [sort, setSort] = useState(true);

  const {
    totalPages,
    nextPage,
    prevPage,
    setPage,
    firstContentIndex,
    lastContentIndex,
    page,
  } = usePagination({ contentPerPage: 8, count: listItems.length });

  const filterItems = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.trim().length == 0) {
      setPage(1);
      setListItems(items);
    } else {
      const filtered = items.filter((item) =>
        item.name.toLowerCase().includes(e.target.value.toLowerCase())
      );

      setListItems([...filtered]);
    }
  };

  const sortByName = () => {
    if (sort) {
      const sorted = listItems.sort((a, b) =>
        a.name !== b.name ? (a.name < b.name ? -1 : 1) : 0
      );
      setListItems([...sorted]);
      setSort(!sort);
    } else {
      const sorted = listItems.sort((a, b) =>
        a.name !== b.name ? (a.name < b.name ? 1 : -1) : 0
      );
      setListItems([...sorted]);
      setSort(!sort);
    }
  };

  const modalMenuAction = (action: string, item: any) => {
    switch (action) {
      case "delete":
        deleteItem(listItems, item);
        setListItems([...listItems]);
        break;
      case "look":
        console.log(item);
        break;
      default:
        break;
    }
  };

  const deleteItem = (arr: any, item: any) => {
    setListItems([...arr.splice(arr.indexOf(item), 1)]);
  };

  return (
    <>
      <div className={style.items_wrapper}>
        <SearchInput onChange={filterItems} placeHolder={"Найти объявление"} />
        <Pagination
          nextPage={nextPage}
          prevPage={prevPage}
          totalPages={totalPages}
          page={page}
          firstContentIndex={firstContentIndex}
          lastContentIndex={lastContentIndex}
          count={listItems.length}
        ></Pagination>
      </div>
      <GoodsSort onClick={sortByName} />

      <div className={style.goods_wrapper}>
        {listItems
          .slice(firstContentIndex, lastContentIndex)
          .map((item: IData) => (
            <GoodsItem
              item={item}
              key={item.name}
              modalMenuAction={modalMenuAction}
            ></GoodsItem>
          ))}
      </div>
    </>
  );
};

export default BulletInBoardItems;
