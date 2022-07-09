import { IData } from '../../mocks/data';

import { CLEAR_CURRENT, HANDLE_INPUT_TEXT, HANDLE_UUID, SET_CURRENT } from './actions';

const initialState = {
  currentGood: {} as IData,
};

export const currentGoodReducer = (state = initialState.currentGood, action: any) => {
  switch (action.type) {
    case SET_CURRENT:
      return { ...state, ...action.payload };
    case CLEAR_CURRENT:
      return {};

    case HANDLE_INPUT_TEXT:
      return { ...state, [action.field]: action.payload };
    case HANDLE_UUID:
      return { ...state, [action.field]: action.payload };

    default:
      return state;
  }
};
