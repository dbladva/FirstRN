import {View, Text, Button} from 'react-native';
import React, {useState} from 'react';
import Props_Medi_Data from './Props_Medi_Data';

export default function Props_Medi_Demo(props) {
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
      content: ['e', 'r', 't'],
    },
  ];

  return (
    <View>
      {MedicineData.map(a => {
        const {id, name} = a;
        const [fname, setName] = useState(name);

        const learn = () => {
          if (fname === name) {
            const {price, expiry, quantity} = a
            console.log(name);
            console.log('price :' + price);
            console.log('Expiry :' + expiry);
            console.log('Quantity :' + quantity);
            setName(id);  
            return(
              <Props_Medi_Data id="100" a = {price} price={price} expiry={expiry} Quantity={quantity}/>
            )
          }
        };

      
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
              {fname}
            </Text>
            <Button
              style={{width: '50%', borderRadius: 10}}
              onPress={learn}
              title="Click😃"
              color="rgba(2, 255, 200, 0.61)"
            />
          </View>
        );
      })}
      {/* <Props_Medi_Data id="100" /> */}
      <Props_Medi_Data/>
    </View>
  );
}
