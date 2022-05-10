import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


const Account = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <View style={styles.LoginAvtar}>
          <EvilIcons
            style={{opacity: 0.5}}
            size={130}
            color="black"
            name="user"
          />
          <View>
            <Text style={styles.Welcome}>Welcome to OLX!</Text>
            <TouchableOpacity onPress={() => {navigation.navigate('SignIn')}}>
              <Text style={styles.LoginText}>Log in to your account</Text>
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity>
          <View style={styles.AccountManu}>
            <View style={{width: '12%'}}>
              <Image
                style={styles.olxlogo}
                source={require('../Account/images/olxlogo.png')}
              />
            </View>
            <View style={{ width: '80%'}}>
               <Text style={styles.HelpSupport}>Help & Support</Text>
               <Text style={styles.subtitleHelp}>
                 Help Center and legal terms
               </Text>
             </View>
             <View style={{width: '10%'}}>
             <SimpleLineIcons
              style={styles.rightarrow}
              size={20}
              color="black"
              name="arrow-right"
            />
            </View>
            
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.AccountManu}>
            <View style={{width: '12%',}}>
            <MaterialIcons
              style={styles.langLogo}
              size={25}
              color="black"
              name="language"
            />
            </View>
            <View style={{ width: '80%'}}>
               <Text style={styles.HelpSupport}>Select Language / भाषा चुनें</Text>
               <Text style={styles.subtitleHelp}>
               English
               </Text>
             </View>
             <View style={{width: '10%'}}>
             <SimpleLineIcons
              style={styles.rightarrow}
              size={20}
              color="black"
              name="arrow-right"
            />
            </View>
            
          </View>
        </TouchableOpacity>

<View style={{alignItems: 'center',marginTop: 20,}}>
<TouchableOpacity onPress={() => {navigation.navigate('SignIn')}} style={styles.RegiBtn}>
<Text style={styles.loginbtn}>Login Or Register</Text>
</TouchableOpacity>
</View>

      </View>
    </SafeAreaView>
  );
};

export default Account;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    // paddingTop: 20,
    // paddingBottom: 20,
    // paddingLeft: 10,
    // paddingRight: 10,
  },
  LoginAvtar: {
    flex: 0.3,
    flexDirection: 'row',
    alignItems: 'center',
  },
  Welcome: {
    color: 'black',
    fontWeight: '500',
    fontSize: 18,
  },
  LoginText: {
    textDecorationLine: 'underline',
    textDecorationStyle: 'solid',
    textDecorationColor: 'black',
    fontWeight: 'bold',
    color: 'black',
  },
  AccountManu: {
    alignItems: 'center',
    margin: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    paddingBottom: 5,
    width: '95%',
    flexDirection: 'row'
  },
  olxlogo: {
    margin: 10,
    height: 10,
    width: 20,
  },
  langLogo: {
    textAlign: 'center',
    alignItems: 'center',
    // margin: 10,
    // height: 20,
    // width: 20,
  },
  HelpSupport: {
    color: 'black',
    fontWeight: '500',
    fontSize: 14,
  },
  subtitleHelp: {
    fontSize: 12,
    color: 'black'
  },
  rightarrow: {},
  RegiBtn:{
    alignItems: 'center',
    justifyContent: 'center',
backgroundColor: 'black',
width: '90%',
padding: 10,
borderRadius: 10,
  },
  loginbtn:{
    color: 'white',
    textAlign: 'center',
  }
});
