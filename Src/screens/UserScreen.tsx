import React from 'react';
import { View, Text } from 'react-native';
import HomeScreen from './HomeScreen';
import { globalStyles } from '../styles';

const UserScreen = () => {
  return (
    <View style={globalStyles.container}>
      <HomeScreen />
      <Text style={globalStyles.title}>User Dashboard</Text>
    </View>
  );
};

export default UserScreen;
