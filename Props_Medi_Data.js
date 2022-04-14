import { View, Text } from 'react-native'
import React from 'react'

export default function Props_Medi_Data(props) {
  return (
    <View>
      <Text>{props.a}</Text>
      <Text>{props.id}</Text>
      <Text>{props.expiry}</Text>
    </View>
  )
}