import React, { FC } from "react";
import style from "../Sidebar.module.scss";

interface ISidebarUserItem {
  currentUser: {
    name: string;
  };
}

const SidebarUserItem: FC<ISidebarUserItem> = ({ currentUser }) => {
  return <div className={style.user_item_wrapper}>{currentUser.name}</div>;
};

export default SidebarUserItem;
