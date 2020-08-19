import { INCREMENT, DECREMENT, CHANGE_VALUE } from './types';

const initialState = {
  count: 0
};

export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT: {
      return { ...state, count: state.count + 1 };
    }

    case DECREMENT: {
      return { ...state, count: state.count - 1 };
    }

    case CHANGE_VALUE: {
      return { ...state, count: action.payload };
    }

    default:
      return state;
  }
};
