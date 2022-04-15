import { View, Text } from 'react-native'
import React from 'react'

export default function MedicineProps(props) {
  return (
    <View>
        <Text>Data</Text>
      <Text>{props.id}</Text>
    </View>
  )
}