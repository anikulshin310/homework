import React, { FC } from 'react';
import { YMaps, Map, ZoomControl, Placemark } from '@pbe/react-yandex-maps';

interface IDetailedInfoMap {
  latitude: number;
  longtitude: number;
}

const DetailedInfoMap: FC<IDetailedInfoMap> = ({ latitude, longtitude }) => {
  return (
    <YMaps>
      <Map width="100%" height="359px" defaultState={{ center: [latitude, longtitude], zoom: 9 }}>
        <ZoomControl
          options={{
            position: { top: '50px', right: '20px' },
          }}
          modules={['geocode']}
        />

        <Placemark defaultGeometry={[latitude, longtitude]} />
      </Map>
    </YMaps>
  );
};

export default DetailedInfoMap;
