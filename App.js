import { View, Text ,Image} from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/component/OLX/Home/HomeScreen'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SettingScreen from './src/component/OLX/Setting/SettingScreen'
import Icon from 'react-native-ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Entypo from 'react-native-vector-icons/Entypo'
import chat from './src/component/OLX/Chat/Chat';
import Sell from './src/component/OLX/Sell/Sell';
import Account from './src/component/OLX/Account/Account';
import { ScreenStackHeaderCenterView } from 'react-native-screens';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();
  
function HomeStackScreen() {
  return (
    <HomeStack.Navigator options={{
      headerShown: false,
    }}>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="Detail" component={Detail} screenOptions={{ headerShown: false }}/>
    </HomeStack.Navigator>
  );
}


export default function App() {
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
            // return  <Image style={{height: 20, width: 20,tintColor: 'black'}} source={require('./src/component/OLX/Home/images/house.png')} />;
            if(route.name === 'HOME'){
             return <MaterialIcons  size={20}  color='black' name='home' />
            }else if(route.name === 'CHAT'){
                return <MaterialIcons  size={20}  color='black' name='chat' />
            }else if(route.name === 'SETTING'){
              return <MaterialIcons  size={20}  color='black' name='settings' />
          }else if(route.name === 'ACCOUNT'){
            return <MaterialIcons  size={20}  color='black' name='account-circle' />
        }else if(route.name === 'ACCOUNT'){
            return <MaterialIcons  size={20}  color='black' name='account-circle' />
        }
            return <MaterialIcons  size={37}  color='orange' name='add-circle' />
          },
          tabBarActiveTintColor: 'red',
          headerShadowVisible: false,
          headerShown: false,
          tabBarInactiveTintColor: 'black',
          // tabBarInactiveBackgroundColor: 'red',
          
         
        })}
      >
      
        <Tab.Screen   name="HOME" component={HomeScreen} />
        <Tab.Screen name='CHAT' component={chat} />
        <Tab.Screen name="SELL" component={Sell}  />
        <Tab.Screen name="SETTING" component={SettingScreen} />
        <Tab.Screen name="ACCOUNT" component={Account} />
      </Tab.Navigator>
      
    </NavigationContainer>
  )
}