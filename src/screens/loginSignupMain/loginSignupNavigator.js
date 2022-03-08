import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './loginMain/Login';

const Stack = createStackNavigator();

function LoginSignupNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" options={{ headerShown: false }} component={Login} />
    </Stack.Navigator>
  );
}

export default LoginSignupNavigator;