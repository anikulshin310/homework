import React, { FC } from 'react';

interface IButton {
  text: string;
  onClick: () => void;
  className: string;
  icon?: string;
}
const Button: FC<IButton> = ({ text, onClick, className, icon }) => {
  return (
    <div className={className} onClick={onClick}>
      {text}
      {icon ? <img src={icon}></img> : null}
    </div>
  );
};

export default Button;
