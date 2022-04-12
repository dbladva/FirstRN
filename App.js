import { View, Text } from 'react-native'
import React from 'react'
import First from './src/containers/First'
import Demo from './src/containers/Demo'
import MedicineData from './src/containers/MedicineData'
import Counter from './src/containers/Counter'
import Destructuringg from './src/containers/Destructuringg'


export default function App() {
  return (
    <View style={{marginBottom: 20,}}>
      <MedicineData />
      <First />
      <Demo />
      <Destructuringg />
      {/* <Counter /> */}
    </View>
  )
}