import React, { FC } from 'react';
import style from '../DetailedInfoForm.module.scss';

interface IDescription {
  edit: boolean;
  itemDescription: string;
  handleInputChange?: (e: any) => void;
}

const Description: FC<IDescription> = ({ edit, itemDescription, handleInputChange }) => {
  return (
    <div className={style.form_input}>
      <div className={style.form_title}>Описание</div>
      <textarea
        disabled={!edit}
        maxLength={3000}
        value={itemDescription}
        name="description"
        onChange={handleInputChange}
      />
    </div>
  );
};

export default Description;
