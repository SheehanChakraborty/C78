import * as  React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/homescreen';
import Isslocationscreen from './screens/isslocationscreen';
import Meteorsscreen from './screens/meteorsscreen';
import 'react-native-gesture-handler'

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="IssLocation" component={Isslocationscreen} />
        <Stack.Screen name="Meteors" component={Meteorsscreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;