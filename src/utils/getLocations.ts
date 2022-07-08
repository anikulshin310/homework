// и тут name внутри функции никак не используется
// Плюс по типизации: в целом, не очень хорошо,
// когда приходится undefined буквально указывать, такое редко должно быть,
//  и в целом надо этого избегать. В таком случае обычно null передают,
// но если ты хочешь сделать параметр необязательным для функции,
// то напиши вот так: async (lat?: number, lon?: number, name = '') => ...
export const getLocations = async (lat?: number, lon?: number, name = '') => {
  const res = await fetch(
    `https://geocode-maps.yandex.ru/1.x/?apikey=1ca5bb73-64e4-4ad6-b2d5-fb85d9e34a93&format=json&geocode=${lon},${lat}&lang=ru-RU`
  );
  const data = await res
    .json()
    .then((value) => value.response.GeoObjectCollection.featureMember[0].GeoObject.name);

  return data;
};
