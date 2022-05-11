import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Modal,
  TouchableOpacity,
  Button,
  Image,
  ScrollView
} from 'react-native';
import React, {useState} from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Data from '../Data/Data';

const Sell = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const CateData = Data;

  const categoryModelHandler = () => {
    return CateData.map(d => {
      return (
        // <View style={styles.cateItem}>
        <TouchableOpacity style={styles.cateItem}>
          <View style={styles.CateImage}>
            <Image style={{height: 40, width: 40}} source={d.image} />
          <Text style={styles.cateText}>{d.title}</Text>
          </View>
          <SimpleLineIcons
            style={styles.rightarrow}
            size={20}
            color="black"
            name="arrow-right"
          />
        </TouchableOpacity>
        // </View>
      );
    });
  };
  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.container}>
       <ScrollView>
        <SafeAreaView style={styles.modelContainer}>
        <View>
          <Text style={{marginLeft: 20 ,marginTop: 20,fontWeight: '500',fontSize: 22,}}>What are you offering ?</Text>
        </View>
          <View style={styles.modelContainer}>
            {/* <TouchableOpacity onPress={() => navigation.GoBack('Home')}>
              <MaterialIcons
                style={styles.rightarrow}
                size={25}
                color="black"
                name="arrow-back-ios"
              />
            </TouchableOpacity> */}
            <View style={styles.ModelView}>{categoryModelHandler()}</View>
          </View>
        </SafeAreaView>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Sell;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  modelContainer: {
    flex: 1,
  },
  modelContainer: {
    // height: '65%',
    flex: 1,
    backgroundColor: '#bbdefb',
 
  },
  ModelView: {
    margin: 10,
  },
  cateItem: {
    margin: 5,
    backgroundColor: 'white',
    padding: 5,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rightarrow: {
    margin: 8,
  },
  cateText: {
    textTransform: 'capitalize',
    fontWeight: '400',
    fontSize: 18,
    alignSelf: 'center',
    color: 'black',
    marginLeft: 10,
  },
  CateImage: {
    flexDirection: 'row',
  },
});
