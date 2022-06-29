import React, { FC } from 'react';

interface IFooterTitle {
  title: string;
  className: string;
}

const FooterTitle: FC<IFooterTitle> = ({ title, className }) => {
  return <div className={className}>{title}</div>;
};

export default FooterTitle;
