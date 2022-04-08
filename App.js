import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import First from './src/containers/First'

export default function App() {
  return (
    <View style={styles.Container}>
      <First />
    </View>
  )
}

const styles = StyleSheet.create ({
  Container:{
    flex: 1,
    justifyContent: 'center',
  }
})