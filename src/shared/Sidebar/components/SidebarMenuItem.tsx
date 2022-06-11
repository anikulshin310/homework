import React, { FC, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
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
  const location = useLocation();
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (location.pathname === menuItem.path) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  });
  return (
    <Link to={menuItem.path} key={`${menuItem.id}:${menuItem.name}`}>
      {isActive ? (
        <div className={style.menu_item_active_left_border}></div>
      ) : null}
      <div className={!isActive ? style.menu_item : style.menu_item_active}>
        <div  className={!isActive ? style.menu_item_logo : style.menu_item_logo_active} style={{
          WebkitMask: `url(${menuItem.logo}) no-repeat center `,
          maskImage: `url(${menuItem.logo}) no-repeat center `,
        }}/>
        <div className={style.menu_item_name}>{menuItem.name}</div>
      </div>
    </Link>
  );
};

export default SidebarMenuItem;
