import { View, Text } from 'react-native'
import React from 'react'
import First from './src/containers/First'
import Demo from './src/containers/Demo'
import MedicineData from './src/containers/MedicineData'
import Counter from './src/containers/Counter'
<<<<<<< HEAD
import Destructure from './src/containers/Destructure'
import ClassState from './src/containers/ClassState'
import FunState from './src/containers/FunState'
import Medi_State_class from './src/containers/Medi_State_class'
import Medi_State_Fun from './src/containers/Medi_State_Fun'

export default function App() {
  return (
    <View style={{marginTop: 50,alignItems: 'center'}}>
      
      <Medi_State_Fun />  
=======
import Destructuringg from './src/containers/Destructuringg'


export default function App() {
  return (
    <View style={{marginBottom: 20,}}>
      <MedicineData />
      <First />
      <Demo />
      <Destructuringg />
      {/* <Counter /> */}
>>>>>>> 94ee2e5da47e7c699463530305037bfe52f9c5ef
    </View>
  )
}