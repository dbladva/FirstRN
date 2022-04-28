import { View, Text ,Image,StyleSheet} from 'react-native'
import React from 'react'
import { Button } from '@rneui/themed';

export default function KbcHome() {
  return (
    <View style={styles.container}>
        <View style={styles.LogoView}>
            {/* <Text>Hello</Text> */}
            <Image style={styles.KbcLogo} source={require('../../../assets/images/kbc.png')}/>
        </View>
        <View style={styles.KbcContentView}>
        <Text>Hello</Text>
        </View>


        <View style={styles.StartView}>
        <Button title="Start" type="dark"  />
        </View>
      
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        
    },
    TitleText:{
        
    },
    LogoView:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    KbcContentView:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    StartView:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    KbcLogo:{
        height: 200,
        width: 200,
    }
})