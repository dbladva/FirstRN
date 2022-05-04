import { View, Text } from 'react-native'
import React from 'react'
import First from './src/containers/First'
import MedicineData from './src/containers/MedicineData'
import Destructuringg from './src/containers/Destructuringg'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/component/OLX/Home/HomeScreen'

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
     <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}