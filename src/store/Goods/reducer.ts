import { dataItems } from '../../mocks/data';
import { DELETE_ITEM, ADD_ITEM } from './actions';

const initialState = dataItems;

export const GoodsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case DELETE_ITEM:
      return [...state.filter((item) => item !== action.payload)];
    case ADD_ITEM:
      return [action.payload, ...state];

    default:
      return state;
  }
};
