import React, { FC, useCallback, useEffect, useState } from 'react';
import style from './BulletInBoard.module.scss';
import { IData } from '../../mocks/data';
import GoodsHeader from './GoodsHeader';
import BulletInBoardItems from './BulletInBoardItems';
import SearchInput from '../../components/SearchInput';
import Pagination from '../../components/Pagination';
import usePagination from '../../hooks/usePagination';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getGoodsData } from '../../store/Goods/selectors';
import { deleteItem } from '../../store/Goods/actions';
import GoodsSort from './GoodsSort';
const BulletInBoard: FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const goodsData = useSelector(getGoodsData);
  const [searchParams, setSearchParams] = useSearchParams();
  const [listItems, setListItems] = useState(goodsData);
  const [sort, setSort] = useState(true);

  useEffect(() => {
    setListItems(goodsData);
  }, [goodsData]);

  const { totalPages, nextPage, prevPage, setPage, firstContentIndex, lastContentIndex, page } =
    usePagination({ contentPerPage: 8, count: listItems.length });

  const filterItems = (e: React.ChangeEvent<HTMLInputElement>) => {
    const filteredItems = [...goodsData].filter((item) =>
      item.name.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())
    );
    setListItems([...filteredItems]);
    if (e.target.value.trim().length === 0) {
      setPage(1);
      setListItems(goodsData);
      searchParams.delete('title');
      setSearchParams(searchParams);
    } else {
      setSearchParams({ title: e.target.value });
    }
  };

  const sortByName = () => {
    if (sort) {
      const sorted = [...listItems].sort((a: IData, b: IData) =>
        a.name !== b.name ? (a.name < b.name ? -1 : 1) : 0
      );
      setListItems(sorted);
    } else {
      const sorted = [...listItems].sort((a: IData, b: IData) =>
        a.name !== b.name ? (a.name < b.name ? 1 : -1) : 0
      );
      setListItems(sorted);
    }
    setSort(!sort);
  };

  const modalMenuAction = useCallback((action: string, item: IData) => {
    switch (action) {
      case 'delete':
        dispatch(deleteItem(item));
        break;
      case 'look':
        navigate(`uuid=${item}`, { replace: true });
        break;
      case 'edit':
        navigate(`uuid=${item}?edit`, { replace: true });
        break;
      default:
        break;
    }
  }, []);

  return (
    <div className={style.board_wrapper}>
      <GoodsHeader length={listItems.length} />
      <div className={style.board_top}>
        <SearchInput onChange={filterItems} placeHolder="Найти объявление" />
        <Pagination
          nextPage={nextPage}
          prevPage={prevPage}
          totalPages={totalPages}
          page={page}
          firstContentIndex={firstContentIndex}
          lastContentIndex={lastContentIndex}
          count={listItems.length}></Pagination>
      </div>
      <GoodsSort onClick={sortByName} />
      <BulletInBoardItems
        items={listItems}
        modalMenuAction={modalMenuAction}
        firstContentIndex={firstContentIndex}
        lastContentIndex={lastContentIndex}></BulletInBoardItems>
    </div>
  );
};
export default BulletInBoard;
