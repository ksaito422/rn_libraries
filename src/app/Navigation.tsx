import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, StackNavigationProp, TransitionPresets } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from 'src/screens/home/Home.screen';
import { ProfileScreen } from 'src/screens/profile/Profile.screen';
import { EventListScreen } from 'src/screens/event/EventList.screen';
import { EventDetailScreen } from 'src/screens/event/EventDetail.screen';
import { EntryEventListScreen } from 'src/screens/event/EntryEventList.screen';

export type NavParamOptions = {
  Home: undefined;
  Profile: undefined;
  EventList: undefined;
  EventDetail: undefined;
  EntryEventList: undefined;
};

export type RootScreenNavigationProp = StackNavigationProp<NavParamOptions>;

const Stack = createStackNavigator<NavParamOptions>();
const Tab = createBottomTabNavigator<NavParamOptions>();

export const RootNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="EventList" component={EventListScreen} />
      <Stack.Screen name="EventDetail" component={EventDetailScreen} />
      <Stack.Screen name="EntryEventList" component={EntryEventListScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);
