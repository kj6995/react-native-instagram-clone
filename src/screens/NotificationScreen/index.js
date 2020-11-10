import React from 'react';
import {View, Text} from 'react-native';

const NotificationScreen = () => {
  return (
    <View style={{backgroundColor: 'red', height: '100%'}}>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 30,
          color: 'white',
          marginTop: 300,
        }}>
        Notification
      </Text>
    </View>
  );
};

export default NotificationScreen;
