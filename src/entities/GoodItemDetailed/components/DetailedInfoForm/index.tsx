import React, { FC } from 'react';
import { IData } from '../../../../mocks/data';
import style from './DetailedInfoForm.module.scss';
import DetailedInput from './DetailedInput';

interface IDetailedInfoForm {
  item?: IData;
  editable: boolean;
}

const DetailedInfoForm: FC<IDetailedInfoForm> = ({ item, editable }) => {
  return (
    <div className={style.form_wrapper}>
      <div className={style.first_row}>
        <DetailedInput title="Название товара" value={item?.name} editable={editable} />
      </div>
      <div className={style.second_row}>
        <DetailedInput title="Категория" value={item?.category} editable={editable} />
        <DetailedInput title="Стоимость" value={item?.price.toString()} editable={editable} />
      </div>
      <div className={style.third_row}>
        <DetailedInput title="Телефон" value={item?.phone} editable={editable} />
      </div>
      <div className={style.fourth_row}>
        <textarea disabled={!editable} maxLength={3000}>
          {item?.description}
        </textarea>
      </div>
    </div>
  );
};
export default DetailedInfoForm;
