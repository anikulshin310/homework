import React, { FC } from 'react';
import { modalConfig } from './modalConfig';
import style from './modal.module.scss';
import { IData } from '../../mocks/data';

interface IModal {
  modalMenuAction: (action: string, item: IData) => void;
  goodsItem: IData;
}
const Modal: FC<IModal> = ({ modalMenuAction, goodsItem }) => {
  return (
    <div className={style.modal_wpapper}>
      {modalConfig.map((item) => (
        <button
          type="button"
          key={item.id}
          className={style.item_wrapper}
          onClick={() => modalMenuAction(item.action, goodsItem)}>
          <div className={style.modal_menu_item}>
            <img src={item.icon} alt={item.action} />
            <div className={style.item_name}>{item.text}</div>
          </div>
        </button>
      ))}
    </div>
  );
};

export default Modal;
