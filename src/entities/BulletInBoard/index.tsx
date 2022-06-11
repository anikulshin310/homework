import React, { FC, useEffect } from "react";
import style from "./BulletInBoard.module.scss";
import Button from "../../components/Button";
import plusSVG from "../../assets/svg/plus.svg";
import { dataItems } from "../../mocks/data";
import BulletInBoardItems from "./BulletInBoardItems";
const BulletInBoard: FC = () => {
  return (
    <>
      <div className={style.board_wrapper}>
        <div className={style.board_top}>
          <div className={style.board_title}>
            Объявления
            <div
              className={style.board_title_total}
            >{`Всего: ${dataItems.length}`}</div>
          </div>
          <Button
            className={style.board_button}
            text={`Добавить`}
            icon={plusSVG}
            onClick={() => console.log("Добавить +")}
          />
        </div>
        <BulletInBoardItems items={dataItems}></BulletInBoardItems>
      </div>
    </>
  );
};
export default BulletInBoard;
