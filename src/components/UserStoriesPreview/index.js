import React from 'react';
import {View, FlatList} from 'react-native';
import UserStoryPreview from '../UserStoryPreview';
import styles from './styles';
import storiesData from '../../data/stories';

const UserStoriesPreview = () => {
  return (
    <FlatList
      data={storiesData}
      keyExtractor={({user: {id}}) => id}
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.container}
      renderItem={({item, index}) => <UserStoryPreview story={item} />}
    />
  );
};

export default UserStoriesPreview;
