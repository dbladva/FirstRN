import {View, Text} from 'react-native';
import React, {useState, useEffect} from 'react';



export default function Watch2() {
  const [time, setTime] = useState(new Date());


  const tick = () => {
    setTime(new Date());
  }

  useEffect(
    () => {

      setInterval(() => tick(), 1000)

  },[]);

  return (
    <View>
      <Text>{time.toLocaleTimeString()}</Text>
    </View>
  );
}
