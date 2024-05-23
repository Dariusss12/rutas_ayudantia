import React from 'react';
import { View, Text, Button } from 'react-native';
import { useAuth } from '../context/AuthContext';
import { globalStyles } from '../styles';

const HomeScreen: React.FC = () => {
  const { logout, user } = useAuth();

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Welcome, {user?.username}!</Text>
      <Button title="Logout" onPress={logout} color="#007bff" />
    </View>
  );
};

export default HomeScreen;
