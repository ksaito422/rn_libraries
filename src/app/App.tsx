import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';

import { Provider } from 'react-redux';
import store from 'src/app/store';

import { RootNavigator } from './Navigation';

export const App = () => {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 3000);
  });

  return (
    <Provider store={store}>
      <RootNavigator />
    </Provider>
  );
};
