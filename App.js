import * as React from 'react';
import { Button, View, Text } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './screens/Home';
import Scanner from './screens/Scanner';
import SplashScreen from './screens/SplashScreen';

const Stack = createNativeStackNavigator();

function App(){
  return(
    <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Welcome" component={SplashScreen}/>
        <Stack.Screen name="Trang chủ" component={Home} />
        <Stack.Screen name="Scan MSSV" component={Scanner} />
    </Stack.Navigator>
  )
}

export default () => {
  return (
    <NavigationContainer>
      <App/>
    </NavigationContainer>
  );
} 





