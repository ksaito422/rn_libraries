import React from 'react';
import { Button, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import { createStackNavigator, StackNavigationProp, TransitionPresets } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from 'src/screens/home/Home.screen';
import { ProfileScreen } from 'src/screens/profile/Profile.screen';
import { EventListScreen } from 'src/screens/event/EventList.screen';
import { EventDetailScreen } from 'src/screens/event/EventDetail.screen';
import { EntryEventListScreen } from 'src/screens/event/EntryEventList.screen';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

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
        tabBarLabel: 'Setting',
        tabBarIcon: ({ color }) => <Icon name="settings-outline" size={30} color="white" />,
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
        tabBarLabel: 'プロフィール',
        headerBackTitleVisible: false,
      })}
    />
    <Top.Screen
      name="EventDetail"
      component={EventDetailScreen}
      options={() => ({
        headerShown: true,
        tabBarLabel: 'プロフィール',
        headerBackTitleVisible: false,
      })}
    />
  </Top.Navigator>
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
    <Stack.Screen
      name="EventList"
      component={EventListScreen}
      options={{
        title: 'イベント',
      }}
    />
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
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={({ navigation }) => ({
          headerShown: true,
          title: 'プロフィール',
          headerBackTitleVisible: false,
          headerRight: () => <Button onPress={() => navigation.navigate('Home')} title="info" />,
        })}
      />
      <Stack.Screen name="EntryEventList" component={TopScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);
