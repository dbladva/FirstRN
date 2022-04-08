import { View, Text ,StyleSheet} from 'react-native' 
import React from 'react'
 
export default function First() {
  return (
    
    <View style={styles.container}>
      <Text style={styles.title}>First App</Text>
      
    </View>
  )
}

const styles = StyleSheet.create ({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title:{
    marginTop: 50,
    color: 'red'
  },
})