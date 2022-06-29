import React, { FC, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const GoodItemDetailed: FC = () => {
  const location = useLocation();
  useEffect(() => {
    if (location.search === '?edit') {
      console.log('режим редактирования');
    }
  });
  return <div>{location.search}</div>;
};

export default GoodItemDetailed;
