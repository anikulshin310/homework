import React, { FC } from "react";
import style from "./UserButton.module.scss";
import userIcon from '../../../../assets/svg/userIcon.svg';

interface IUserButton {
  title: string;
}
const UserButton: FC<IUserButton> = ({ title }) => {
  return (
    <div className={style.user_button}>
      <div className={style.user_icon} style={{
          background: `url(${userIcon}) no-repeat center`,

          
        }}/>
      <div className={style.user_button_title}>{title}</div>
    </div>
  );
};
export default UserButton;
