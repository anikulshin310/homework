import { IData } from '../../mocks/data';

interface IGetGoodsData {
  goods: IData[];
}
export const getGoodsData = (state: IGetGoodsData) => state.goods;
