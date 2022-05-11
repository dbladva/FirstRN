import {
  View,
  Text,
  Button,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

export default function SettingScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <View style={styles.TitleView}>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <SimpleLineIcons
              style={styles.rightarrow}
              size={20}
              color="black"
              name="arrow-left"
            />
          </TouchableOpacity>
          <Text style={styles.TitleText}>Settings</Text>
        </View>


        <TouchableOpacity>
          <View style={styles.AccountManu}>
            {/* <View style={{width: '12%',}}>
            <MaterialIcons
              style={styles.langLogo}
              size={25}
              color="black"
              name="language"
            />
            </View> */}
            <View style={{ width: '90%',marginLeft: 10}}>
               <Text style={styles.HelpSupport}>Privacy</Text>
               <Text style={styles.subtitleHelp}>
               Change Password
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
            {/* <View style={{width: '12%',}}>
            <MaterialIcons
              style={styles.langLogo}
              size={25}
              color="black"
              name="language"
            />
            </View> */}
            <View style={{ width: '90%',marginLeft: 10}}>
               <Text style={styles.HelpSupport}>Notifications</Text>
               <Text style={styles.subtitleHelp}>
               Recommanded & Special Communications
               </Text>
             </View>
             {/* <View style={{width: '10%'}}>
             <SimpleLineIcons
              style={styles.rightarrow}
              size={20}
              color="black"
              name="arrow-right"
            /> */}
            {/* </View> */}
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.AccountManu}>
            {/* <View style={{width: '12%',}}>
            <MaterialIcons
              style={styles.langLogo}
              size={25}
              color="black"
              name="language"
            />
            </View> */}
            <View style={{ width: '90%',marginLeft: 10}}>
               <Text style={styles.HelpSupport}>Logout</Text>
               {/* <Text style={styles.subtitleHelp}>
               English
               </Text> */}
             </View>
             {/* <View style={{width: '10%'}}>
             <SimpleLineIcons
              style={styles.rightarrow}
              size={20}
              color="black"
              name="arrow-right"
            />
            </View> */}
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.AccountManu}>
            {/* <View style={{width: '12%',}}>
            <MaterialIcons
              style={styles.langLogo}
              size={25}
              color="black"
              name="language"
            />
            </View> */}
            <View style={{ width: '90%',marginLeft: 10}}>
               <Text style={styles.HelpSupport}>Logout from All Devices</Text>
               {/* <Text style={styles.subtitleHelp}>
               English
               </Text> */}
             </View>
             {/* <View style={{width: '10%'}}>
             <SimpleLineIcons
              style={styles.rightarrow}
              size={20}
              color="black"
              name="arrow-right"
            />
            </View> */}
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.AccountManu}>
            {/* <View style={{width: '12%',}}>
            <MaterialIcons
              style={styles.langLogo}
              size={25}
              color="black"
              name="language"
            />
            </View> */}
            <View style={{ width: '90%',marginLeft: 10}}>
               <Text style={styles.HelpSupport}>Delet Account</Text>
               {/* <Text style={styles.subtitleHelp}>
               English
               </Text> */}
             </View>
             {/* <View style={{width: '10%'}}>
             <SimpleLineIcons
              style={styles.rightarrow}
              size={20}
              color="black"
              name="arrow-right"
            />
            </View> */}
          </View>
        </TouchableOpacity>
     
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'white',
  },
  TitleView: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    height: 50,
  },
  TitleText: {
    marginLeft: 20,
    fontSize: 20,
    fontWeight: 'bold',
  },
  AccountManu: {
    alignItems: 'center',
    margin: 5,
    borderBottomWidth: 1,
    borderBottomColor: 'rgb(192,192,192)',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    paddingBottom: 5,
    width: '95%',
    flexDirection: 'row',
    height: 50,
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
    color: 'black',
  },
  rightarrow: {},
  RegiBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
    width: '90%',
    padding: 10,
    borderRadius: 10,
  },
  loginbtn: {
    color: 'white',
    textAlign: 'center',
  },
});
