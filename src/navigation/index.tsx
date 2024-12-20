import React from 'react';
import { NavigationContainer } from '@react-navigation/native';


import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Hotel from '../screens/hotel';
import { SCREENS } from '../const/screens';
import TabNavigation from './tabNavigation';


 const Stack = createNativeStackNavigator({
    screens: {
        TabNavigation: TabNavigation,
        Hotel: Hotel
    }
})

export default function MainNavigation (): React.JSX.Element {
    return (
        <NavigationContainer>
            <Stack.Navigator  screenOptions={{
                                    headerShown: false
                                }}>
                <Stack.Screen
                    name={SCREENS.TAB_NAVIGATION}
                    component={TabNavigation}
                 />
                <Stack.Screen name={SCREENS.HOTEL} component={Hotel} />
            </Stack.Navigator>
        </NavigationContainer>
      )
}