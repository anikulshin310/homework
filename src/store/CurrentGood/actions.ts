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
