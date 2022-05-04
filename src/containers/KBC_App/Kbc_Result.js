import {View, Text, StyleSheet, Image,TouchableOpacity} from 'react-native';
import React, {useState} from 'react';

export default function Kbc_Result({route,navigation}) {
  const [userName, setUserName] = useState('Unknown');

  const {Score,Screen} = route.params; 

  return (
    <View style={styles.container}>
      <View style={styles.winerLogo}>
              <Image
                style={styles.logoWinner}
                source={require('../../../assets/images/winner.png')}
              />
            </View>

            <View style={styles.scoreText}>
              <Text style={styles.congratulationText}>
                Congratulation, {userName}!
              </Text>
              {/* <Text style={styles.Scoretext}>Score</Text> */}
              <Text style={styles.ScoretextResult}>
                Your Score{' '}
                <Text style={{color: 'orange', fontWeight: 'bold'}}>
                  {Score}!!
                </Text>
              </Text>
              <View style={{alignItems: 'center', padding: 10}}>
                <TouchableOpacity style={styles.Leaderbtn}>
                  <Text style={styles.LeaderBoardText}>View Score Board</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={{flex: 1,justifyContent: 'center',}}>
              <TouchableOpacity
                // onPress={() => {
                //   setScreen(0);
                //   setScore(0);
                //   setcurrent_Index(0);
                //   setNextBtn('Next');
                // }}
                style={styles.reTryBtn}
                >
                <Text style={styles.NextBtn2}>Retry</Text>
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
    flex: 2,
    justifyContent: 'space-evenly',
    color: 'white',
    backgroundColor: 'white',
    borderRadius: 20,
    width: '80%',
    margin: 30,
  },
  Scoretext: {
    fontSize: 40,
    color: 'black',
    alignItems: 'center',
    textAlign: 'center',
  },
  winerLogo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoWinner: {
    width: 120,
    height: 120,
  },
  reTryBtn: {
    // flex: 1,
    
    alignContent: 'center',
    borderRadius: 20,
    backgroundColor: 'white',
  },
  ScoretextResult: {
    textAlign: 'center',
    color: 'black',
    fontSize: 30,
    fontWeight: 'bold',
    // backgroundColor: 'red',
    letterSpacing: 3,
  },
  NextBtn2: {
    color: 'black',
  
    justifyContent: 'center',
    width: 200,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    padding: 10,
  },
  congratulationText: {
    color: 'black',
    textAlign: 'center',
    fontWeight: '500',
    color: 'gray',
  },
  LeaderBoardText: {
    textAlign: 'center',
    color: 'black',
  },
  Leaderbtn: {
    backgroundColor: '#bbdefb',
    width: '80%',
    padding: 5,
    borderRadius: 50,
    fontWeight: 'bold',
  },
});
