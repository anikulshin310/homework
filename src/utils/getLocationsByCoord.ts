import React, { useEffect, useState } from 'react';

export const useLocationsByCoord = (lat?: number, lon?: number) => {
  const [locationName, setLocationName] = useState('');

  const res = fetch(
    `https://geocode-maps.yandex.ru/1.x/?apikey=1ca5bb73-64e4-4ad6-b2d5-fb85d9e34a93&format=json&geocode=${lon},${lat}&lang=ru-RU`
  )
    .then((response) => response.json())
    .then((data) => setLocationName(data));
  useEffect(() => console.log(locationName), []);
  return locationName;
};
