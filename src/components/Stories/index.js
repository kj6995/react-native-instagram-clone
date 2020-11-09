import React from 'react';
import {View, FlatList} from 'react-native';
import Story from '../Story';
import styles from './styles';

const data = [
  {
    imageUri:
      'https://images.unsplash.com/profile-1446404465118-3a53b909cc82?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128&s=27a346c2362207494baa7b76f5d606e5',
    name: 'Kushagra',
  },
  {
    imageUri:
      'https://images.unsplash.com/profile-1441298803695-accd94000cac?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128&s=32085a077889586df88bfbe406692202',
    name: 'Coding',
  },
  {
    imageUri:
      'https://images.unsplash.com/photo-1416339306562-f3d12fefd36f?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=92f3e02f63678acc8416d044e189f515',
    name: 'Panda',
  },
  {
    imageUri:
      'https://images.unsplash.com/profile-1446404465118-3a53b909cc82?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128&s=27a346c2362207494baa7b76f5d606e5',
    name: 'Jain',
  },
  {
    imageUri:
      'https://images.unsplash.com/profile-1441298803695-accd94000cac?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128&s=32085a077889586df88bfbe406692202',
    name: 'Teacher',
  },
  {
    imageUri:
      'https://images.unsplash.com/photo-1416339306562-f3d12fefd36f?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=92f3e02f63678acc8416d044e189f515',
    name: 'Awesome',
  },
];

const Stories = () => {
  return (
    <FlatList
      data={data}
      //keyExtractor={({name}) => name}
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.container}
      renderItem={({item, index}) => (
        <Story key={index} imageUri={item.imageUri} name={item.name} />
      )}
    />
  );
};

export default Stories;
