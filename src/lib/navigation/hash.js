import { history } from './history';

export function setLocationHash(value) {
  let location = history.location;

  history.push({
    pathname: location.pathname,
    search: location.search,
    hash: value
  });
}

export function getLocationHash() {
  return history.location.hash;
}
