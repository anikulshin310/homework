import { IData } from '../../mocks/data';

export const DELETE_ITEM = 'DELETE_ITEM';
export const deleteItem = (payload: IData) => {
  return { type: DELETE_ITEM, payload };
};

export const ADD_ITEM = 'ADD_ITEM';
export const addItem = (payload: IData) => {
  return { type: ADD_ITEM, payload };
};

export const EDIT_ITEM = 'EDIT_ITEM';
export const editItem = (payload: IData) => {
  return { type: EDIT_ITEM, payload };
};

export const SET_CURRENT = 'SET_CURRENT';
export const setCurrentItem = (payload: any) => {
  return { type: SET_CURRENT, payload };
};

export const CLEAR_CURRENT = 'CLEAR_CURRENT';
export const clearCurrent = () => {
  return { type: CLEAR_CURRENT };
};

export const HANDLE_INPUT_TEXT = 'HANDLE_INPUT_TEXT';
export const handleInputText = (payload: any, field: string) => {
  return { type: HANDLE_INPUT_TEXT, payload, field };
};

export const HANDLE_UUID = 'HANDLE_UUID';
export const handleUuid = (payload: any, field: string) => {
  return { type: HANDLE_UUID, payload, field };
};
