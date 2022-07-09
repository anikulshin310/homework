import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import DetailedInput from './DetailedInput';
import { getGoodsCategories, getGoodsData } from '../../../../store/Goods/selectors';

import DetailedInfoMap from '../YMaps';
import style from './DetailedInfoForm.module.scss';

interface IDetailedInfoForm {
  item?: any;
  edit: boolean;
  handleInputChange?: (e: any) => void;
}
// Очень толстый компонент, надо пилить на подкомпоненты.
const DetailedInfoForm: FC<IDetailedInfoForm> = ({ item, edit, handleInputChange }) => {
  const goodsData = useSelector(getGoodsData);
  const categories = useSelector(getGoodsCategories);
  return (
    <div className={style.form_wrapper}>
      <DetailedInput
        title="Название товара"
        value={item?.name}
        edit={edit}
        name="name"
        onChange={handleInputChange}
      />
      <div className={style.row_two_items}>
        {/* Вот эту штуку ниже точно можно в отдельный компонент вынести, 
        куда флаг edit будет прокидывать и уже внутри компонента сравнивать. 
        Ну и нужные пропсы прокинешь соовтетственно */}
        {!edit ? (
          <DetailedInput
            title="Категория"
            value={item?.category}
            edit={edit}
            name="category"
            onChange={handleInputChange}
          />
        ) : (
          <div className={style.form_input}>
            <div className={style.form_title}>Категория</div>
            <select value={item?.category} name="category" onChange={handleInputChange}>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
        )}

        <DetailedInput
          title="Стоимость"
          value={item?.price}
          edit={edit}
          name="price"
          onChange={handleInputChange}
        />
      </div>
      <DetailedInput
        title="Телефон"
        value={item?.phone}
        edit={edit}
        name="phone"
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
        value={item?.coordinates?.latitude}
        edit={edit}
        name="coordinates"
        onChange={handleInputChange}
      />
      {item?.coordinates?.longtitude ? (
        <div className={style.form_input}>
          <DetailedInfoMap
            latitude={item?.coordinates?.latitude}
            longtitude={item?.coordinates?.longtitude}
          />
        </div>
      ) : null}
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
                defaultChecked={item?.publicated}
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
                defaultChecked={!item?.publicated}
                onChange={handleInputChange}
              />
              <div className={style.radio_title}>Скрыть</div>
            </div>
          </label>
        </div>
      </div>
    </div>
  );
};
export default DetailedInfoForm;
