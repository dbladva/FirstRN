import React from 'react'
import { useState, useEffect } from 'react';
import { View, Text } from 'react-native';

const Timer = () => {
    const [seconds, setSeconds] = useState(30);
    useEffect(() => {
        let myInterval = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            }
        }, 1000)
        return () => {
            clearInterval(myInterval);
        };
    });

    return (
        <View style={{ marginTop: 45 }}>
            <Text style={{ color: 'red' }}>{seconds}</Text>
        </View>
    )
}

export default Timer;