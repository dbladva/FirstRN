import {View, Text, StyleSheet, Image,TouchableOpacity} from 'react-native';
import React from 'react';

export default function Kbc_Result() {
  return (
    <View style={styles.container}>
      <View style={styles.winerLogo}>
        <Image
          style={styles.logoWinner}
          source={require('../../../assets/images/winner.png')}
        />
      </View>
      <View style={styles.scoreText}>
        <Text style={styles.Scoretext}>Score</Text>
        <Text style={styles.ScoretextResult}>0</Text>
      </View>
      <View style={styles.reTryBtn}>
      <TouchableOpacity onPress={() => Retry()}>
        <Text style={styles.NextBtn}>Retry</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scoreText: {
      flex: 1,
      justifyContent: 'center',
    color: 'white',
  },
  Scoretext: {
      fontSize: 40,

  },
  winerLogo: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  logoWinner: {
    height: 150,
    width: 150,
  },
  reTryBtn:{
      flex: 1,
      justifyContent: 'flex-start'
  },
  ScoretextResult:{
      textAlign: 'center',
      color: 'white',
      textDecorationLine: 'underline',
      textDecorationColor: 'red',
      textDecorationStyle: 'solid'
  },
  NextBtn:{
    color: 'black',
    backgroundColor: '#bbdefb',
    padding: 8,
    textAlign: 'center',
    fontSize: 20,
    borderRadius: 5,
  }
});
