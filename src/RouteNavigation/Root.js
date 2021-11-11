import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import { createStackNavigator } from '@react-navigation/stack';
import Login from '../Account/Login';
import Register from '../Account/Register';
import Forgotpass from '../Account/Forgotpass';

import Home from '../Home/Home'
import {DrawerContent} from '../Home/DrawerContent';
import About from '../Drawer/About'
import Author from '../Drawer/Author'
import Version from '../Drawer/Version'
 
 
import newCall from '../Tabs/newCall'
import Pending from '../Tabs/Pending'
import Completed from '../Tabs/Completed'







 
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
 
export default class RouteNavigation extends React.Component {
  state = { skip: undefined, comp: '' };
 
  render() {
     console.disableYellowBox = true;
   
function MyTabs() { 
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: '#fff',
        labelStyle: { fontSize: 14 },
        style: { backgroundColor: '#004d40' },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{ tabBarLabel: 'Home' }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{ tabBarLabel: 'Profile' }}
      />
      {/* <Tab.Screen
        name="Support"
        component={Support}
        options={{ tabBarLabel: 'Support' }}
      /> */}
    </Tab.Navigator>
  );
}
    

    function DrawerRouter() {
      return (
        <Drawer.Navigator
          drawerStyle={{
            width: 275,
          }}
          overlayColor="transparent"
          drawerContent={(props) => <DrawerContent {...props} />}
          initialRouteName="Login">
                      <Drawer.Screen name="Login" component={Login} />
                      <Drawer.Screen name="Register" component={Register} />
                      <Drawer.Screen name="Forgotpass" component={Forgotpass} />

          <Drawer.Screen name="Home" component={Home} />
          <Drawer.Screen name="About" component={About} />
          <Drawer.Screen name="Author" component={Author} />
          <Drawer.Screen name="Version" component={Version} />
          
        </Drawer.Navigator>
      );
    }
    return (
        <>
        <NavigationContainer>
      
          <Stack.Navigator
            initialRouteName='Home'
            screenOptions={{ headerShown: false }}>

            <Stack.Screen name="Home" component={DrawerRouter} />
            <Stack.Screen name="newCall" component={newCall} />
            <Stack.Screen name="Pending" component={Pending} />
            <Stack.Screen name="Completed" component={Completed} />


            



       


            
          </Stack.Navigator>

        </NavigationContainer>
      </>
     
    );
  }
}
