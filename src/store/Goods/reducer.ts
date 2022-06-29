import { PayloadAction } from '@reduxjs/toolkit';
import { dataItems, IData } from '../../mocks/data';
import { DELETE_ITEM, ADD_ITEM, SEARCH_ITEM } from './actions';

const initialState = dataItems;

export const GoodsReducer = (state = initialState, action: PayloadAction<IData>) => {
  switch (action.type) {
    case DELETE_ITEM:
      return [...state.filter((item) => item !== action.payload)];
    case ADD_ITEM:
      return [action.payload, ...state];

    default:
      return state;
  }
};
