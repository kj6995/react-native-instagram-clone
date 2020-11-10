import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import FeatherIcons from 'react-native-vector-icons/Feather';
import FoundationIcons from 'react-native-vector-icons/Foundation';
import ADIcon from 'react-native-vector-icons/AntDesign';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';

import DiscoveryScreen from '../screens/DiscoveryScreen';
import CreatePostScreen from '../screens/CreatePostScreen';
import NotificationScreen from '../screens/NotificationScreen';
import ProfileScreen from '../screens/ProfileScreen';

import HomeStackScreen from './home.routes';

const Tab = createBottomTabNavigator();

const Router = () => (
  <Tab.Navigator
    screenOptions={({route}) => ({
      tabBarIcon: ({focused, color, size}) => {
        let iconName;

        if (route.name === 'Home') {
          return <FoundationIcons name="home" size={size} color={color} />;
        }
        if (route.name === 'Discovery') {
          return <FeatherIcons name="search" size={size} color={color} />;
        }
        if (route.name === 'Post') {
          return <FeatherIcons name="plus-square" size={size} color={color} />;
        }
        if (route.name === 'Notification') {
          return <ADIcon name="hearto" size={size} color={color} />;
        }
        if (route.name === 'Profile') {
          return (
            <IoniconsIcon name="person-outline" size={size} color={color} />
          );
        }
      },
    })}
    tabBarOptions={{
      activeTintColor: '#000',
      inactiveTintColor: 'gray',
      showLabel: false,
    }}>
    <Tab.Screen name="Home" component={HomeStackScreen} />
    <Tab.Screen name="Discovery" component={DiscoveryScreen} />
    <Tab.Screen name="Post" component={CreatePostScreen} />
    <Tab.Screen name="Notification" component={NotificationScreen} />
    <Tab.Screen name="Profile" component={ProfileScreen} />
  </Tab.Navigator>
);

export default Router;
