import React, { FC, useEffect } from 'react';
import DetailedInput from './DetailedInput';
import style from '../DetailedInfoForm.module.scss';

interface ICategories {
  edit: boolean;
  handleInputChange?: (e: any) => void;
  categories?: (string | undefined)[];
  itemCategory: string;
}

const Categories: FC<ICategories> = ({ edit, handleInputChange, categories, itemCategory }) => {
  const defaultCategory = !itemCategory ? categories?.[0] : itemCategory;

  if (edit) {
    return (
      <div className={style.form_input}>
        <div className={style.form_title}>Категория</div>
        <select value={defaultCategory} name="category" onChange={handleInputChange}>
          {categories?.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
    );
  }
  return (
    <DetailedInput
      title="Категория"
      value={itemCategory}
      edit={edit}
      name="category"
      onChange={handleInputChange}
    />
  );
};

export default Categories;
