import React, { FC, useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useSearchParams } from 'react-router-dom';
import style from './BulletInBoard.module.scss';
import { IData } from '../../mocks/data';
import GoodsHeader from './GoodsHeader';
import BulletInBoardItems from './BulletInBoardItems';
import SearchInput from '../../components/SearchInput';
import Pagination from '../../components/Pagination';
import usePagination from '../../hooks/usePagination';
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
    console.log(listItems);
  }, [goodsData]);

  const { totalPages, nextPage, prevPage, setPage, firstContentIndex, lastContentIndex, page } =
    usePagination({ contentPerPage: 8, count: listItems.length });

  // С филтрацией и пагинацией тебе тут поковырять надо, не всегда нормально работает. Советую еще поглядеть какие-нибудь реализации
  const filterItems = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPage(1);
    const filteredItems = [...goodsData].filter((item) =>
      item.name?.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())
    );
    setListItems([...filteredItems]);
    if (listItems.length < lastContentIndex) {
      setPage(1);
    }
    if (e.target.value.trim().length === 0) {
      setPage(1);
      setListItems(goodsData);
      searchParams.delete('title');
      setSearchParams(searchParams);
    } else {
      setSearchParams({ title: e.target.value });
    }
  };

  /* const sortByName = (array:IData[],sort:boolean) => {
    if (sort) {
      const sorted = [...array].sort((a, b) =>
        a.name !== b.name ? (a.name < b.name ? -1 : 1) : 0
      );
      setListItems(sorted);
    } else {
      const sorted = [...array].sort((a: IData, b: IData) =>
        a.name !== b.name ? (a.name < b.name ? 1 : -1) : 0
      );
      setListItems(sorted);
    }
    setSort(!sort);
  }; */

  const modalMenuAction = useCallback((action: string, item: IData) => {
    switch (action) {
      case 'delete':
        dispatch(deleteItem(item));
        break;
      case 'look':
        navigate(`good/${item.uuid}`, { replace: true });
        break;
      case 'edit':
        navigate(`good/${item.uuid}?edit`, { replace: true });
        break;
      default:
        break;
    }
  }, []);

  return (
    <div className={style.board_wrapper}>
      <GoodsHeader
        length={listItems.length}
        navigateToAdd={() => navigate(`add`, { replace: true })}
      />
      <div className={style.board_top}>
        <SearchInput onChange={filterItems} placeHolder="Найти объявление" />
        <Pagination
          nextPage={nextPage}
          prevPage={prevPage}
          totalPages={totalPages}
          page={page}
          firstContentIndex={firstContentIndex}
          lastContentIndex={lastContentIndex}
          count={listItems.length}
        />
      </div>
      <GoodsSort onClick={() => console.log('fix sort')} />
      <BulletInBoardItems
        items={listItems}
        modalMenuAction={modalMenuAction}
        firstContentIndex={firstContentIndex}
        lastContentIndex={lastContentIndex}
      />
    </div>
  );
};
export default BulletInBoard;
