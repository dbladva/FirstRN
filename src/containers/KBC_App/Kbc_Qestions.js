import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Question_Data from './Data';

export default function Kbc_Qestions() {
  const Data = Question_Data;
  const [current_Index, setcurrent_Index] = useState(0);
  const [Score, setScore] = useState(0);
  const [seconds, setSeconds] = useState(30);
  const [NextBtn, setNextBtn] = useState('Next');
  const [disabled, setDisabled] = useState(false);
  const [Ans, setAns] = useState('');
  const [wrongAns, setWrongAns] = useState(false);
  const [screen, setScreen] = useState(0);
  const [userName, setUserName] = useState('Unknown');

  // Countdown Secound
  useEffect(() => {
    if (screen == 1) {
      let myInterval = setInterval(() => {
        if (seconds > 0) {
          setSeconds(seconds - 1);
        }
        if (seconds < 1) {
          if (current_Index < Data.length - 1) {
            setcurrent_Index(current_Index + 1);
            setSeconds(30);
            setWrongAns(false);
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
    }
  });

  // Question Handler
  const QuestionHandler = () => {
    return <Text>{Data[current_Index].question}</Text>;
  };

  // MCQ Handler
  const mcqHandler = () => {
    return Data[current_Index].options.map((o, i) => {
      return (
        <TouchableOpacity
          disabled={disabled}
          onPress={() => {
            CheckAnswer(o, i);
            //setTindex(i)
            setDisabled(true);
          }}>
          <View style={styles.mcqView}>
            <Text
              // style={[
              //   Data[current_Index].current_ans === o ? styles.GreenAns :  styles.mcqText
              // ]}
              style={[
                Ans === o && Ans === Data[current_Index].current_ans
                  ? styles.GreenAns
                  : Ans === o && Ans !== Data[current_Index].current_ans
                  ? styles.redText
                  : wrongAns === true && o === Data[current_Index].current_ans
                  ? styles.GreenAns
                  : styles.mcqText,
              ]}>
              {o}
            </Text>
          </View>
        </TouchableOpacity>
      );
    });
  };

  // Chack Answer For Count And Click Change Question
  const CheckAnswer = (SelectedOp, i) => {
    setAns(SelectedOp);
    if (SelectedOp === Data[current_Index].current_ans) {
      setScore(Score + 1);
      setWrongAns(false);
    } else {
      setWrongAns(true);
    }
  };

  const newxtQuestionHandler = () => {
    if (current_Index < Data.length - 1) {
      setcurrent_Index(current_Index + 1);
      setSeconds(30);
      setWrongAns(false);
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
          setWrongAns(false);
          if (NextBtn === 'Submit') {
            setScreen(2);
          }
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
    // -------------------------- KBC Home -----------------------------------------
    <View style={styles.container}>
      {screen === 0 && (
        <>
          <View style={{flex: 1, padding: 30}}>
            <View style={styles.LogoView}>
              <Text style={styles.TitleText}>Let's Play Quiz,</Text>
              <Text style={styles.SubTitleText}>
                Enter Your information below
              </Text>
            </View>
            <View style={styles.KbcContentView}>
              <TextInput
                onChangeText={a => {
                  setUserName(a);
                }}
                style={styles.InputName}
                placeholder="Enter Full Name"
              />
            </View>

            <View style={styles.StartView}>
              <TouchableOpacity
                onPress={() => {
                  setScreen(1);
                }}>
                <Text style={styles.BtnText}>Let's Start Quiz</Text>
              </TouchableOpacity>
            </View>
          </View>
        </>
      )}
      {/* -------------------- KBC Question ------------------- */}
      {screen === 1 && (
        <>
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
              <TouchableOpacity onPress={() => {setScreen(1)}}>
                <Text style={styles.skipBtn}>Skip</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.TimerView}>
            <Image
              style={styles.watchTimer}
              source={require('../../../assets/images/watch.png')}
            />
            <Text
              style={[
                seconds <= 10 ? styles.TimeColorWarning : styles.timeColor,
              ]}>
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
        </>
      )}

      {/* ---------------------- KBC Result ---------------------- */}

      {screen === 2 && (
        <>
          <View style={{flex: 1, alignItems: 'center'}}>
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
                  <Text style={styles.LeaderBoardText}>View LeaderBoard</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.reTryBtn}>
              <TouchableOpacity
                onPress={() => {
                  setScreen(0);
                  setScore(0);
                  setcurrent_Index(0);
                  setNextBtn('Next');
                }}>
                <Text style={styles.NextBtn2}>Retry</Text>
              </TouchableOpacity>
            </View>
          </View>
        </>
      )}
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

  // ------------------------- Kbc Home css-----------------------------------
  TitleText: {
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
    color: 'White',
    height: 50,
    backgroundColor: '#212121',
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

  // -------------------- Kbc Question Css ------------------------------

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
    color: 'black',
    // fontWeight: '500',
    fontSize: 20,
    textTransform: 'capitalize',
  },
  redText: {
    color: 'red',
    // fontWeight: '500',
    fontSize: 20,
    textTransform: 'capitalize',
  },
  NextBtn: {
    padding: 10,
    color: '#000000',
    backgroundColor: '#bbdefb',
    textAlign: 'center',
    fontSize: 20,
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

  //-------------------- Kbc Result --------------------------
  scoreText: {
    flex: 2,
    justifyContent: 'center',
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
    flex: 1,
    justifyContent: 'center',
  },
  ScoretextResult: {
    textAlign: 'center',
    color: 'black',
    fontSize: 30,
    fontWeight: 'bold',
    // backgroundColor: 'red'
    letterSpacing: 3,
  },
  NextBtn2: {
    color: 'black',
    backgroundColor: 'white',
    height: 40,
    textAlignVertical: 'center',
    width: 200,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    borderRadius: 50,
    textTransform: 'uppercase',
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
