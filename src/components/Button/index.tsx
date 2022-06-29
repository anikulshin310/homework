import React, { FC } from 'react';

interface IButton {
  text: string;
  onClick: () => void;
  className: string;
  icon: string;
}

const Button: FC<IButton> = ({ text, onClick, className, icon }) => {
  return (
    <button type="button" className={className} onClick={onClick}>
      {text}
      {icon ? <img src={icon} alt={text} /> : null}
    </button>
  );
};

export default Button;
