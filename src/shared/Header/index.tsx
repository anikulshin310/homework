import React, { FC } from 'react';
import style from './Header.module.scss';
import Logo from '../../components/Logo';
import UserButton from './components/UserButton';

const Header: FC = () => {
  return (
    <div className={style.header}>
      <Logo title="стикер" />
      {/* Компонент UserButton можно сделать переиспользуемым для всего проекта, прокидывая через пропсы нужный путь до картинки, да и в целом внутри компонента свойство это можно будет сделать необязательным и делать провреку (на случай, если кнопка без иконки) */}
      <UserButton title="Профиль" />
    </div>
  );
};

export default Header;
