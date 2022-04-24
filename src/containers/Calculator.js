import React, {useState} from 'react';
import {StyleSheet, Text, View, Pressable} from 'react-native';

const Calculator = () => {
  const arr = [
    'C',
    'DEL',
    '%',
    '/',
    '7',
    '8',
    '9',
    '*',
    '4',
    '5',
    '6',
    '-',
    '1',
    '2',
    '3',
    '+',
    '+/-',
    '0',
    '.',
    '=',
  ];

  const [equation, setEquation] = useState('');

  const handelEuation = k => {
    setEquation(equation + k);
  };

  const handelClear = () => {
    setEquation(' ');
  };

  const handelDelet = () => {
    setEquation(equation.substring(0, equation.length - 1));
  };
  const handelEqual = () => {
    if (equation !== '') {
      let result = eval(equation);
      setEquation(result);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.OutputView}>
        <Text style={styles.resultText}>{equation}</Text>
      </View>

      <View style={styles.InputView}>
        {arr.map((key, index) => {
          return key === '+' ||
            key === '-' ||
            key === '*' ||
            key === '/' ||
            key === '%' ? (
            <View style={styles.returnView}>
              <View style={styles.underView}>
                <Pressable onPress={() => handelEuation(key)}>
                  <Text
                    style={[
                      styles.DataText,
                      index == 0 ||
                      index == 1 ||
                      index == 2 ||
                      index == 3 ||
                      index == 7 ||
                      index == 11 ||
                      index == 15 ||
                      index == 19
                        ? styles.red
                        : styles.white,
                    ]}>
                    {key}
                  </Text>
                </Pressable>
              </View>
            </View>
          ) : key === 'C' ? (
            <View style={styles.returnView}>
              <View style={styles.underView}>
                <Pressable onPress={() => handelClear()}>
                  <Text
                    style={[
                      styles.DataText,
                      index == 0 ||
                      index == 1 ||
                      index == 2 ||
                      index == 3 ||
                      index == 7 ||
                      index == 11 ||
                      index == 15 ||
                      index == 19
                        ? styles.red
                        : styles.white,
                    ]}>
                    {key}
                  </Text>
                </Pressable>
              </View>
            </View>
          ) : key === 'DEL' ? (
            <View style={styles.returnView}>
              <View style={styles.underView}>
                <Pressable onPress={() => handelClear()}>
                  <Text
                    style={[
                      styles.DataText,
                      index == 0 ||
                      index == 1 ||
                      index == 2 ||
                      index == 3 ||
                      index == 7 ||
                      index == 11 ||
                      index == 15 ||
                      index == 19
                        ? styles.red
                        : styles.white,
                    ]}>
                    {key}
                  </Text>
                </Pressable>
              </View>
            </View>
          ) : key === '=' ? (
            <View style={styles.returnView}>
              <View style={styles.underView}>
                <Pressable onPress={() => handelDelet()}>
                  <Text
                    style={[
                      styles.DataText,
                      index == 0 ||
                      index == 1 ||
                      index == 2 ||
                      index == 3 ||
                      index == 7 ||
                      index == 11 ||
                      index == 15 ||
                      index == 19
                        ? styles.red
                        : styles.white,
                    ]}>
                    {key}
                  </Text>
                </Pressable>
              </View>
            </View>
          ) : (
            <View style={styles.returnView}>
              <View style={styles.underView}>
                <Pressable onPress={() => handelEqual(key)}>
                  <Text
                    style={[
                      styles.DataText,
                      index == 0 ||
                      index == 1 ||
                      index == 2 ||
                      index == 3 ||
                      index == 7 ||
                      index == 11 ||
                      index == 15 ||
                      index == 19
                        ? styles.red
                        : styles.white,
                    ]}>
                    {key}
                  </Text>
                </Pressable>
              </View>
            </View>
          );
        })}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  OutputView: {
    flex: 1,
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  InputView: {
    flex: 1.2,
    flexWrap: 'wrap',
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'center',
  },
  returnView: {
    width: '24%',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: '20%',
    borderRadius: 100,
    margin: 1,
  },
  DataText: {
    fontSize: 30,
    color: 'white',
  },
  underView: {
    height: 65,
    width: 65,
    backgroundColor: 'rgba(31,31,31,255)',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
  },
  red: {
    color: 'green',
  },
  white: {
    color: 'white',
  },
  resultText: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    color: 'white',
    fontSize: 30,
  },
});

export default Calculator;
