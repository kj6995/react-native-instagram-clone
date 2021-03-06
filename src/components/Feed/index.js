import React from 'react';
import {FlatList} from 'react-native';
import Post from '../Post';
import UserStoriesPreview from '../UserStoriesPreview';

const data = [
  {
    id: '1',
    user: {
      imageUri:
        'https://images.unsplash.com/photo-1416339306562-f3d12fefd36f?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=92f3e02f63678acc8416d044e189f515',
      name: 'Yolo',
    },
    imageUri: 'https://images.unsplash.com/photo-1416339306562-f3d12fefd36f',
    caption: 'Nice Image #React-Native #Instagram',
    likes: 1234,
    postedAt: '6 minutes ago',
  },
  {
    id: '2',
    user: {
      imageUri:
        'https://images.unsplash.com/photo-1416339306562-f3d12fefd36f?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=92f3e02f63678acc8416d044e189f515',
      name: 'Yolo',
    },
    imageUri: 'https://images.unsplash.com/photo-1416339306562-f3d12fefd36f',
    caption: 'Nice Image #React-Native #Instagram',
    likes: 1234,
    postedAt: '6 minutes ago',
  },
  {
    id: '3',
    user: {
      imageUri:
        'https://images.unsplash.com/photo-1416339306562-f3d12fefd36f?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=92f3e02f63678acc8416d044e189f515',
      name: 'Yolo',
    },
    imageUri: 'https://images.unsplash.com/photo-1416339306562-f3d12fefd36f',
    caption: 'Nice Image #React-Native #Instagram',
    likes: 1234,
    postedAt: '6 minutes ago',
  },
];

const Feed = () => {
  return (
    <FlatList
      data={data}
      renderItem={({item}) => <Post post={item} />}
      keyExtractor={({id}) => id}
      ListHeaderComponent={UserStoriesPreview}
    />
  );
};

export default Feed;
