import React from 'react';
import {View, Text} from 'react-native';

const ProfileScreen = () => {
  return (
    <View style={{backgroundColor: 'yellow', height: '100%'}}>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 30,
          color: 'black',
          marginTop: 300,
        }}>
        Profile
      </Text>
    </View>
  );
};

export default ProfileScreen;
