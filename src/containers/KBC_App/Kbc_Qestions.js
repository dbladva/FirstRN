import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import Question_Data from './Data';

export default function Kbc_Qestions() {
  const Data = Question_Data;
  
  // let length = Data.length()

  // console.log(Data.length);
  const [Timer,setTimer] = useState(30)
  const [current_Index, setcurrent_Index] = useState(0);
  const [Score, setScore] = useState(0)


  // Timer
  const TimerHandler = () => {
    console.log('Call');
    setTimer(Timer - 1)
  }


  useEffect(
    () => {
     setInterval(() => TimerHandler(), 1000);
  }, [])

    
 



  const QuestionHandler = () => {
    return <Text>{Data[current_Index].question}</Text>;
  };

  const mcqHandler = () => {
    return Data[current_Index].options.map(o => {
      return (
        <TouchableOpacity onPress={() => CheckAnswer(o)}>
          <View style={styles.mcqView}>
            <Text style={styles.mcqText}>{o}</Text>
          </View>
        </TouchableOpacity>
      );
    });
  };

  const CheckAnswer = (SelectedOp) => {
      if(SelectedOp === Data[current_Index].current_ans){
        setScore(Score+1)
      }
  }

  const newxtQuestionHandler = () => {
    setcurrent_Index(current_Index + 1);
  };

  const renderNext = () => {
    return (
      <TouchableOpacity onPress={() => newxtQuestionHandler()}>
        <Text style={styles.NextBtn}>Next</Text>
      </TouchableOpacity>
    );
  };

  const QuestionCountHandler = () => {
    let count = current_Index + 1;
    let length = Data.length;
    return (
      <View style={styles.QuetionCount}>
        <Text style={styles.QueText}>
          Question : {count}/{length}
        </Text>
      </View>
    );
  };

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

        <Text>{Timer}</Text>
      </View>

      {QuestionCountHandler()}

      <View style={styles.MainQAView}>
        <View style={styles.questionView}>
          <Text style={styles.ques_Text}>{QuestionHandler()}</Text>
        </View>

        {mcqHandler()}

        {renderNext()}
      </View>
      <Text style={{textAlign: 'center',alignItems: 'center',justifyContent: 'center',}}>{Score}</Text>
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
    justifyContent: 'space-around',
    marginTop: 20,
    padding: 20,
  },
  BackArrow: {
    height: 35,
    width: 35,
    tintColor: 'white',
  },
  skipBtn: {
    color: 'white',
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
    fontSize: 20,
    fontWeight: '500',
  },
  mcqView: {
    borderWidth: 1,
    marginTop: 10,
    marginBottom: 10,
    padding: 10,
    borderRadius: 10,
  },
  mcqText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
    textTransform: 'capitalize',
  },
  NextBtn: {
    color: 'black',
    backgroundColor: '#bbdefb',
    padding: 10,
    textAlign: 'center',
    fontSize: 20,
    borderRadius: 10,
  },
});
