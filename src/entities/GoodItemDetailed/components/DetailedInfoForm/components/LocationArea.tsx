import React, { FC, useEffect, useState } from 'react';
import axios from 'axios';
import style from '../DetailedInfoForm.module.scss';
import DetailedInput from './DetailedInput';
import DetailedInfoMap from './Map';

interface ILocationArea {
  coordinates: {
    latitude: number;
    longtitude: number;
  };
  edit: boolean;
  handleInputChange?: (e: any) => void;
}

const LocationArea: FC<ILocationArea> = ({ coordinates, edit, handleInputChange }) => {
  const [adress, setAdress] = useState();

  /*   useEffect(() => {
    axios
      .get(
        `https://geocode-maps.yandex.ru/1.x/?apikey=e1239f87-52e0-4526-90f0-3619ee76051e&format=json&geocode=${coordinates.latitude},${coordinates.longtitude}&lang=ru-RU`
      )
      .then((res) => {
        console.log(res);
      });
  }); */

  return (
    <div>
      <DetailedInput
        title="Местоположение"
        value="местоположение"
        edit={edit}
        name="coordinates"
        onChange={handleInputChange}
      />
      {coordinates && (
        <div className={style.form_input}>
          <DetailedInfoMap latitude={coordinates.latitude} longtitude={coordinates.longtitude} />
        </div>
      )}
    </div>
  );
};

export default LocationArea;
