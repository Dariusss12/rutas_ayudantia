import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useAuth } from '../context/AuthContext';
import AdminScreen from '../screens/AdminScreen';
import UserScreen from '../screens/UserScreen';
import LoginScreen from '../screens/LoginScreen';

export type RootStackParamList = {
  Admin: undefined;
  User: undefined;
  Login: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator: React.FC = () => {
  const { user } = useAuth();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {user ? (
          user.role === 'admin' ? (
            <Stack.Screen name="Admin" component={AdminScreen} />
          ) : (
            <Stack.Screen name="User" component={UserScreen} />
          )
        ) : (
          <Stack.Screen name="Login" component={LoginScreen} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
