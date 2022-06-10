import React, { FC, lazy } from "react";
import { Link } from "react-router-dom";
import style from "../Sidebar.module.scss";

interface ISidebarMenuItem {
  menuItem: {
    id: number;
    name: string;
    path: string;
    logo: string;
  };
}
const SidebarMenuItem: FC<ISidebarMenuItem> = ({ menuItem }) => {
  return (
    <Link to={"/"} key={`${menuItem.id}:${menuItem.name}`}>
      <div className={style.menu_item}>
        <img className={style.menu_item_logo} src={menuItem.logo}></img>
        <div className={style.menu_item_name}>{menuItem.name}</div>
      </div>
    </Link>
  );
};

export default SidebarMenuItem;
