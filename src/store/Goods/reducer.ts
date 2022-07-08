import { PayloadAction } from '@reduxjs/toolkit';

import { dataItems, IData } from '../../mocks/data';
import {
  DELETE_ITEM,
  ADD_ITEM,
  EDIT_ITEM,
  SET_CURRENT,
  HANDLE_INPUT_TEXT,
  HANDLE_UUID,
} from './actions';
// Все-таки стор это стор, и в случае с редаксом не видел кейсов,
// когда у тебя стор ==== данным с сервера (чем он у тебя сейчас фактически является).
// Лучше, если все-таки это будет объект, у которого одно из полей - dataItems.
// Так легче будет стор расширять в дальнейшем
const initialState = {
  goods: dataItems,
  currentGood: {} as IData,
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
export const currentGoodReducer = (state = initialState.currentGood, action: any) => {
  switch (action.type) {
    case SET_CURRENT:
      return { ...state, state: action.payload };
    case HANDLE_INPUT_TEXT:
      return { ...state, [action.field]: action.payload };
    case HANDLE_UUID:
      return { ...state, [action.field]: action.payload };

    default:
      return state;
  }
};
