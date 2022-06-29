import { IData } from '../../mocks/data';

export const DELETE_ITEM = 'DELETE_ITEM';

export const deleteItem = (payload: IData) => {
  return { type: DELETE_ITEM, payload };
};
