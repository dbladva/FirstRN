import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';

export default function Kbc_Qestions() {
  return (
    <View style={styles.container}>
      <View style={styles.NavigationView}>
        <View>
          <TouchableOpacity>
            <Image
              style={styles.BackArrow}
              source={require('../../../assets/images/left.png')}
            />
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity>
            <Text style={styles.skipBtn}>Skip</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.TimerView}>
        <Image
          style={styles.watchTimer}
          source={require('../../../assets/images/watch.png')}
        />
      </View>
      <View style={styles.QuetionCount}>
        <Text style={styles.QueText}>Question 1/10</Text>
      </View>
      <View style={styles.MainQAView}>
        <View style={styles.questionView}>
          <Text style={styles.ques_Text}>
            Flutter is an Open Source UI Software devlopment Kit create by
            ______
          </Text>
        </View>
            <TouchableOpacity>
        <View style={styles.mcqView}>
          <Text style={styles.mcqText}>1. Google</Text>
        </View>
            </TouchableOpacity>
            <TouchableOpacity>
        <View style={styles.mcqView}>
          <Text style={styles.mcqText}>2. Apple</Text>
        </View>
          </TouchableOpacity>
            <TouchableOpacity>
        <View style={styles.mcqView}>
          <Text style={styles.mcqText}>3. Microsoft</Text>
        </View>
          </TouchableOpacity>
            <TouchableOpacity>
        <View style={styles.mcqView}>
          <Text style={styles.mcqText}>4. Facebook</Text>
        </View>
          </TouchableOpacity>
        {/* <View style={{flex: 1}}>
          <Text>Helllooooo</Text>
        </View>
        <View style={{flex: 1, backgroundColor: 'black'}}>
          <Text>Helllooooo</Text>
        </View>
        <View style={{flex: 1, backgroundColor: 'blue'}}>
          <Text>Helllooooo</Text>
        </View>
        <View style={{flex: 1, backgroundColor: 'yellow'}}>
          <Text>Helllooooo</Text>
        </View> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    paddingLeft: 10,
    paddingRight: 10,
  },
  NavigationView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    // backgroundColor: 'green',
    alignItems: 'center',
  },
  TimerView: {
    flex: 0.8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  QuetionCount: {
    flex: 0.8,
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  MainQAView: {
    margin: 10,
    flex: 6,
    backgroundColor: 'white',
    borderRadius: 20,
    marginBottom: 20,
    marginTop: 20,
    padding: 20,
  },
  BackArrow: {
    height: 35,
    width: 35,
    tintColor: 'white',
  },
  skipBtn: {
    fontSize: 20,
    textAlign: 'right',
    marginRight: 5,
    fontWeight: 'bold',
  },
  watchTimer: {
    height: 40,
    width: 40,
  },
  QueText: {
    paddingLeft: 15,
    fontSize: 30,
    // color: '#bbdefb',
    color: 'white',
    opacity: 0.8,
  },
  questionView: {},
  ques_Text: {
    color: 'black',
    margin: 20,
    fontSize: 25,
    fontWeight: '500',
  },
  mcqView:{
      borderWidth: 1,
      marginTop: 10,
      marginBottom: 10,
      padding: 20,
      borderRadius: 10,
  },
  mcqText:{
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
    textTransform: 'capitalize',
  }
});
