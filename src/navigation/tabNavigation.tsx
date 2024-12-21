import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Expolrer from '../screens/explore';
import Stadiums from '../screens/stadiums';
import Information from '../screens/information';
import Contacts from '../screens/contacts';
import {SCREENS} from '../const/screens';
import HomeIcon from '../../assets/icons/home';
import ContactIcon from '../../assets/icons/contact';
import InformationIcon from '../../assets/icons/information';
import StadiumIcon from '../../assets/icons/stadum';
import {GRAY, PRIMARY} from '../const/colors';
import {TextStyles} from '../styles/texts';

const Tab = createBottomTabNavigator({
  screens: {
    Expolrer: Expolrer,
    Stadiums: Stadiums,
    Information: Information,
    Contacts: Contacts,
  },
});

export default function TabNavigation(): React.JSX.Element {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarActiveTintColor: PRIMARY.P120,
        tabBarInactiveTintColor: GRAY.G60,
        headerShown: false,
        tabBarLabelStyle: TextStyles.tabBar,
        tabBarIcon: ({focused}) => {
          switch (route.name) {
            case SCREENS.EXPLORE:
              return <HomeIcon isActive={focused} />;
            case SCREENS.CONTACTS:
              return <ContactIcon isActive={focused} />;
            case SCREENS.INFORMATION:
              return <InformationIcon isActive={focused} />;
            default:
              return <StadiumIcon isActive={focused} />;
          }
        },
        tabBarStyle: {
          borderTopWidth: 1,
          borderTopColor: GRAY.G10,
          elevation: 0,
          shadowOpacity: 0,
        },
      })}>
      <Tab.Screen name={SCREENS.EXPLORE} component={Expolrer} />
      <Tab.Screen name={SCREENS.STADUMS} component={Stadiums} />
      <Tab.Screen name={SCREENS.INFORMATION} component={Information} />
      <Tab.Screen name={SCREENS.CONTACTS} component={Contacts} />
    </Tab.Navigator>
  );
}
