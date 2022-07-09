import { PayloadAction } from '@reduxjs/toolkit';

import { dataItems, IData } from '../../mocks/data';
import { DELETE_ITEM, ADD_ITEM, EDIT_ITEM } from './actions';
// Все-таки стор это стор, и в случае с редаксом не видел кейсов,
// когда у тебя стор ==== данным с сервера (чем он у тебя сейчас фактически является).
// Лучше, если все-таки это будет объект, у которого одно из полей - dataItems.
// Так легче будет стор расширять в дальнейшем
const initialState = {
  goods: dataItems,
};

export const GoodsReducer = (state = initialState, action: PayloadAction<IData>) => {
  switch (action.type) {
    case DELETE_ITEM:
      return { goods: [...state.goods.filter((item) => item !== action.payload)] };
    case ADD_ITEM:
      return { goods: [action.payload, ...state.goods] };
    case EDIT_ITEM:
      return {
        goods: [
          ...state.goods.map((item) => (item.uuid === action.payload.uuid ? action.payload : item)),
        ],
      };

    default:
      return state;
  }
};
