import React, { FC } from 'react';
import sorting from '../../../assets/svg/sorting.svg';
import style from './goodsSort.module.scss';

interface ISortIcons {
  onClick: () => void;
}

const SortIcons: FC<ISortIcons> = ({ onClick }) => {
  return (
    <button type="button" className={style.sort} onClick={onClick}>
      <img className={style.ascending} src={sorting} alt="asc" />
      <img className={style.descending} src={sorting} alt="desc" />
    </button>
  );
};

export default SortIcons;
