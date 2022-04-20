import { View, Text, Button } from 'react-native';
import React, { useState } from 'react';

export default function Medi_State_Fun() {
    const MedicineData = [
        {
            id: 101,
            name: 'Abacavir',
            quantity: 25,
            price: 150,
            expiry: 2022,
            content: ['x', 'y', 'z'],
        },
        {
            id: 102,
            name: 'Eltrombopag',
            quantity: 90,
            price: 550,
            expiry: 2021,
            content: ['a', 'b', 'c'],
        },
        {
            id: 103,
            name: 'Meloxicam',
            quantity: 85,
            price: 450,
            expiry: 2025,
            content: ['m', 'n', 'p'],
        },
        {
            id: 104,
            name: 'Allopurinol',
            quantity: 50,
            price: 600,
            expiry: 2023,
            content: ['a', 's', 'd'],
        },
        {
            id: 105,
            name: 'Phenytoin',
            quantity: 63,
            price: 250,
            expiry: 2021,
            content: [
                "e", "r", "t"
            ]
        }
    ]

    const [sname, setsName] = useState(MediData);

    const newData = () => {
        setsName('Hello')
    }


    return (
        <View
            style={{
                backgroundColor: 'rgba(232, 38, 138, 0.27)',
                margin: 20,
                borderRadius: 10,
            }}>

        <View>
            {
                MediData.map((Data, index) => {
                    const {id, name} = Data;
                    
                    return (
                        <View>
                            <Text>{id} {name}</Text>
                            <Button
                                onPress={newData}
                                title="Click Me"
                                color="#841584"
                            />
                        </View>
                    )
                })
            }
</View>
        </View>
    )
}
