import React, { FC } from "react";
import style from "./Logo.module.scss";
import { ReactComponent as SVGIcon } from "../../assets/svg/logo.svg";

interface ILogo {
  title: string;
}
const Logo: FC<ILogo> = ({ title }) => {
  return (
    <div className={style.logo_wrapper}>
      <div>
        <SVGIcon className={style.logo_svg} />
      </div>
      <div className={style.logo_title}>{title}</div>
    </div>
  );
};
export default Logo;
