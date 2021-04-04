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
  Tab: undefined;
  Home: undefined;
  Profile: undefined;
  Event: undefined;
  EventList: undefined;
  EventDetail: undefined;
  EntryEventList: undefined;
};

export type RootScreenNavigationProp = StackNavigationProp<NavParamOptions>;

const Stack = createStackNavigator<NavParamOptions>();
const Tab = createBottomTabNavigator<NavParamOptions>();

const TabScreen = () => (
  <Tab.Navigator screenOptions={{ headerShown: false }}>
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Event" component={EventStack} />
  </Tab.Navigator>
);

const EventStack = () => (
  <Stack.Navigator
    mode="modal"
    screenOptions={{
      headerShown: true,
      gestureEnabled: true,
      cardOverlayEnabled: true,
      ...TransitionPresets.ModalPresentationIOS,
    }}>
    <Stack.Screen name="EventList" component={EventListScreen} options={{ title: 'イベント' }} />
    <Stack.Screen name="EventDetail" component={EventDetailScreen} options={{ title: 'イベント詳細' }} />
  </Stack.Navigator>
);

export const RootNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Tab" component={TabScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="EntryEventList" component={EntryEventListScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);
