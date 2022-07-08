import React, { FC } from 'react';
import style from '../Sidebar.module.scss';

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
            {/* Классно, что предусмотрели сразу такой кейс, но что, если ролей 5, 10?
             Обычно так и бывает. Можно сделать функцию с конструкцией switch-case, 
             которая будет возвращать в зависимости от роли что-либо, а сами роли вынести в enum.
              В целом, также лучшей практикой является не использовать строки в таких штуках.
               Либо енамки, либо константы (если сгруппировать сущности в енам нельзя по смыслу). 
               Но если все же не брать в учет количество ролей и преположить, что остается 
               тернака тут, то лучше вынести логику перед return в переменную, а сюда уже 
               класть статику. */}
            {currentUser.role === 'Admin' ? 'A' : null}
          </div>
        </div>
        <div className={style.user_item_info}>
          <div className={style.user_item_name}>{currentUser.name}</div>
          <div className={style.user_item_panel_name}>
            {currentUser.role === 'Admin' ? 'Админ-меню' : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarUserItem;
