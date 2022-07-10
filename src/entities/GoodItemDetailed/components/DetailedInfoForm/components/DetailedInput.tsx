import React, { FC } from 'react';
import style from '../DetailedInfoForm.module.scss';

interface IDetailedInput {
  type?: string;
  onChange?: (e: any) => void;
  title: string;
  value?: string | number;
  edit: boolean;
  name?: string;
}

const DetailedInput: FC<IDetailedInput> = ({ type, title, value, edit, onChange, name }) => {
  return (
    <div className={style.form_input}>
      <div className={style.form_title}>{title}</div>
      <input type={type} value={value} disabled={!edit} onChange={onChange} name={name} />
    </div>
  );
};

export default DetailedInput;
