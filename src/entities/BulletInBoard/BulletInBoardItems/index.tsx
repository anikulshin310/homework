import React, { FC, useEffect, useState } from "react";
import style from "./BulletInBoardItems.module.scss";
import { useNavigate, useSearchParams } from "react-router-dom";
import { IData } from "../../../mocks/data";
import { useDispatch, useSelector } from 'react-redux';
import SearchInput from "../../../components/SearchInput";
import usePagination from "../../../hooks/usePagination";
import Pagination from "../../../components/Pagination";
import GoodsSort from "../GoodsSort";
import GoodsItem from "../GoodsItem";
import { getGoodsData } from "../../../store/Goods/selectors";
import { deleteItem } from "../../../store/Goods/actions";

interface IBulletInBoardItems {
  item?: IData[];
}

const BulletInBoardItems: FC<IBulletInBoardItems> = () => {
  const navigate = useNavigate();
  let [searchParams, setSearchParams] = useSearchParams();

  const dispatch = useDispatch();
  const goodsData = useSelector(getGoodsData);
  const [listItems, setListItems] = useState(goodsData);
  const [sort, setSort] = useState(true);
  useEffect(()=>{
  setListItems(goodsData);
  console.log(searchParams)
  },[goodsData])

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
    if (e.target.value.trim().length === 0) {
      setPage(1);
      setListItems(goodsData);
      const param = searchParams.get('q');
      searchParams.delete('title');
      setSearchParams(searchParams)
    } else {
      const filtered = goodsData.filter((item:IData) =>
        item.name.toLowerCase().includes(e.target.value.toLowerCase()));
        setListItems([...filtered]);
        setSearchParams({title:e.target.value})
      
    }
    
  };

  const sortByName = () => {
    if (sort) {
      const sorted = goodsData.sort((a:IData, b:IData) =>
        a.name !== b.name ? (a.name < b.name ? -1 : 1) : 0
      );
      setListItems([...sorted]);
    } else {
      const sorted = goodsData.sort((a:IData, b:IData) =>
        a.name !== b.name ? (a.name < b.name ? 1 : -1) : 0
      );
      setListItems([...sorted]);
    }
    setSort(!sort);
  };

  const modalMenuAction = (action: string, item: any) => {
    switch (action) {
      case "delete":
        dispatch(deleteItem(item));
        
        break;
      case "look":
        navigate(`id=${item.id}`, { replace: true })
        
        break;
        case "edit":
          navigate(`id=${item.id}?edit`, { replace: true })
          break;
      default:
        break;
    }
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
