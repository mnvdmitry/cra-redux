import React from 'react';
import { renderRoutes } from 'react-router-config';

import { getPath } from './path';

const HomePage = React.lazy(() =>
  import('./home-page').then((page) => ({ default: page.HomePage }))
);

const routesMap = [
  {
    path: getPath('home'),
    component: HomePage,
    exact: true
  }
];

function Routes() {
  return renderRoutes(routesMap);
}

export { Routes };
