import React from 'react';
import {View, Text} from 'react-native';

const CreatePostScreen = () => {
  return (
    <View style={{backgroundColor: 'green', height: '100%'}}>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 30,
          color: 'white',
          marginTop: 300,
        }}>
        Create Post
      </Text>
    </View>
  );
};

export default CreatePostScreen;
