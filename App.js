import {View, Text, StyleSheet, ImageBackground} from 'react-native';
import React from 'react';
import First from './src/containers/First';
import Demo from './src/containers/Demo';
import MedicineData from './src/containers/MedicineData';
import Counter from './src/containers/Counter';
import Destructure from './src/containers/Destructure';
import ClassState from './src/containers/ClassState';
import FunState from './src/containers/FunState';
import Medi_State_class from './src/containers/Medi_State_class';
import Medi_State_Fun from './src/containers/Medi_State_Fun';
import MediineData from './src/containers/MediineData';
import Watch2 from './src/containers/Watch2';
import Calculator from './src/containers/Calculator';
import GSTcalculator from './src/containers/GSTCalculator';
import KBC from './src/containers/KBC';
import KbcHome from './src/containers/KBC_App/KbcHome';
import Kbc_Qestions from './src/containers/KBC_App/Kbc_Qestions';
import Kbc_Result from './src/containers/KBC_App/Kbc_Result';

export default function App() {
  return (
    // <ImageBackground source={require('../FirstRN/assets/images/3.jpg')} resizeMode="cover" style={styles.image}>
    <View style={{flex: 1}}>
      {/* <KbcHome/> */}
      <Kbc_Qestions />
      {/* <Kbc_Result /> */}
    </View>
    // </ImageBackground>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
  },
});
