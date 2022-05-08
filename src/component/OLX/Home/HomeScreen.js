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
  
} from 'react-native';
import  React,{useState} from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';



const categoryData = [
  {id: 1, image: require('../Home/images/cars.png'), title: 'olx autos'},
  {id: 2, image: require('../Home/images/properties.png'), title: 'propertry'},
  {id: 3, image: require('../Home/images/mobiles.png'), title: 'Mobiles'},
  {id: 4, image: require('../Home/images/jobs.png'), title: 'Jobs'},
  {id: 5, image: require('../Home/images/bike.png'), title: 'Bikes'},
  {id: 6, image: require('../Home/images/electronic.png'), title: 'electronic'},
  {id: 7, image: require('../Home/images/vehicles.png'), title: 'vehicles'},
  {id: 8, image: require('../Home/images/furniture.png'), title: 'furniture'},
  {id: 9, image: require('../Home/images/fashion.png'), title: 'fashion'},
  {id: 10, image: require('../Home/images/hobby.png'), title: 'hobby'},
  {id: 11, image: require('../Home/images/pets.png'), title: 'pets'},
  {id: 12, image: require('../Home/images/services.png'), title: 'services'},
];

let image1 = "require('../Home/images/air.jpeg')";

const ItemData = [
  {
    id: 1,
    Itemimage: require('../Home/images/iwatch.jpg'),
    ItemPrice: '56,500',
    ItemName: 'IWatch searies 6',
    ItemLocation: 'Varracha Surat',
  },
  {
    id: 2,
    Itemimage: require('../Home/images/macbook.jpeg'),

    ItemPrice: '1,20,000',
    ItemName: 'MacBook pro',
    ItemLocation: 'Varracha Surat',
  },
  {
    id: 3,
    Itemimage: require('../Home/images/dell.jpeg'),

    ItemPrice: '1,30,000',
    ItemName: 'Dell Inspiro',
    ItemLocation: 'Varracha Surat',
  },
  {
    id: 4,
    Itemimage: require('../Home/images/ipad.jpg'),
    ItemPrice: '1,40,000',
    ItemName: 'Ipad',
    ItemLocation: 'Varracha Surat',
  },
  {
    id: 5,
    Itemimage: require('../Home/images/asus.jpeg'),
    ItemPrice: '1,50,000',
    ItemName: 'Asus Zenbook',
    ItemLocation: 'Varracha Surat',
  },

  {
    id: 6,
    Itemimage: require('../Home/images/hp.jpeg'),
    ItemPrice: '1,60,000',
    ItemName: 'Hp Gaming Laptop',
    ItemLocation: 'Varracha Surat',
  },
  {
    id: 7,
    Itemimage: require('../Home/images/macbook.jpeg'),
    ItemPrice: '1,70,000',
    ItemName: 'MacBook pro 22Inch',
    ItemLocation: 'Varracha Surat',
  },
  {
    id: 8,
    Itemimage: require('../Home/images/air.jpeg'),
    ItemPrice: '1,80,000',
    ItemName: 'MacBook Air',
    ItemLocation: 'Varracha Surat',
  },
  {
    id: 9,
    Itemimage: require('../Home/images/asus.jpeg'),
    ItemPrice: '1,0,000',
    ItemName: 'MacBook Air',
    ItemLocation: 'Varracha Surat',
  },
  {
    id: 10,
    Itemimage: require('../Home/images/13.jpg'),
    ItemPrice: '1,20,000',
    ItemName: 'Iphone 13 Pro Max',
    ItemLocation: 'Varracha Surat',
  },
  {
    id: 11,
    Itemimage: require('../Home/images//macbook.jpeg'),
    ItemPrice: '1,20,000',
    ItemName: 'MacBook Air',
    ItemLocation: 'Varracha Surat',
  },
  {
    id: 12,
    Itemimage: require('../Home/images/12.jpg'),
    ItemPrice: '1,20,000',
    ItemName: 'Ihpone 12 Pro Max',
    ItemLocation: 'Varracha Surat',
  },{
    id: 13,
    Itemimage: require('../Home/images/iwatch.jpg'),
    ItemPrice: '56,500',
    ItemName: 'IWatch searies 6',
    ItemLocation: 'Varracha Surat',
  },
  {
    id: 14,
    Itemimage: require('../Home/images/macbook.jpeg'),

    ItemPrice: '1,20,000',
    ItemName: 'MacBook pro',
    ItemLocation: 'Varracha Surat',
  },
  {
    id: 15,
    Itemimage: require('../Home/images/dell.jpeg'),

    ItemPrice: '1,30,000',
    ItemName: 'Dell Inspiro',
    ItemLocation: 'Varracha Surat',
  },
  {
    id: 16,
    Itemimage: require('../Home/images/ipad.jpg'),
    ItemPrice: '1,40,000',
    ItemName: 'Ipad',
    ItemLocation: 'Varracha Surat',
  },
  {
    id: 17,
    Itemimage: require('../Home/images/asus.jpeg'),
    ItemPrice: '1,50,000',
    ItemName: 'Asus Zenbook',
    ItemLocation: 'Varracha Surat',
  },

  {
    id: 18,
    Itemimage: require('../Home/images/hp.jpeg'),
    ItemPrice: '1,60,000',
    ItemName: 'Hp Gaming Laptop',
    ItemLocation: 'Varracha Surat',
  },
  {
    id: 19,
    Itemimage: require('../Home/images/macbook.jpeg'),
    ItemPrice: '1,70,000',
    ItemName: 'MacBook pro 22Inch',
    ItemLocation: 'Varracha Surat',
  },
  {
    id: 20,
    Itemimage: require('../Home/images/air.jpeg'),
    ItemPrice: '1,80,000',
    ItemName: 'MacBook Air',
    ItemLocation: 'Varracha Surat',
  },
  {
    id: 21,
    Itemimage: require('../Home/images/asus.jpeg'),
    ItemPrice: '1,0,000',
    ItemName: 'MacBook Air',
    ItemLocation: 'Varracha Surat',
  },
  {
    id: 22,
    Itemimage: require('../Home/images/13.jpg'),
    ItemPrice: '1,20,000',
    ItemName: 'Iphone 13 Pro Max',
    ItemLocation: 'Varracha Surat',
  },
  {
    id: 23,
    Itemimage: require('../Home/images//macbook.jpeg'),
    ItemPrice: '1,20,000',
    ItemName: 'MacBook Air',
    ItemLocation: 'Varracha Surat',
  },
  {
    id: 24,
    Itemimage: require('../Home/images/12.jpg'),
    ItemPrice: '1,20,000',
    ItemName: 'Ihpone 12 Pro Max',
    ItemLocation: 'Varracha Surat',
  },
];

export default function HomeScreen({navigation}) {

  const [Heart,setHeart] = useState('heart-outlined')
  // const renderdata = ({item}) => (
  //   <View>
  //     <Image style={styles.carsLogo} source={item.image} />
  //     <Text>{item.title}</Text>
  //   </View>
  // );

  const CategoryHandler = () => {
    return categoryData.map((i, index) => {
      console.log(i.title);
      const {image, title} = i;
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

  const renderItem = ({item}) => {
    return (
      <View style={styles.ItemCard}>
        <TouchableOpacity>
          <Image style={styles.ItemImage} source={item.Itemimage} />
          <Text style={styles.priceText}>₹{item.ItemPrice}</Text>

          <Text style={styles.DetailText}>{item.ItemName}</Text>
          <View style={styles.locationView}>
            <MaterialIcons size={16} color="black" name="location-on" />
            <Text style={styles.locationText}>Varracha, surat</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {
          if(Heart === 'heart'){
            setHeart('heart-outlined')
          }else{
            setHeart('heart')
          }
        }}
         style={styles.LikeItemBtn}>
          <Entypo size={20} color="red" name={Heart} />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.locationAndSearch}>
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

            <TouchableOpacity>
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
              data={ItemData}
              renderItem={renderItem}
              keyExtractor={item => item.id}
            />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'gray',
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
    color: '#000000',
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
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'gray',
    shadowColor: 'red',
    shadowOffset: {width: 1, height: 3},
    shadowOpacity: 0.9,
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
});
