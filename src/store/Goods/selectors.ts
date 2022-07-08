import { IData } from '../../mocks/data';

export interface IGetGoodsData {
  goods: {
    goods: IData[];
    currentGood: IData;
  };
}
export const getGoodsData = (state: IGetGoodsData) => state.goods.goods;
export const getCurrentGood = (state: IGetGoodsData) => state.goods.currentGood;
