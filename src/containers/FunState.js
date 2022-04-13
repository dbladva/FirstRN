import { View, Text ,Button} from 'react-native'
import React,{useState} from 'react'

export default function FunState() {

    const [id, setId] = useState(101);

    const onPressLearnMore = () => {
        setId(102);
    }
  return (
    <View>
      <Text>{id}</Text>
      <Button
            onPress={onPressLearnMore}
            title="Learn More"
            color="#841584"
            />
    </View>
  )
}