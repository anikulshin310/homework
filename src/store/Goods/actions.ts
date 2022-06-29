import { IData } from '../../mocks/data';

export const DELETE_ITEM = 'DELETE_ITEM';

export const deleteItem = (payload: IData) => {
  return { type: DELETE_ITEM, payload };
};

export const ADD_ITEM ='ADD_ITEM'
export const addItem =(payload:IData)=>{
  return {type:ADD_ITEM, payload}
}
