import React, { FC } from "react";
import { modalConfig } from "./modalConfig";
import style from "./modal.module.scss";

interface IModal {
  modalMenuAction: (action: string, item: any) => void;
  goodsItem: any;
}
const Modal: FC<IModal> = ({ modalMenuAction, goodsItem }) => {
  return (
    <div className={style.modal_wpapper}>
      {modalConfig.map((item) => (
        <div
          key={item.id}
          className={style.item_wrapper}
          onClick={() => modalMenuAction(item.action, goodsItem)}
        >
          <div className={style.modal_menu_item}>
            <img src={item.icon}></img>
            <div className={style.item_name}>{item.text}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Modal;
