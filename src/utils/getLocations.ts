export const getLocations = async (lat: number | undefined, lon: number | undefined, name = '') => {
  const res = await fetch(
    `https://geocode-maps.yandex.ru/1.x/?apikey=1ca5bb73-64e4-4ad6-b2d5-fb85d9e34a93&format=json&geocode=${lon},${lat}&lang=ru-RU`
  );
  const data = await res
    .json()
    .then((value) => value.response.GeoObjectCollection.featureMember[0].GeoObject.name);

  return data;
};
