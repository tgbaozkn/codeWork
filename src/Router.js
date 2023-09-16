import React from 'react';
import DrawerNavigation from './Navigation/DrawerNavigation';
import {Provider} from 'react-redux';
import store from './context/store';

const Router = () => {
  return (
    <Provider store={store}>
      <DrawerNavigation />
    </Provider>
  );
};

export default Router;
