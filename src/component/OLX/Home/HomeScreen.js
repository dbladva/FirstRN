import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

export default function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.locationAndSearch}>
        <TouchableOpacity>
          <View style={styles.locationView}>
            <Image
              style={styles.Locationlogo}
              source={require('../Home/images/location.png')}
            />
            <Text style={styles.locationText}>Varracha, surat</Text>
            <Image
              style={styles.downarrowlogo}
              source={require('../Home/images/downarrow.png')}
            />
          </View>
        </TouchableOpacity>

        <View style={styles.SearchNoti}>  
          <TextInput
            style={styles.Searchinput}
            placeholder="Find Car,Mobile Phones And More..."
            // onChangeText={onChangeText}
            // value={text}
            autoFocus={false}
            // inlineImageLeft="username"
            // selectTextOnFocus={false}
            // showSoftInputOnFocus={false}
            scrollEnabled={false}
            
          />
          <TouchableOpacity>
            <Image
              style={styles.notiIcon}
              source={require('../Home/images/noti.png')}
            />
          </TouchableOpacity>
        </View>
      </View>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 15,
    paddingRight: 15,
  },
  locationAndSearch: {
    paddingBottom: 10,
    // flex: 0.11,
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    
  },
  Locationlogo: {
    height: 20,
    width: 20,
  },
  locationText: {
    marginLeft: 5,
    color: 'black',
  },
  locationView: {
    // flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  downarrowlogo: {
    marginLeft: 10,
    height: 15,
    width: 15,
  },
  Searchinput: {
    marginTop: 10,
    paddingLeft: 10,
    backgroundColor: 'white',
    color: '#000000',
    width: '85%',
    height: 40,
    borderWidth: 1,
    borderColor: 'black',
    borderStyle: 'solid',
    borderRadius: 5,
  },
  notiIcon: {
    height: 20,
    width: 20,
  },
  SearchNoti: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
