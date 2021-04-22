import React, { useEffect } from 'react';

import SplashScreen from 'react-native-splash-screen';
import { RecoilRoot } from 'recoil';

import { RootNavigator } from './Navigation';

export const App = () => {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 3000);
  });

  return (
    <RecoilRoot>
      <RootNavigator />
    </RecoilRoot>
  );
};
