import { View, Text } from 'react-native'
import React from 'react'
import MedicineProps from './MedicineProps'

export default function MediineData(props) {

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

    MediData.map((Data,index) => {
        let Darr = [];
        Darr = Data.name;
    })
    id="101"

  return (
    <View>  
      <MedicineProps />
    </View>
  )
}