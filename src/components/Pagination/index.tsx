import React, { FC } from 'react';
import style from './pagination.module.scss';
import pageButton from '../../assets/svg/pageButton.svg';

interface IPagination {
  nextPage: () => void;
  prevPage: () => void;
  totalPages: number;
  page: number;
  firstContentIndex: number;
  lastContentIndex: number;
  count: number;
}

const Pagination: FC<IPagination> = ({
  nextPage,
  prevPage,
  totalPages,
  page,
  firstContentIndex,
  lastContentIndex,
  count,
}) => {
  const hasPrev = page !== 1;
  const hasNext = page === totalPages;
  const noResults = count === 0;
  return (
    <div className={style.pagination_wrapper}>
      <div className={style.pages_nums}>
        {!noResults
          ? `${firstContentIndex + 1}—${!hasNext ? lastContentIndex : count} из ${count}`
          : `0 из ${count}`}
      </div>
      <div className={style.pagesButtons}>
        <div
          className={!hasPrev ? `${style.prevPage} ${style.active}` : `${style.prevPage}`}
          onClick={prevPage}>
          <img src={pageButton}></img>
        </div>
        <div
          className={hasNext ? `${style.nextPage} ${style.active}` : `${style.nextPage}`}
          onClick={nextPage}>
          <img src={pageButton}></img>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
