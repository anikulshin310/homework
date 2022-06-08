import React, { FC } from "react";
import style from "./UserButton.module.scss";
import { ReactComponent as UserSVGIcon } from "./icon.svg";

interface IUserButton {
  title: string;
}
const UserButton: FC<IUserButton> = ({ title }) => {
  return (
    <div className={style.user_button}>
      <UserSVGIcon className={style.user_button_icon} />
      <div className={style.user_button_title}>{title}</div>
    </div>
  );
};
export default UserButton;
