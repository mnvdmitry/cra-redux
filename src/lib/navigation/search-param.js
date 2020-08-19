import { useCallback } from 'react';
import { useLocation } from 'react-router-dom';

import { history } from './history';

export function setLocationSearchParam(key, value) {
  let location = history.location;
  let searchParams = new URLSearchParams(location.search);

  if (value) {
    searchParams.set(key, value);
  } else {
    searchParams.delete(key);
  }

  history.push({
    pathname: location.pathname,
    search: searchParams.toString(),
    hash: location.hash
  });
}

export function getLocationSearchParam(key) {
  let searchParams = new URLSearchParams(history.location.search);

  return searchParams.get(key);
}

export function useLocationSearchParam(key) {
  let searchParams = new URLSearchParams(useLocation().search);

  let value = searchParams.get(key);

  let onSetValue = useCallback(
    (newValue) => {
      setLocationSearchParam(key, newValue);
    },
    [key]
  );

  return [value, onSetValue];
}
