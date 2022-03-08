import LoginSignupNavigator from '../screens/loginSignupMain/loginSignupNavigator'
import { createStackNavigator } from '@react-navigation/stack';


import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

export default function CreateRootNavigator({}) {
  
  return (
      <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Splash" component={LoginSignupNavigator} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}