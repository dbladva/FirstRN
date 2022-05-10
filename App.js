import { View, Text, Image } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/component/OLX/Home/HomeScreen'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SettingScreen from './src/component/OLX/Setting/SettingScreen'
import Icon from 'react-native-ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'
import Chat from './src/component/OLX/Chat/Chat';
import Detail from './src/component/OLX/Detail/Detail';
import Sell from './src/component/OLX/Sell/Sell';
import Account from './src/component/OLX/Account/Account';
import { createDrawerNavigator } from '@react-navigation/drawer';
import 'react-native-gesture-handler';
import SignIn from './src/component/OLX/Login/SignIn';
import 'react-native-gesture-handler';
import Signup from './src/component/OLX/Login/Signup';

const Stack = createNativeStackNavigator();
const HomeStack = createNativeStackNavigator();
const AccountStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function TabHandler() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          

          if (route.name === 'Homess') {
            iconName = focused
              ? 'home'
              : 'ios-information-circle-outline';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'ios-list-box' : 'ios-list';
          }

          if (route.name === 'HOME') {
            return <MaterialIcons size={20} color='black' name='home'/>
          } else if (route.name === 'CHAT') {
            return <MaterialIcons size={20} color='black' name='chat' />
          } else if (route.name === 'SETTING') {
            return <MaterialIcons size={20} color='black' name='settings' />
          } else if (route.name === 'ACCOUNT') {
            return <MaterialIcons size={20} color='black' name='account-circle' />
          } else if (route.name === 'ACCOUNT') {
            return <MaterialIcons size={20} color='black' name='account-circle' />
          }
          return <AntDesign style={{position: 'absolute',bottom: 5,}} size={50} color='orange' name='pluscircle' />
        },
        tabBarActiveTintColor: 'red',
        headerShown: false,
        tabBarInactiveTintColor: 'black',
        // tabBarInactiveBackgroundColor: 'red',
      })}
    >
      <Tab.Screen name="HOME" options={{headerShown: false}}  component={HomeScreenStackHandler} />
      <Tab.Screen name='CHAT' component={Chat} />
      <Tab.Screen name="SELL" component={Sell} />
      <Tab.Screen name="SETTING" component={SettingScreen} />
      <Tab.Screen name="ACCOUNT"  screenOptions={{headerShown: false}}  component={AccountStackHandler} />
    </Tab.Navigator>
  )
}

function AccountStackHandler () {
  return(
    <AccountStack.Navigator screenOptions={{headerShown: false}} >
      <AccountStack.Screen name='Account' screenOptions={{headerShown: false}}  component={Account} />
      <AccountStack.Screen name='SignIn' screenOptions={{headerShown: false}}   component={SignIn} />
      <AccountStack.Screen name='Signup' screenOptions={{headerShown: false}}   component={Signup} />
    </AccountStack.Navigator>
  )
}

function HomeScreenStackHandler () {
  return(
    <HomeStack.Navigator >
      <HomeStack.Screen name='Homess' options={{headerShown: false}} component={HomeScreen} />
      <HomeStack.Screen name='Detail' screenOptions={{headerShown: false}} component={Detail} />
      <HomeStack.Screen name='Chat' screenOptions={{headerShown: true}} component={Chat} />
    </HomeStack.Navigator>
  )
}

function HomescreenTab () {
  return (
    TabHandler()
    )
}

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator  screenOptions={{headerShown: false}} initialRouteName="Home">
        <Drawer.Screen    name="Home" component={HomescreenTab} />
        <Drawer.Screen  name="Chat Screen" component={Chat} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}