import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
  } from 'react-native';
  import React, { useState } from 'react';
  
  export default function GSTcalculator() {
    let Amount = '';
    let GST = '';
  
    const [IniAmount, setIniAmount] = useState(Amount);
    const [GSTrate, setGSTrate] = useState(GST);
    const [eqution, setEquetion] = useState('');
    const [TotalAmount, setTotalAmount] = useState(0);
    const [CGST, setCGST] = useState(0);
    const [SGST, setSGST] = useState(0);
  
    const CheckValue = () => {
      // if (IniAmount === '') {
      //   EnterValue();
      // }
  
      let GStAmount = 0;
      GStAmount = eval((IniAmount * GSTrate) / 100);
      setEquetion(GStAmount);
      console.log(eqution);
  
  
      let gst = 0;
      gst = eval(parseInt(IniAmount) + parseFloat(GStAmount));
      gst = gst.toFixed(2);
      setTotalAmount(gst);

      // CGST 
      let cgstRate = eval(GSTrate / 2);

      setCGST(eval(cgstRate * eqution) / 100)
      setSGST(eval(cgstRate * eqution) / 100)

    };

    const ClearAllData = () => {
      setIniAmount(0);
      setGSTrate(0);
      setTotalAmount(0);
      setCGST(0);
      setSGST(0)
    };
  
    return (
      <View style={style.container}>
        {/* Enter Value View */}
        <View style={style.InputValueView}>
          {/* Title */}
          <Text style={style.MainTitle}>GST Calculator</Text>
  
          <View style={style.netAmount}>
            <View style={{ width: '50%' }}>
              <Text style={{ fontSize: 20 }}>Initial Amount :</Text>
            </View>
            <View style={{ width: '50%' }}>
              <TextInput
                style={style.input}
                onChangeText={IniAmount => {
                  setIniAmount(IniAmount);
                }}
                // value={Amount}
                placeholder="Enter Amount"
                keyboardType="numbers-and-punctuation"
              />
            </View>
          </View>
          {/* 
            (EnterValue = () => {
              console.log('Enter Amount');
              return (
                <Text style={{color: 'white', fontSize: 30}}>
                  {' '}
                  Please Enter Any Amount{' '}
                </Text>
              );
            })
          } */}
  
          <View style={style.netAmount}>
            <View style={{ width: '50%' }}>
              <Text style={{ fontSize: 20 }}>Rate Of GST :</Text>
            </View>
  
            <View style={{ width: '50%' }}>
              <TextInput
                style={style.input}
                onChangeText={GST => {
                  setGSTrate(GST);
                }}
                // value={number}
                placeholder="Enter GST(%)"
                keyboardType="numbers-and-punctuation"
              />
            </View>
          </View>
          <View style={style.calculateBtn}>
            <TouchableOpacity onPress={() => CheckValue()}>
              <Text style={style.calculateText}>Calculate GST</Text>
            </TouchableOpacity>
          </View>
        </View>
  
        {/* OutputValueView */}
  
        <View style={style.OutputValueView}>
          <View style={style.netAmount}>
            <View style={{ width: '50%' }}>
              <Text style={{ fontSize: 20 }}>Net Amount :</Text>
            </View>
            <View style={{ width: '50%' }}>
              <Text style={style.resultText}>{IniAmount}</Text>
            </View>
          </View>
          <View style={style.netAmount}>
            <View style={{ width: '50%' }}>
              <Text style={{ fontSize: 20 }}>GST Amount :</Text>
            </View>
            <View style={{ width: '50%' }}>
              <Text style={style.resultText}>{eqution}</Text>
            </View>
          </View>
          <View style={style.netAmount}>
            <View style={{ width: '50%' }}>
              <Text style={{ fontSize: 20 }}>Total Amount :</Text>
            </View>
            <View style={{ width: '50%' }}>
              <Text style={style.resultText}>{TotalAmount}</Text>
            </View>
          </View>
          <View style={style.netAmount}>
            <View style={{ width: '50%' }}>
              <Text style={{ fontSize: 20 }}>CGST :</Text>
            </View>
            <View style={{ width: '50%' }}>
              <Text style={style.resultText}>{CGST}</Text>
            </View>
          </View>
          <View style={style.netAmount}>
            <View style={{ width: '50%' }}>
              <Text style={{ fontSize: 20 }}>SGST :</Text>
            </View>
            <View style={{ width: '50%' }}>
              <Text style={style.resultText}>{SGST}</Text>
            </View>
          </View>
        </View>
        <View style={style.ClearTextView}>
          <View style={style.calculateBtn}>
            <TouchableOpacity onPress={() => ClearAllData()}>
              <Text style={style.calculateText}>Remove All</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
  
  const style = StyleSheet.create({
    container: {
      flex: 1,
      padding: 30,
      backgroundColor: 'white',
    },
    InputValueView: {
      flex: 2.3,
      // backgroundColor: 'yellow'
      justifyContent: 'space-around',
      borderBottomWidth: 1,
      borderBottomColor: 'rgba(223, 168, 240, 0.87)',
      borderBottomEndRadius: 10,
      borderBottomLeftRadius: 10,
    },
    OutputValueView: {
      flex: 2.8,
      justifyContent: 'space-evenly',
      // alignItems: 'center',
      alignSelf: 'center',
      // backgroundColor: 'red',
      borderBottomWidth: 1,
      borderBottomColor: 'rgba(223, 168, 240, 0.87)',
      borderBottomEndRadius: 10,
      borderBottomLeftRadius: 10,
    },
    ClearTextView: {
      flex: 0.7,
      // backgroundColor: 'blue',
      justifyContent: 'flex-end',
    },
    MainTitle: {
      fontSize: 30,
      color: 'white',
      // color: 'black',
      fontWeight: 'bold',
      padding: 1,
      backgroundColor: 'rgba(123, 247, 212, 0.59)',
      textAlign: 'center',
      borderRadius: 10,
    },
    netAmount: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      // padding: 10,
      alignItems: 'center',
    },
    input: {
      borderWidth: 1,
      borderColor: 'rgba(245, 212, 163, 1)',
      borderRadius: 10,
    },
    calculateBtn: {
      margin: 10,
      alignItems: 'center',
    },
    calculateText: {
      fontSize: 20,
      // backgroundColor: 'rgba(104, 45, 190, 0.47)',
      padding: 5,
      width: 200,
      textAlign: 'center',
      borderRadius: 10,
      textShadowColor: 'rgba(184, 57, 223, 1)',
      textShadowOffset: { width: 4, height: 4 },
      textShadowRadius: 6,
      borderWidth: 0.5,
      borderColor: 'black',
    },
    resultText: {
      borderBottomWidth: 0.7,
      borderBottomColor: 'rgba(231, 168, 52, 0.76)',
      padding: 5,
      borderRadius: 5,
      fontSize: 25,
      color: 'rgba(21, 242, 57, 0.76)',
    },
  });
  