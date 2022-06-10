import React, { FC } from "react";
import style from "../Sidebar.module.scss";

interface ISidebarUserItem {
  currentUser: {
    name: string;
    role: string;
  };
}

const SidebarUserItem: FC<ISidebarUserItem> = ({ currentUser }) => {
  return (
    <div className={style.user_item_wrapper}>
      <div className={style.user_item_content}>
        <div className={style.user_item_avatar}>
          <div className={style.user_item_avatar_text}>
            {currentUser.role === "Admin" ? "A" : null}
          </div>
        </div>
        <div className={style.user_item_info}>
          <div className={style.user_item_name}>{currentUser.name}</div>
          <div className={style.user_item_panel_name}>
            {currentUser.role === "Admin" ? "Админ-меню" : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarUserItem;
