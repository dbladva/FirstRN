import { View, Text } from 'react-native'
import React from 'react'
import First from './src/containers/First'
import Demo from './src/containers/Demo'
import MedicineData from './src/containers/MedicineData'
import Counter from './src/containers/Counter'
import Destructure from './src/containers/Destructure'
import ClassState from './src/containers/ClassState'
import FunState from './src/containers/FunState'
import Medi_State_class from './src/containers/Medi_State_class'
import Medi_State_Fun from './src/containers/Medi_State_Fun'
import MediineData from './src/containers/MediineData'
import Watch2 from './src/containers/Watch2'
import Calculator from './src/containers/Calculator'
import GSTcalculator from './src/containers/GSTCalculator'



export default function App() {
  return (
    <View style={{flex: 1,}}>
      {/* <Calculator /> */}
      <GSTcalculator />
    </View>

  )
}