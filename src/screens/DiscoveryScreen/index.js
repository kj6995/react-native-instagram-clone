import React from 'react';
import {View, Text} from 'react-native';

const DiscoveryScreen = () => {
  return (
    <View style={{backgroundColor: 'blue', height: '100%'}}>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 30,
          color: 'white',
          marginTop: 300,
        }}>
        Discover
      </Text>
    </View>
  );
};

export default DiscoveryScreen;
