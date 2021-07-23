import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
// import {StackNavigation} from './src/navegation/StackNavigation';
// import {DrewerNavigator} from './src/navegation/DrewerNavigator';
import { MenuLateral } from './src/navegation/MenuLateral';

export const App = () => {
  return (
    <NavigationContainer>
      <MenuLateral/>
      {/* <DrewerNavigator /> */}
      {/* <StackNavigation /> */}
    </NavigationContainer>
  );
};
