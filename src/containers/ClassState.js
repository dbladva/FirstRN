import { Text, View ,Button} from 'react-native'
import React, { Component } from 'react'

export default class ClassState extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            id : 101,
            name : 'Raj',
        }
    }

    onPressLearnMore = () => {
        this.setState({
            name: 'Amit'
        })
    }

  render() {
    return (
      <View>
        <Text>{this.state.name}</Text>

        <Button
            onPress={() => this.onPressLearnMore()}
            title="Learn More"
            color="#841584"
            />
      </View>
    )
  }
}