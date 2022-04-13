import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'

export default function MedicineData() {

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

    // Map All Medicine Data

    MediData.map((d) => {

        console.log("ID  :" + d.id);
        console.log("Name  :" + d.name);
        console.log("Quantity :" + d.quantity);
        console.log("Prize :" + d.price);
        console.log("Expiry :" + d.expiry);
        console.log("\n");

        if (d == "content") {   
            content.map((a) => {
                log("Content :" + a);
            }) 
        }

    })

    // filter Medicine Data

    let medi_Filter = MediData.filter((a) => a.expiry > 2021 && a.price > 200);

    console.log("----------- Medicine Filter Data ---------------" + "\n");
    console.log(medi_Filter);

    // Reduce Data 

    let total_price = medi_Filter.reduce((acc, b, index) => acc + b.price, 0)
    console.log(total_price);

    return (
        <SafeAreaView>
            <View style={{alignSelf: 'center'}}>
                <Text>{total_price}</Text>
            </View>
        </SafeAreaView>
    )
}