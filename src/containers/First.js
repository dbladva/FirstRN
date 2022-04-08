import {View, Text, SafeAreaView, StyleSheet,ActivityIndicator} from 'react-native';
import React from 'react';

export default function First() {
  return (
    <SafeAreaView>
       <View style={[styles.container, styles.horizontal]}>
    <ActivityIndicator  size= "large" color="#00ff00" animating={true} />
  </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10
  }
});
