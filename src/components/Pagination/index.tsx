import React, { FC } from "react";
import usePagination from "../../hooks/usePagination";

interface IPagination {
  contentPerPage: number;
  count: number;
}
const Pagination: FC<IPagination> = ({ contentPerPage, count }) => {
  const {
    totalPages,
    nextPage,
    prevPage,
    setPage,
    firstContentIndex,
    lastContentIndex,
    page,
  } = usePagination({ contentPerPage: contentPerPage, count: count });

  return (
    <div onClick={nextPage}>
      {firstContentIndex + 1}-{lastContentIndex}
    </div>
  );
};

export default Pagination;
