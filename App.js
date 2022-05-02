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
import Timer from './src/containers/Coiuntdown';

export default function App() {
  return (
    <View style={{flex: 1}}>
      {/* <KbcHome/> */}
      <Kbc_Qestions />
      {/* <Kbc_Result /> */}
      {/* <MediineData /> */}
      {/* <Timer /> */}
    </View>
  );
}
// 