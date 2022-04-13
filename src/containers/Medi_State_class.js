import { Text, View ,Button} from 'react-native'
import React, { Component } from 'react'

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


export default class Medi_State_class extends Component {
    

    constructor(props) {
        super(props);
        
        this.state = {
            name: 'Medicine Name'
        }

    }
     onPress= () => {
        MediData.map((a) => {
            const {id , name} = a;
            
            this.setState({
                name : name,
            })
           
        })

    }
    

  render() {
    return (
      <View>
        <Text>Class Base State</Text>

        <Text>{this.state.name}</Text>

        <Button
                onPress={ () => this.onPress()}
                title="Change"
                color="rgba(187, 224, 41, 0.8)"
            />
            

      </View>
    )
  }
}