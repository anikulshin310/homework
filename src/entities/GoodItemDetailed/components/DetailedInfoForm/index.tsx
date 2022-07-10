import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import DetailedInput from './components/DetailedInput';
import { getGoodsCategories } from '../../../../store/Goods/selectors';

import DetailedInfoMap from './components/Map';
import style from './DetailedInfoForm.module.scss';
import Categories from './components/Categories';
import Publicated from './components/Publicated';
import Description from './components/Description';
import LocationArea from './components/LocationArea';

interface IDetailedInfoForm {
  item?: any;
  edit: boolean;
  handleInputChange?: (e: any) => void;
}
const DetailedInfoForm: FC<IDetailedInfoForm> = ({ item, edit, handleInputChange }) => {
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
        <Categories
          handleInputChange={handleInputChange}
          categories={categories}
          itemCategory={item?.category}
          edit={edit}
        />
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
      <Description
        edit={edit}
        itemDescription={item?.description}
        handleInputChange={handleInputChange}
      />

      <DetailedInput type="file" title="Фотография" edit={edit} />

      <LocationArea
        edit={edit}
        coordinates={item?.coordinates}
        handleInputChange={handleInputChange}
      />
      {edit ? (
        <Publicated isPublicated={item?.publicated} handleInputChange={handleInputChange} />
      ) : null}
    </div>
  );
};
export default DetailedInfoForm;
