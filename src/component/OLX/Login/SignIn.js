import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
} from 'react-native';
import React,{useEffect} from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';


const SignIn = ({navigation}) => {

  useEffect(() => {
      GoogleSignin.configure({
        webClientId:'731374113487-ekhk65kl458ue4tf5gnjjp035vmr6egh.apps.googleusercontent.com',
      });
    }, []);
  
    GoogleHandler = async () => {
      const { idToken } = await GoogleSignin.signIn();
console.log(idToken);
      // const googleCredential = auth.GoogleAuthProvider.credential(idToken);
  
      // return auth().signInWithCredential(googleCredential);
    };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Account')}
          style={{marginLeft: 20, marginTop: 10}}>
          <MaterialIcons
            style={styles.rightarrow}
            size={30}
            color="black"
            name="arrow-back"
          />
        </TouchableOpacity>
        <View style={[{margin: 20}, styles.container]}>
          <View style={styles.SignInScreen}>
            <TouchableOpacity>
              <Text style={styles.SignInText}>Sign In</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
              <Text style={{margin: 10, fontWeight: 'bold'}}>Sign Up</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.WelcomeTExt}>
            <Text style={styles.Welcome}>Welcome</Text>
            <Text style={styles.Welcome}>Back</Text>
          </View>

          <View style={styles.SignInTextinput}>
            <TextInput style={styles.Searchinput} placeholder="Email" />
            <TextInput style={styles.Searchinput} placeholder="Password" />
            <View style={styles.Arrow}>
              <Text style={styles.Singin}>Sign In</Text>
              <TouchableOpacity>
                <View style={styles.signinArrow}>
                  <MaterialIcons
                    style={styles.rightarrow}
                    size={25}
                    color="white"
                    name="arrow-forward"
                  />
                </View>
              </TouchableOpacity>
            </View>
            <TouchableOpacity>
              <Text style={styles.forgotPass}>Forgot Password?</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={GoogleHandler}>
              <Text style={styles.forgotPass}>Sign in with Google</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  SignInScreen: {
    flex: 0.1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  SignInText: {
    margin: 10,
    fontWeight: 'bold',
    borderBottomWidth: 3,
  },
  WelcomeTExt: {
    marginLeft: 20,
    flex: 0.4,
    justifyContent: 'center',
  },
  Welcome: {
    fontSize: 35,
    color: 'black',
    fontWeight: '700',
    lineHeight: 40,
  },
  Searchinput: {
    marginTop: 10,
    paddingLeft: 10,
    paddingBottom: 15,
    // backgroundColor: 'white',
    color: 'black',
    width: '100%',
    height: 40,
    borderBottomWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
  },
  SignInTextinput: {
    flex: 0.8,
    justifyContent: 'space-evenly',
  },
  Singin: {
    color: '#FFC0CB',
    fontSize: 30,
    fontWeight: 'bold',
  },
  signinArrow: {
    height: 80,
    width: 80,
    backgroundColor: 'pink',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Arrow: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  forgotPass: {
    color: 'gray',
    fontWeight: '500',
  },
});
