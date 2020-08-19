const pathsMap = {
  home: () => '/'
};

function getPath(route, ...params) {
  let path = pathsMap[route];

  return path(...params);
}

export { getPath };
