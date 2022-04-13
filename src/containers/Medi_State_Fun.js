import { View, Text, Button } from 'react-native'
import React, { useState } from 'react'

export default function Medi_State_Fun() {

    const MediData = [
        {
            id: 101,
            name: 'Abacavir',
            quantity: 25,
            price: 150,
            expiry: 2022,
            content: [
                "x", "y", "z"
            ]
        },
        {
            id: 102,
            name: 'Eltrombopag',
            quantity: 90,
            price: 550,
            expiry: 2021,
            content: [
                "a", "b", "c"
            ]
        },
        {
            id: 103,
            name: 'Meloxicam',
            quantity: 85,
            price: 450,
            expiry: 2025,
            content: [
                "m", "n", "p"
            ]
        },
        {
            id: 104,
            name: 'Allopurinol',
            quantity: 50,
            price: 600,
            expiry: 2023,
            content: [
                "a", "s", "d"
            ]
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


    const [id, setId] = useState("MediCine Name");

   const onPressLearnMore = () => {
        MediData.map((a) => {
            const {id,name} = a;
            console.log(name);
            setId(name);
        })
    }

    return (

        <View>
           
            <Text style={{textAlign: 'center', fontSize: 20}}>{id}</Text>
            
            <Button
                onPress={onPressLearnMore}
                title="Learn More"
                color="rgba(187, 224, 41, 0.8)"
            />
        </View>
    )
}