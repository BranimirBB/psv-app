import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/home.js';
import AllModules from './screens/allmodules.js';
import Feedback from './screens/feedback.js';
import Profile from './screens/profile.js';
import Nav from './components/navbar.js';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="AllModules" component={AllModules} />
        <Stack.Screen name="Feedback" component={Feedback} />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
      <Nav />
    </NavigationContainer>
  );
}
