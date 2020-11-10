import React from 'react';
import {Image} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import FeatherIcons from 'react-native-vector-icons/Feather';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../screens/HomeScreen';
import logo from '../assets/images/instagram.png';
const HomeStack = createStackNavigator();

const HomeRoutes = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen
      name="Home"
      component={HomeScreen}
      options={{
        title: 'Instagram - Clone',
        headerTitleContainerStyle: {
          alignItems: 'center',
        },
        headerLeftContainerStyle: {
          marginLeft: 15,
        },
        headerRightContainerStyle: {
          marginRight: 15,
        },
        headerLeft: () => (
          <FeatherIcons name="camera" size={25} color={'#000'} />
        ),
        headerTitle: () => (
          <Image
            source={logo}
            resizeMode="contain"
            style={{width: 100, height: 55}}
          />
        ),
        headerRight: () => (
          <IoniconsIcon name="paper-plane-outline" size={25} color={'#000'} />
        ),
      }}
    />
  </HomeStack.Navigator>
);

export default HomeRoutes;
