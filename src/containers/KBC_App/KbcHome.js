import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

export default function KbcHome({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.LogoView}>
        <Text style={styles.TitleText}>Let's Play Quiz,</Text>
        <Text style={styles.SubTitleText}>Enter Your information below</Text>
        {/* <Image style={styles.KbcLogo} source={require('../../../assets/images/kbc.png')}/> */}
      </View>
      <View style={styles.KbcContentView}>
        <TextInput
          style={styles.InputName}
          //   onChangeText={text => onChangeText(text)}
          placeholder="Enter Full Name"
        />
      </View>

      <View style={styles.StartView}>
        <TouchableOpacity onPress={() => navigation.navigate('Kbc_Qestions')}>
          <Text style={styles.BtnText}>Let's Start Quiz</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#000000',
    paddingLeft: 25,
    paddingRight: 25,
  },
  TitleText:
  {
    color: 'white',
  },
  LogoView: {
    flex: 2,
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
  },
  KbcContentView: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  StartView: {
    flex: 2,
    // alignItems: 'center',
    justifyContent: 'flex-start',
  },
  TitleText: {
    fontSize: 40,
    fontWeight: '500',
    textTransform: 'capitalize',
  },
  SubTitleText: {
    fontSize: 16,
    fontWeight: '500',
  },
  InputName: {
    width: '100%',
    // color: '#ffffff',
    height: 50,
    // backgroundColor: '#212121',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 8,
    padding: 10,
  },
  BtnText: {
    fontSize: 20,
    color: 'black',
    borderColor: 'gray',
    backgroundColor: '#bbdefb',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 8,
    width: '100%',
    textAlign: 'center',
    fontWeight: '500',
    padding: 10,
  },
});
