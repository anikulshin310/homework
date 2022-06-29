import React, { FC } from 'react';
import style from './DetailedInfoForm.module.scss';

interface IDetailedInput {
  title: string;
  value?: string;
  editable: boolean;
}

const DetailedInput: FC<IDetailedInput> = ({ title, value, editable }) => {
  return (
    <div className={style.form_input}>
      <div className={style.form_title}>{title}</div>
      <input value={value} disabled={!editable} />
    </div>
  );
};

export default DetailedInput;
