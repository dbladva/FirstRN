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
} from 'react-native';
import React from 'react';

export default function HomeScreen({navigation}) {
  return (
    <SafeAreaView>
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

        <ScrollView>
          <View style={styles.BrowseCategory}>
            <Text style={styles.bcText}>Browse Categories</Text>

            <TouchableOpacity>
              <Text style={styles.seeallbtn}>See All</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.recomandedItem}>
            <ScrollView horizontal={true}>
              <View style={styles.olxAutos}>
                <TouchableOpacity>
                  <Image
                    style={styles.carsLogo}
                    source={require('../Home/images/cars.png')}
                  />
                  <Text style={styles.CategoryTitle}>OLX AUTOS</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.olxAutos}>
                <TouchableOpacity>
                  <Image
                    style={styles.carsLogo}
                    source={require('../Home/images/properties.png')}
                  />
                  <Text style={styles.CategoryTitle}>properties</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.olxAutos}>
                <TouchableOpacity>
                  <Image
                    style={styles.carsLogo}
                    source={require('../Home/images/mobiles.png')}
                  />
                  <Text style={styles.CategoryTitle}>Mobiles</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.olxAutos}>
                <TouchableOpacity>
                  <Image
                    style={styles.carsLogo}
                    source={require('../Home/images/jobs.png')}
                  />
                  <Text style={styles.CategoryTitle}>Jobs</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.olxAutos}>
                <TouchableOpacity>
                  <Image
                    style={styles.carsLogo}
                    source={require('../Home/images/bike.png')}
                  />
                  <Text style={styles.CategoryTitle}>Bikes</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.olxAutos}>
                <TouchableOpacity>
                  <Image
                    style={styles.carsLogo}
                    source={require('../Home/images/electronic.png')}
                  />
                  <Text style={styles.CategoryTitle}>Electronics</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.olxAutos}>
                <TouchableOpacity>
                  <Image
                    style={styles.carsLogo}
                    source={require('../Home/images/vehicles.png')}
                  />
                  <Text style={styles.CategoryTitle}>Commmercial Vehicles</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.olxAutos}>
                <TouchableOpacity>
                  <Image
                    style={styles.carsLogo}
                    source={require('../Home/images/furniture.png')}
                  />
                  <Text style={styles.CategoryTitle}>furniture</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.olxAutos}>
                <TouchableOpacity>
                  <Image
                    style={styles.carsLogo}
                    source={require('../Home/images/fashion.png')}
                  />
                  <Text style={styles.CategoryTitle}>Fashion</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.olxAutos}>
                <TouchableOpacity>
                  <Image
                    style={styles.carsLogo}
                    source={require('../Home/images/hobby.png')}
                  />
                  <Text style={styles.CategoryTitle}>Sports & Hobby</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.olxAutos}>
                <TouchableOpacity>
                  <Image
                    style={styles.carsLogo}
                    source={require('../Home/images/pets.png')}
                  />
                  <Text style={styles.CategoryTitle}>pets</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.olxAutos}>
                <TouchableOpacity>
                  <Image
                    style={styles.carsLogo}
                    source={require('../Home/images/services.png')}
                  />
                  <Text style={styles.CategoryTitle}>services</Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </View>

          {/* Category */}

          <View style={styles.BrowseCategory}>
            <Text style={styles.bcText}>Fresh Recommandation</Text>
          </View>

          
            <View style={styles.recomadationView}>
              <View style={styles.ItemCard}>
                <TouchableOpacity>
                <Image
                  style={styles.ItemImage}
                  source={require('../Home/images/laptop.jpeg')}
                />
                <Text style={styles.priceText}>₹ 1,20,000</Text>

                <Text style={styles.DetailText}>MateBook X Pro</Text>
                <View style={styles.locationView}>
                  <Image
                    style={styles.Locationlogo}
                    source={require('../Home/images/location.png')}
                  />
                  <Text style={styles.locationText}>Varracha, surat</Text>
                </View>
                </TouchableOpacity>
              </View>

              <View style={styles.ItemCard}>
                <TouchableOpacity>
                <Image
                  style={styles.ItemImage}
                  source={require('../Home/images/laptop.jpeg')}
                />
                <Text style={styles.priceText}>₹ 1,20,000</Text>

                <Text style={styles.DetailText}>MateBook X Pro</Text>
                <View style={styles.locationView}>
                  <Image
                    style={styles.Locationlogo}
                    source={require('../Home/images/location.png')}
                  />
                  <Text style={styles.locationText}>Varracha, surat</Text>
                </View>
                </TouchableOpacity>
              </View>

              <View style={styles.ItemCard}>
                <TouchableOpacity>
                <Image
                  style={styles.ItemImage}
                  source={require('../Home/images/laptop.jpeg')}
                />
                <Text style={styles.priceText}>₹ 1,20,000</Text>

                <Text style={styles.DetailText}>MateBook X Pro</Text>
                <View style={styles.locationView}>
                  <Image
                    style={styles.Locationlogo}
                    source={require('../Home/images/location.png')}
                  />
                  <Text style={styles.locationText}>Varracha, surat</Text>
                </View>
                </TouchableOpacity>
              </View>
              <View style={styles.ItemCard}>
                <TouchableOpacity>
                <Image
                  style={styles.ItemImage}
                  source={require('../Home/images/laptop.jpeg')}
                />
                <Text style={styles.priceText}>₹ 1,20,000</Text>

                <Text style={styles.DetailText}>MateBook X Pro</Text>
                <View style={styles.locationView}>
                  <Image
                    style={styles.Locationlogo}
                    source={require('../Home/images/location.png')}
                  />
                  <Text style={styles.locationText}>Varracha, surat</Text>
                </View>
                </TouchableOpacity>
              </View>

              <View style={styles.ItemCard}>
                <TouchableOpacity>
                <Image
                  style={styles.ItemImage}
                  source={require('../Home/images/laptop.jpeg')}
                />
                <Text style={styles.priceText}>₹ 1,20,000</Text>

                <Text style={styles.DetailText}>MateBook X Pro</Text>
                <View style={styles.locationView}>
                  <Image
                    style={styles.Locationlogo}
                    source={require('../Home/images/location.png')}
                  />
                  <Text style={styles.locationText}>Varracha, surat</Text>
                </View>
                </TouchableOpacity>
              </View>

              <View style={styles.ItemCard}>
                <TouchableOpacity>
                <Image
                  style={styles.ItemImage}
                  source={require('../Home/images/laptop.jpeg')}
                />
                <Text style={styles.priceText}>₹ 1,20,000</Text>

                <Text style={styles.DetailText}>MateBook X Pro</Text>
                <View style={styles.locationView}>
                  <Image
                    style={styles.Locationlogo}
                    source={require('../Home/images/location.png')}
                  />
                  <Text style={styles.locationText}>Varracha, surat</Text>
                </View>
                </TouchableOpacity>
              </View>

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
    // backgroundColor: 'white',
    paddingBottom: 20,
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: 'black',

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
    fontSize: 16,
    fontWeight: '500',
  },
  seeallbtn: {
    fontWeight: 'bold',
    color: 'black',
    textDecorationLine: 'underline',
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
    width: 90,
    alignItems: 'center',
    textAlign: 'center',
  },
  carsLogo: {
    height: 60,
    width: 60,
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
    borderRadius: 10,
    margin: 5,
    padding: 5,
    width: '46%',
    // backgroundColor: 'red',
    borderWidth: 1,
  },
  ItemImage: {
    padding: 10,
    height: 180,
    width: '100%',
  },
  priceText: {
    marginTop: 10,
    color: 'black',
    fontWeight: 'bold',
  },
  DetailText: {
    marginTop: 5,
  },
});
