import { configureStore } from '@reduxjs/toolkit';

import { combineReducers } from 'redux';
import { currentGoodReducer } from './CurrentGood/currentGoodReducer';
import { GoodsReducer } from './Goods/goodsReducer';

const reducers = {
  goods: GoodsReducer,
  currentGood: currentGoodReducer,
};

const rootReducer = combineReducers(reducers);

export const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
