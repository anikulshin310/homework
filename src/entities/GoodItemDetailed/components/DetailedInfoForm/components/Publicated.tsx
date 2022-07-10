import React, { FC } from 'react';

import style from '../DetailedInfoForm.module.scss';

interface IPubllicated {
  isPublicated: boolean;
  handleInputChange?: (e: any) => void;
}

const Publicated: FC<IPubllicated> = ({ isPublicated, handleInputChange }) => {
  return (
    <div className={style.form_input}>
      <div className={style.form_title}>Публикация</div>
      <div className={style.publicated}>
        <label id="contactChoice1" htmlFor="contactChoice1">
          <div className={style.radio}>
            <input
              type="radio"
              id="contactChoice1"
              name="publicated"
              value="true"
              defaultChecked={isPublicated}
              onChange={handleInputChange}
            />
            <div className={style.radio_title}>Показать</div>
          </div>
          <div className={style.radio}>
            <input
              type="radio"
              id="contactChoice2"
              name="publicated"
              value="false"
              defaultChecked={!isPublicated}
              onChange={handleInputChange}
            />
            <div className={style.radio_title}>Скрыть</div>
          </div>
        </label>
      </div>
    </div>
  );
};

export default Publicated;
