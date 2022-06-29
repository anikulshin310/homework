import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { GoodsReducer } from './Goods/reducer';

const reducers = {
  goods: GoodsReducer,
};

const rootReducer = combineReducers(reducers);

export const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
