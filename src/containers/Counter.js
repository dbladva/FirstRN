import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Component } from 'react/cjs/react.production.min';

export default class Counter extends Component {
  state = { count: 0 };

  setCount = () => this.setState(
    prevState => ({ ...prevState, count: this.state.count + 1 })
    );   
  setCountMines = () => this.setState(
      prevState => ({...prevState, count: this.state.count - 1})
  )

  render() {
    const { count } = this.state;
    return (
      <View style={[styles.bg]}>
        <View style={{ height: 100 }}>
          <Text style={count < 5 ? styles.less : styles.greater}>You Clicked {count} Times</Text>
        </View>
        <View style={{ height: 100, flexDirection: 'row' }}>
          <TouchableOpacity style={styles.buttonP} onPress={this.setCount}>
            <Text style={styles.buttonText}>Plus</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={this.setCountMines}>
            <Text style={styles.buttonText}>Mines</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    bg: { 
      flex:1, 
      alignItems: 'center',
  },
    less: { 
      fontSize: 25, 
      color: '#4d3398', 
      fontWeight: 'bold' 
      },
    greater: { 
      fontSize: 25,
      color: 'red', 
      fontWeight: 'bold' 
      },
    button: {
      width: 150,
      height: 50,
      alignItems: 'center',
      paddingTop: 10,
      borderRadius: 10,
      backgroundColor: 'green',
      flex: 1,
      marginHorizontal: 5
    },
    buttonP: {
      width: 150,
      height: 50,
      alignItems: 'center',
      paddingTop: 10,
      borderRadius: 10,
      backgroundColor: 'black',
      flex: 1,
      marginHorizontal: 5
    },
    buttonText: {
      fontSize: 25,
      color: '#fff',
      fontWeight: '600'
    }
  });