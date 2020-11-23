import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import ProfilePicture from '../ProfilePicture';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

const UserStoryPreview = ({story}) => {
  const {
    user: {id, imageUri, name},
  } = story;

  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate('Story', {userId: id});
  };

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <ProfilePicture uri={imageUri} />
      <Text style={styles.name}>{name}</Text>
    </TouchableOpacity>
  );
};

export default UserStoryPreview;
