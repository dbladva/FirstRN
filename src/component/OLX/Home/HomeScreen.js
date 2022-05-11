import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  Button,
  ScrollView,
  SafeAreaView,
  FlatList,
  Modal,
} from 'react-native';
import React, {useState} from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import ItemData from '../Data/ItemData';
import Data from '../Data/Data';

// Category Data
const CateData = Data;

// Item Data
const itemData = ItemData;
export default function HomeScreen({navigation}) {
  const [Heart, setHeart] = useState('heart-outlined');
  const [modalVisible, setModalVisible] = useState(false);

  // CategoryHandler
  const CategoryHandler = () => {
    return CateData.map((i, index) => {
      return (
        <View style={styles.olxAutos}>
          <TouchableOpacity>
            <Image style={styles.carsLogo} source={i.image} />
            <Text style={styles.CategoryTitle}>{i.title}</Text>
          </TouchableOpacity>
        </View>
      );
    });
  };

  // ItemHandler
  const renderItem = ({item}) => {
    return (
      <View style={styles.ItemCard}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Detail');
          }}>
          <Image style={styles.ItemImage} source={item.Itemimage} />
          <Text style={styles.priceText}>₹{item.ItemPrice}</Text>

          <Text style={styles.DetailText}>{item.ItemName}</Text>
          <View style={styles.locationView}>
            <MaterialIcons size={16} color="black" name="location-on" />
            <Text style={styles.locationText}>Varracha, surat</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={item => {
            // if(item.id === item){
            if (Heart === 'heart') {
              setHeart('heart-outlined');
            } else {
              setHeart('heart');
            }
            // }
          }}
          style={styles.LikeItemBtn}>
          <Entypo size={20} color="red" name={Heart} />
        </TouchableOpacity>
      </View>
    );
  };

  const categoryModelHandler = () => {
    return CateData.map(d => {
      return (
        // <View style={styles.cateItem}>
        <TouchableOpacity style={styles.cateItem}>
          <Text style={{textTransform: 'capitalize', fontWeight: '400',fontSize: 20,alignSelf: 'center',color: 'black',}}>
            {d.title}
          </Text>
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
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.locationAndSearch}>
          <TouchableOpacity
            style={styles.drawerIcon}
            onPress={() => {
              navigation.openDrawer();
            }}>
            <MaterialIcons size={30} color="black" name="menu" />
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.locationView}>
              <MaterialIcons size={20} color="black" name="location-on" />
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
            />
            <TouchableOpacity>
              <Image
                style={styles.notiIcon}
                source={require('../Home/images/noti.png')}
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* Browse Category */}

        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.BrowseCategory}>
            <Text style={styles.bcText}>Browse Categories</Text>

            <TouchableOpacity onPress={() => setModalVisible(true)}>
              <Text style={styles.seeallbtn}>See All</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.recomandedItem}>
            <ScrollView
              showsHorizontalScrollIndicator={false}
              horizontal={true}>
              {CategoryHandler()}
            </ScrollView>
          </View>

          {/* Category */}

          <View style={styles.BrowseCategory}>
            <Text style={styles.bcText}>Fresh Recommandation</Text>
          </View>

          <View style={styles.recomadationView}>
            <FlatList
              numColumns={2}
              contentContainerStyle={{paddingBottom: 210}}
              columnWrapperStyle={{justifyContent: 'space-between'}}
              data={itemData}
              renderItem={renderItem}
              keyExtractor={item => item.id}
            />
          </View>
        </ScrollView>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
          <SafeAreaView style={styles.modelContainer}>
        <View style={styles.modelContainer}>
          <TouchableOpacity onPress={() => setModalVisible(false)}>
            <MaterialIcons
              style={styles.rightarrow}
              size={25}
              color="black"
              name="close"
            />
          </TouchableOpacity>
          <View style={styles.ModelView}>{categoryModelHandler()}</View>
        </View>
        </SafeAreaView>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    // paddingTop: 20,
    // paddingBottom: 20,
    // paddingLeft: 15,
    // paddingRight: 15,
  },
  locationAndSearch: {
    backgroundColor: 'white',
    paddingBottom: 20,
    // justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 15,
    paddingRight: 15,
  },
  Locationlogo: {
    height: 20,
    width: 20,
  },
  locationText: {
    textTransform: 'uppercase',
    marginLeft: 2,
    marginLeft: 2,
    color: 'gray',
    fontSize: 12,
  },
  locationView: {
    // flex: 1,
    marginLeft: 5,
    marginTop: 2,
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
    // backgroundColor: 'white',
    color: 'black',
    width: '85%',
    height: 40,
    borderWidth: 1,
    borderColor: 'black',
    borderStyle: 'solid',
    borderRadius: 5,
  },
  notiIcon: {
    marginTop: 10,
    height: 20,
    width: 20,
  },
  SearchNoti: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  BrowseCategory: {
    // backgroundColor: 'white',
    // paddingTop: 20,
    // paddingBottom: 20,
    paddingLeft: 15,
    paddingRight: 15,

    marginTop: 10,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  bcText: {
    color: 'black',
    fontSize: 14,
    fontWeight: '500',
  },
  seeallbtn: {
    fontWeight: 'bold',
    color: 'black',
    borderBottomWidth: 2,
  },
  recomandedItem: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    // backgroundColor: 'white',
  },
  olxAutos: {
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 20,
    marginRight: 20,
    width: '5%',
    alignItems: 'center',
    textAlign: 'center',
  },
  carsLogo: {
    height: 50,
    width: 50,
  },
  CategoryTitle: {
    fontSize: 10,
    textAlign: 'center',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  recomadationView: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 15,
    paddingRight: 15,
    width: '100%',
  },
  ItemCard: {
    borderRadius: 5,
    margin: 5,
    padding: 3,
    width: '47%',
    // backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'gray',
  },
  ItemImage: {
    padding: 10,
    height: 150,
    width: '100%',
    borderRadius: 5,
  },
  priceText: {
    marginTop: 10,
    marginLeft: 5,
    color: 'black',
    fontWeight: 'bold',
  },
  DetailText: {
    textTransform: 'uppercase',
    fontSize: 12,
    color: 'black',
    marginTop: 4,
    marginBottom: 2,
    marginLeft: 5,
  },
  LikeItemBtn: {
    backgroundColor: 'white',
    borderRadius: 50,
    padding: 5,
    position: 'absolute',
    top: '8%',
    right: '8%',
  },
  drawerIcon: {
    marginBottom: 10,
    marginLeft: 10,
    width: 30,
  },
  modelContainer: {
    // height: '65%',
    flex: 1,
    backgroundColor: '#bbdefb',
    // top: 200,
    // left: 20,
  },
  ModelView: {
    // justifyContent: 'center',
    // alignItems: 'center',
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
  rightarrow:{
    margin: 8,
  },
});
