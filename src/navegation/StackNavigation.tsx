import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {Pagina1Screen} from '../screens/Pagina1Screen';
import {Pagina2Screen} from '../screens/Pagina2Screen';
import {Pagina3Screen} from '../screens/Pagina3Screen';
import {PersonaScreen} from '../screens/PersonaScreen';

export type RoorStackParams = {
  Pagina1: undefined;
  Pagina2: undefined;
  Pagina3: undefined;
  Persona: {id: number; name: string};
};

const Stack = createStackNavigator<RoorStackParams>();

export const StackNavigation = () => {
  return (
    <Stack.Navigator
      // initialRouteName="pagina3"
      screenOptions={{
        headerStyle: {
          elevation: 0,
        },
        cardStyle: {
          backgroundColor: 'white',
        },
      }}>
      <Stack.Screen
        name="Pagina1"
        options={{title: 'Pagina 1'}}
        component={Pagina1Screen}
      />
      <Stack.Screen
        name="Pagina2"
        options={{title: 'Pagina 2'}}
        component={Pagina2Screen}
      />
      <Stack.Screen
        name="Pagina3"
        options={{title: 'Pagina 3'}}
        component={Pagina3Screen}
      />
      <Stack.Screen name="Persona" component={PersonaScreen} />
    </Stack.Navigator>
  );
};
