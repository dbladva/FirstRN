import { View, Text ,Image} from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/component/OLX/Home/HomeScreen'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SettingScreen from './src/component/OLX/Setting/SettingScreen'
import Icon from 'react-native-ionicons'
import Detail from './src/component/OLX/Home/Detail/Detail';

export default function App() {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();
  const HomeStack = createNativeStackNavigator();
  
  
  function HomeStackScreen() {
    return (
      <HomeStack.Navigator>
        {/* <HomeStack.Screen name="Home" component={HomeScreen} /> */}
        <HomeStack.Screen name="Detail" component={Detail} />
      </HomeStack.Navigator>
    );
  }

  return (  
   

    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'ios-information-circle'
                : 'ios-information-circle-outline';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'ios-list-box' : 'ios-list';
            }

            // You can return any component that you like here!
            return  <Image style={{height: 20, width: 20,tintColor: 'black'}} source={require('./src/component/OLX/Home/images/house.png')} />;
          },
          tabBarActiveTintColor: 'red',
          tabBarInactiveTintColor: 'gray',
        })}
      >
      
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingScreen} />
      </Tab.Navigator>
      
    </NavigationContainer>
  )
}