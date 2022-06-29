import React, { FC } from 'react';
import { sidebarConfig } from './sidebarConfig';
import style from './Sidebar.module.scss';
import { currentUser } from '../../mocks/currentUser';
import SidebarMenuItem from './components/SidebarMenuItem';
import SidebarUserItem from './components/SidebarUserItem';

const Sidebar: FC = () => {
  return (
    <div className={style.sidebar_wrapper}>
      <div className={style.sidebar_menu}>
        <SidebarUserItem currentUser={currentUser} />
        {sidebarConfig.map((menuItem) => {
          return <SidebarMenuItem menuItem={menuItem} key={menuItem.id} />;
        })}
      </div>
    </div>
  );
};
export default Sidebar;
