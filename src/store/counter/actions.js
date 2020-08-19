import { INCREMENT, DECREMENT, CHANGE_VALUE } from './types';

export const increment = () => {
  return {
    type: INCREMENT
  };
};

export const decrement = () => {
  return {
    type: DECREMENT
  };
};

export const changeValue = (value) => {
  return {
    type: CHANGE_VALUE,
    payload: value
  };
};

export const changeValueAsync = (value) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(changeValue(value));
    }, 1000);
  };
};
