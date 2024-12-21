import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Hotel from '../screens/hotel';
import {SCREENS} from '../const/screens';
import TabNavigation from './tabNavigation';
import Zoftify from '../screens/zoftify';
import {AppProvider} from '../store/appStore';
import {RootStackParamList} from '../types/types';
import {GRAY} from '../const/colors';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function MainNavigation(): React.JSX.Element {
  return (
    <AppProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            navigationBarColor: GRAY.G00,
            headerShown: false,
          }}>
          <Stack.Screen
            name={SCREENS.TAB_NAVIGATION}
            component={TabNavigation}
          />
          <Stack.Screen name={SCREENS.HOTEL} component={Hotel} />
          <Stack.Screen name={SCREENS.ZOFTIFY} component={Zoftify} />
        </Stack.Navigator>
      </NavigationContainer>
    </AppProvider>
  );
}
