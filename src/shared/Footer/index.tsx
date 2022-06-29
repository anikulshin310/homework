import React, { FC } from 'react';
import style from './Footer.module.scss';
import Logo from '../../components/Logo';
import FooterTitle from './components/FooterTitle/FooterTitle';

const Footer: FC = () => {
  return (
    <div className={style.footer_wrapper}>
      <div className={style.footer}>
        <div className={style.footer_content_left}>
          <Logo title="стикер" />
          <div className={style.footer_divider} />
          <FooterTitle title="Доска объявлений" className={style.footer_title} />
        </div>
        <div className={style.footer_content_right}>
          <FooterTitle title="© ООО «Доска диджитал», 2022" className={style.footer_title} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
