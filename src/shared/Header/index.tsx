import React, { FC } from "react";
import style from "../Header/Header.module.scss";
import Logo from "../../components/Logo";
import UserButton from "./components/UserButton";

const Header: FC = () => {
  return (
    <div className={style.header}>
      <Logo title={"стикер"} />
      <UserButton title={"Профиль"} />
    </div>
  );
};

export default Header;
