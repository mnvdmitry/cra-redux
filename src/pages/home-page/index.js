import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { rootActions } from 'store';

import s from './index.module.css';

export const HomePage = () => {
  let count = useSelector((state) => state.counter.count);
  let dispatch = useDispatch();

  return (
    <div className={s.root}>
      <span>{count}</span>

      <div>
        <button
          onClick={() => dispatch(rootActions.counter.increment())}
          type="button"
        >
          Increment
        </button>

        <button
          onClick={() => dispatch(rootActions.counter.decrement())}
          type="button"
        >
          Increment Async
        </button>

        <button
          onClick={() => dispatch(rootActions.counter.changeValueAsync(5))}
          type="button"
        >
          Async change the value to 5
        </button>
      </div>
    </div>
  );
};
