import React, { FC } from 'react';
import style from './GoodsHeader.module.scss';
import Button from '../../../components/Button';
import plusSVG from '../../../assets/svg/plus.svg';

interface IGoodsHeader {
  length: number;
}
const GoodsHeader: FC<IGoodsHeader> = ({ length }) => {
  return (
    <div className={style.board_top}>
      <div className={style.board_title}>
        Объявления
        <div className={style.board_title_total}>{`Всего: ${length}`}</div>
      </div>
      <Button
        className={style.board_button}
        text={`Добавить`}
        icon={plusSVG}
        onClick={() => console.log('Добавить +')}
      />
    </div>
  );
};

export default GoodsHeader;
