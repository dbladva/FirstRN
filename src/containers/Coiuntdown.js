import React from 'react'
import { useState, useEffect } from 'react';
import { View, Text } from 'react-native';

const Timer = () => {


    return (
        <View style={{ marginTop: 45 }}>
            <Text style={{ color: 'red' }}>{seconds}</Text>
        </View>
    )
}

export default Timer;