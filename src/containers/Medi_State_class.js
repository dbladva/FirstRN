import { Text, View ,Button } from 'react-native'
import React, { Component } from 'react'

export default class Medi_State_class extends Component {

        constructor(props) {
            super(props);
            
            
            this.state = {
                MedicineData : [
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
                        content: ['e', 'r', 't'],
                    },
                ]
            }
        }
        
       


  render() {
    return (
      <View>
          {this.state.MedicineData.map(a => {
                const {id, name } = a;
                
                this.state={
                    fname: name,
                }
                learn = () => {
                    this.setState({fname: id})
                }

                return (
                    <View
                        style={{
                            alignItems: 'center',
                            flexDirection: 'row',
                            width: '100%',
                            margin: 10,
                            justifyContent: 'space-evenly',
                        }}>
                        <Text
                            style={{
                                fontSize: 25,
                                textAlign: 'left',
                                width: '50%',
                                borderBottomWidth: 1,
                            }}>
                            {this.state.fname}
                        </Text>
                        <Button
                            style={{ width: '50%', borderRadius: 10 }}
                            onPress={() => this.learn()}
                            title="Click"
                            color="rgba(2, 255, 200, 0.61)"
                        />
                    </View>
                );
            })}
      </View>
    )
  }
}