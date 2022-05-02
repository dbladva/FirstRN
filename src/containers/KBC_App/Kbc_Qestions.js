import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import Question_Data from './Data';

export default function Kbc_Qestions() {
  const Data = Question_Data;

  const [current_Index, setcurrent_Index] = useState(0);
  const [Score, setScore] = useState(0);
  const [seconds, setSeconds] = useState(10);
  const [NextBtn, setNextBtn] = useState('Next');
  const [disabled, setDisabled] = useState(false);
  const [Ans, setAns] = useState(true);

  // Countdown Secound
  useEffect(() => {
    let myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds < 1) {
        if (current_Index < Data.length - 1) {
          setcurrent_Index(current_Index + 1);
          setSeconds(10);
          setDisabled(false);
          // Submit Btn
          if (current_Index === Data.length - 2) {
            setNextBtn('Submit');
          }
        } else {
          setcurrent_Index(current_Index);
        }
      }
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  });

  // Question Handler
  const QuestionHandler = () => {
    return <Text>{Data[current_Index].question}</Text>;
  };

  // MCQ Handler
  const mcqHandler = () => {
    return Data[current_Index].options.map(o => {
      return (
        <TouchableOpacity
          disabled={disabled}
          onPress={() => {
            CheckAnswer(o);
            setDisabled(true);
          }}>
          <View style={styles.mcqView}>
            <Text
              // style={styles.mcqText}
              style={[Ans === o ? styles.GreenAns : styles.mcqText,{
               }]}>
              {o}
            </Text>
          </View>
        </TouchableOpacity>
      );
    });
  };

  // Chack Answer For Count And Click Change Question
  const CheckAnswer = SelectedOp => {
    if (SelectedOp === Data[current_Index].current_ans) {
      setAns(SelectedOp);
      setScore(Score + 1);
    }
  };

  const newxtQuestionHandler = () => {
    if (current_Index < Data.length - 1) {
      setcurrent_Index(current_Index + 1);
      setSeconds(10);

      // Submit Btn
      if (current_Index === Data.length - 2) {
        setNextBtn('Submit');
      }
    } else {
      setcurrent_Index(current_Index);
    }
  };

  const renderNext = () => {
    return (
      <TouchableOpacity
        onPress={() => {
          newxtQuestionHandler();
          setDisabled(false);
          setAns(false);
        }}>
        <Text style={styles.NextBtn}>{NextBtn}</Text>
      </TouchableOpacity>
    );
  };

  // Question No Checker
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

      {/* Timer */}
      <View style={styles.TimerView}>
        <Image
          style={styles.watchTimer}
          source={require('../../../assets/images/watch.png')}
        />
        <Text
          style={[seconds <= 5 ? styles.TimeColorWarning : styles.timeColor]}>
          {seconds}
        </Text>
      </View>

      {QuestionCountHandler()}

      <View style={styles.MainQAView}>
        <View style={styles.questionView}>
          <Text style={styles.ques_Text}>{QuestionHandler()}</Text>
        </View>

        {mcqHandler()}

        {renderNext()}
      </View>

      <Text style={styles.scoreCss}>{Score}</Text>
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
    flex: 1,
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  MainQAView: {
    margin: 10,
    flex: 6,
    backgroundColor: '#bbdefb',
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
    height: 30,
    width: 30,
  },
  QueText: {
    paddingLeft: 15,
    fontSize: 25,
    // color: '#bbdefb',
    color: 'white',
    opacity: 0.8,
  },
  questionView: {},
  ques_Text: {
    color: 'black',
    margin: 20,
    textAlign: 'center',
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
    // color: 'red',
    // fontWeight: '500',
    fontSize: 20,
    textTransform: 'capitalize',
  },
  redText:{
color: 'red',
    // fontWeight: '500',
    fontSize: 20,
    textTransform: 'capitalize',
  },
  NextBtn: {
    color: '#000000',
    backgroundColor: '#bbdefb',
    padding: 10,
    textAlign: 'center',
    fontSize: 20,
    borderRadius: 10,
  },
  GreenAns: {
    color: 'green',
    fontWeight: '500',
    fontSize: 20,
    textTransform: 'capitalize',
  },
  TimeColorWarning: {
    color: 'red',
    fontSize: 25,
    fontWeight: 'bold',
    // textShadowColor: 'white',
    // textShadowRadius: 10,
    // textShadowOffset: {width: 6, height: 4},
  },
  WhiteTextmcq: {
    color: 'yellow',
    fontSize: 25,
    fontWeight: 'bold',
  },
  timeColor: {
    fontSize: 25,
    color: 'white',
    fontWeight: 'bold',
    textShadowColor: 'gray',
    textShadowRadius: 10,
    textShadowOffset: {height: 3, width: 3},
  },
  scoreCss: {
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    marginBottom: 30,
  },
});
