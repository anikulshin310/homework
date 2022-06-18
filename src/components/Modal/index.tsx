import React from "react";
import { modalConfig } from "./modalConfig";
import style from "./modal.module.scss";

const Modal = () => {
  return (
    <div className={style.modal_wpapper}>
      {modalConfig.map((item) => (
        <div key={item.id} className={style.item_wrapper}>
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
