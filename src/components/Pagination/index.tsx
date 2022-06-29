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
        <button
          type="button"
          className={!hasPrev ? `${style.prevPage} ${style.active}` : `${style.prevPage}`}
          onClick={prevPage}>
          <img src={pageButton} alt="prev" />
        </button>
        <button
          type="button"
          className={hasNext ? `${style.nextPage} ${style.active}` : `${style.nextPage}`}
          onClick={nextPage}>
          <img src={pageButton} alt="next" />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
