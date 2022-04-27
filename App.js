import { View, Text,StyleSheet,ImageBackground } from 'react-native'
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
import KBC from './src/containers/KBC'



export default function App() {
  return (
    <ImageBackground source={require('../FirstRN/assets/images/3.jpg')} resizeMode="cover" style={styles.image}>
    <View style={{flex: 1,}}>
      {/* <Calculator /> */}
      {/* <GSTcalculator /> */}
      <KBC />
    </View>
    </ImageBackground>

  )
}

const styles = StyleSheet.create({
  image: {
    // backgroundColor: 'black',
    flex: 1,
    
    // opacity: 0.5,
  },
}) 