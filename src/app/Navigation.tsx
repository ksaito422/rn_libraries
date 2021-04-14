import React from 'react';
import { Platform } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import { useSelector } from 'react-redux';
import { RootState } from 'src/app/store';

import { LoginScreen } from 'src/screens/login/Login.screen';
import { HomeScreen } from 'src/screens/home/Home.screen';
import { ProfileScreen } from 'src/screens/profile/Profile.screen';
import { EventListScreen } from 'src/screens/event/EventList.screen';
import { EventDetailScreen } from 'src/screens/event/EventDetail.screen';
import { EntryEventListScreen } from 'src/screens/event/EntryEventList.screen';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

export type NavParamOptions = {
  Login: undefined;
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
const Top = createMaterialTopTabNavigator<NavParamOptions>();

const TabScreen = () => (
  <Tab.Navigator
    screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: 'tomato',
      tabBarInactiveTintColor: 'white',
      tabBarIconStyle: {
        backgroundColor: 'white',
      },
      tabBarStyle: {
        backgroundColor: 'black',
      },
    }}>
    <Tab.Screen
      name="Home"
      component={HomeScreen}
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({ color }) => <Icon name="home-outline" size={30} color="white" />,
      }}
    />
    <Tab.Screen
      name="Event"
      component={TopScreen}
      options={{
        tabBarLabel: 'Event',
        tabBarIcon: ({ color }) => <Icon name="list-outline" size={30} color="white" />,
      }}
    />
  </Tab.Navigator>
);

const TopScreen = () => (
  <Top.Navigator
    screenOptions={{ title: 'true', tabBarStyle: { backgroundColor: '#f0f0f0' } }}
    style={{
      marginTop: Platform.select({
        ios: 50,
        android: 0,
      }),
    }}>
    <Top.Screen
      name="EventList"
      component={EventListScreen}
      options={() => ({
        headerShown: true,
        tabBarLabel: 'イベント一覧',
        headerBackTitleVisible: false,
      })}
    />
    <Top.Screen
      name="EntryEventList"
      component={EntryEventListScreen}
      options={() => ({
        headerShown: true,
        tabBarLabel: '参加イベント',
        headerBackTitleVisible: false,
      })}
    />
  </Top.Navigator>
);

export const RootNavigator = () => {
  const isAuth = useSelector((state: RootState) => state.isLoggerdIn.isAuth);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        {!isAuth ? (
          <Stack.Screen name="Login" component={LoginScreen} />
        ) : (
          <>
            <Stack.Screen name="Tab" component={TabScreen} />
            <Stack.Screen
              name="Profile"
              component={ProfileScreen}
              options={() => ({
                headerShown: true,
                title: 'プロフィール',
                headerBackTitleVisible: false,
              })}
            />
            <Stack.Screen name="EventList" component={TopScreen} />
            <Stack.Screen name="EventDetail" component={EventDetailScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
