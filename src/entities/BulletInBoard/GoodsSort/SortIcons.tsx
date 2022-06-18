import React, { FC } from "react";
import sorting from "../../../assets/svg/sorting.svg";
import style from "./goodsSort.module.scss";

interface ISortIcons {
  onClick: () => void;
}

const SortIcons: FC<ISortIcons> = ({ onClick }) => {
  return (
    <div className={style.sort} onClick={onClick}>
      <img className={style.ascending} src={sorting}></img>
      <img className={style.descending} src={sorting}></img>
    </div>
  );
};

export default SortIcons;
