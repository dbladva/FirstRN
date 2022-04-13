import { View, Text } from 'react-native'
import React from 'react'
import First from './src/containers/First'
import Demo from './src/containers/Demo'
import MedicineData from './src/containers/MedicineData'
import Counter from './src/containers/Counter'

export default function App() {
  return (
    <View>
      <MedicineData />
      <First />
      <Demo />
      <Counter />
    </View>
  )
}