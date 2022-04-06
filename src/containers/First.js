import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';

export default function First() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.title}>First App</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  title: {
    color: 'red',
    fontSize: 30,
    fontWeight: 'bold',
    textTransform: 'capitalize',
    textDecorationLine: 'underline',
    textDecorationColor: 'blue',
  },
});
