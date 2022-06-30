import React, { FC } from 'react';
import style from './DetailedInfoForm.module.scss';

interface IDetailedInput {
  type?: string;
  onChange?: (e: any) => void;
  title: string;
  value?: string | number;
  edit: boolean;
  field?: string;
}

const DetailedInput: FC<IDetailedInput> = ({ type, title, value, edit, onChange, field }) => {
  return (
    <div className={style.form_input}>
      <div className={style.form_title}>{title}</div>
      <input type={type} value={value} disabled={!edit} onChange={onChange} name={field} />
    </div>
  );
};

export default DetailedInput;
