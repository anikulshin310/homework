import React, { FC, useEffect, useReducer, useState } from 'react';
import { IData } from '../../../../mocks/data';
import style from './DetailedInfoForm.module.scss';
import DetailedInput from './DetailedInput';

interface IDetailedInfoForm {
  item?: any;
  edit: boolean;
  handleInputChange?: (e: any) => void;
}

const DetailedInfoForm: FC<IDetailedInfoForm> = ({ item, edit, handleInputChange }) => {
  return (
    <div className={style.form_wrapper}>
      <DetailedInput
        title="Название товара"
        value={item?.name}
        edit={edit}
        field="name"
        onChange={handleInputChange}
      />
      <div className={style.row_two_items}>
        <DetailedInput
          title="Категория"
          value={item?.category}
          edit={edit}
          field="category"
          onChange={handleInputChange}
        />
        <DetailedInput
          title="Стоимость"
          value={item?.price}
          edit={edit}
          field="price"
          onChange={handleInputChange}
        />
      </div>
      <DetailedInput
        title="Телефон"
        value={item?.phone}
        edit={edit}
        field="phone"
        onChange={handleInputChange}
      />
      <div className={style.form_input}>
        <div className={style.form_title}>Описание</div>
        <textarea
          disabled={!edit}
          maxLength={3000}
          value={item?.description}
          name="description"
          onChange={handleInputChange}
        />
      </div>
      <DetailedInput type="file" title="Фотография" edit={edit} />
      <DetailedInput
        title="Местоположение"
        value={item?.coordinates.latitude}
        edit={edit}
        field="coordinates"
        onChange={handleInputChange}
      />
    </div>
  );
};
export default DetailedInfoForm;
