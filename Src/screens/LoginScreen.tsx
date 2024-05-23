import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { useAuth } from '../context/AuthContext';
import { globalStyles } from '../styles';

const LoginScreen = () => {
  const { login } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Login Screen</Text>
      <TextInput
        style={globalStyles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={globalStyles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button
        title="Login"
        onPress={() => login(username, password)}
        color="#007bff"
      />
    </View>
  );
};

export default LoginScreen;
