import {
    View,
    Text,
    ImageBackground,
    Image,
    StyleSheet,
    TouchableOpacity,
  } from 'react-native';
  import React from 'react';
  
  export default function KBC() {
    return (
      <View style={styles.container}>
        <View style={{flex: 1, alignItems: 'center'}}>
          <View style={styles.MainTitle}>
            <Text style={styles.TitleText}>Kaun Banega Crorepati</Text>
          </View>
          <View></View>
        </View>
  
        <View style={styles.kbcTitle}>
          <View>
            <Image
              style={styles.kbcLogo}
              source={require('../../assets/images/kbc.png')}
            />
          </View>
  
          <View style={styles.toolView}>
            <View>
              <TouchableOpacity>
                <Image
                  style={styles.soundLogo}
                  source={require('../../assets/images/sound.png')}
                />
              </TouchableOpacity>
            </View>
  
            <View>
              <TouchableOpacity>
                <Image
                  style={styles.soundLogo}
                  source={require('../../assets/images/star.png')}
                />
              </TouchableOpacity>
            </View>
  
            <View>
              <TouchableOpacity>
                <Image
                  style={styles.soundLogo}
                  source={require('../../assets/images/share.png')}
                />
              </TouchableOpacity>
            </View>
  
            <View>
              <TouchableOpacity>
                <Image
                  style={styles.soundLogo}
                  source={require('../../assets/images/more.png')}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
  
        <View style={styles.startView}>
          <TouchableOpacity>
            <Image
              style={styles.PlayLogo}
              source={require('../../assets/images/2.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      marginTop: 50,
      padding: 20,
      flex: 1,
      justifyContent: 'center',
    },
    MainTitle: {
      backgroundColor: 'red',
      width: '80%',
      padding: 5,
      borderRadius: 10,
      alignItems: 'center',
    },
    TitleText: {
      color: 'white',
      fontSize: 25,
      fontWeight: '500',
    },
  
    kbcTitle: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    kbcTitleText: {
      fontSize: 40,
      color: 'white',
      textShadowOffset: {width: 5, height: 5},
      textShadowRadius: 8,
      textShadowColor: 'blue',
    },
    PlayLogo: {
      height: 50,
      width: 200,
    },
    kbcLogo: {
      top: 0,
      left: 0,
      height: 200,
      width: 200,
    },
    startView: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'space-evenly',
    },
    toolView: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    soundLogo: {
      margin: 15,
      height: 30,
      width: 30,
    },
  });
  