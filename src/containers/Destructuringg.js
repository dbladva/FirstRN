import { View, Text, ScrollView } from 'react-native'
import React from 'react'


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
    },
]



export default function Destructuringg() {
  return (
    <View style={{margin: 20, backgroundColor: 'rgba(245, 39, 145, 0.1)',flexDirection: 'column',borderRadius: 10,padding: 20,}}>

        <Text style={{fontSize: 25,textAlign: 'center',paddingBottom: 20,}}>Medicine Data</Text>

    
        {
            MediData.map((Data , index) => {
                const {id ,name} = Data;   
                console.log(id,name);

                return(
                    
                    <View style={{justifyContent: 'space-between' , flexDirection: 'row',width: '100%',}}>
                        <Text style={{color: "black",margin: 5,fontSize: 20,borderBottomWidth: 0.4,padding: 5,width: '20%'}}>{index}</Text>
                        <Text style={{color: "black",margin: 5,fontSize: 20,borderBottomWidth: 0.4,padding: 5,width: '20%'}}>{id}</Text>
                        <Text style={{color: "black",margin: 5,fontSize: 18,borderBottomWidth: 0.4,padding: 5, width: '50%'}}>{name}</Text>
                        </View>
                )
                
            })
        }
    </View>
  )
}