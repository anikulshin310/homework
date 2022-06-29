import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import style from '../GoodItemDetailed.module.scss';
import arrow from '../../../assets/svg/arrow.svg';
import Button from '../../../components/Button';

interface IDetailedHeader {
  name?: string;
}

const DetailedHeader: FC<IDetailedHeader> = ({ name }) => {
  const navigate = useNavigate();
  return (
    <div className={style.header_wrapper}>
      <div className={style.header_top}>
        <button
          className={style.arrow_button}
          type="button"
          onClick={() => navigate('../bulletin_board')}>
          <img src={arrow} alt="arrow" />
          <div className={style.arrow_button_text}>Вернуться назад</div>
        </button>
      </div>
      <div className={style.header_bot}>
        <div className={style.header_title}>{name}</div>
        <Button
          className={style.header_button}
          text="Сохранить"
          onClick={() => console.log('сохранить')}
        />
      </div>
    </div>
  );
};

export default DetailedHeader;
