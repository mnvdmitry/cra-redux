import React from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import 'styles/common.css';
import { configureStore } from 'store';
import { history } from 'lib/navigation';
import { Routes } from 'pages';

const App = () => {
  let store = configureStore();

  return (
    <React.Suspense fallback={<></>}>
      <Provider store={store}>
        <Router history={history}>
          <Routes />
        </Router>
      </Provider>
    </React.Suspense>
  );
};

export default App;
