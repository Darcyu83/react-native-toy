import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import About from '../components/About';
import Detail from '../components/Detail';
import Home from '../components/Home';

const Stack = createStackNavigator();

const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="Detail" component={Detail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
