import React from 'react';
import { View, Text } from 'react-native';
import HomeScreen from './HomeScreen';
import { globalStyles } from '../../styles';

const AdminScreen: React.FC = () => {
  return (
    <View style={globalStyles.container}>
      <HomeScreen />
      <Text style={globalStyles.title}>Admin Dashboard</Text>
    </View>
  );
};

export default AdminScreen;
