import { IData } from '../../mocks/data';

export interface IGetGoodsData {
  goods: {
    goods: IData[];
  };

  currentGood: IData;
}
export const getGoodsData = (state: IGetGoodsData) => state.goods.goods;
export const getGoodsCategories = (state: IGetGoodsData) =>
  Array.from(new Set(state.goods.goods.map((good) => good.category)));

export const getCurrentGood = (state: IGetGoodsData) => state.currentGood;
