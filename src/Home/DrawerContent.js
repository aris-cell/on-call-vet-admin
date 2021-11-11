import React from 'react';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {
  useTheme,
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
} from 'react-native-paper';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
 
export function DrawerContent(props) {
  const paperTheme = useTheme();

  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView style={{backgroundColor: '#f5f5f5'}} {...props}>
        <View style={styles.drawerContent}>
          <View style={{backgroundColor: 'white'}}>
          <Image style={{height:160,width:'85%',alignSelf:'center',marginTop:12,resizeMode:'contain' }} source={require('../assets/profile.png')}/>
          <Text style={{margin:15,alignSelf:'center',fontSize:18,fontWeight:'bold'}}>Dr.Yaspal singh</Text>
       
          </View>

          <View>
            <Drawer.Section style={styles.drawerSection}>
              <DrawerItem
                icon={({color, size}) => (
                  <Icon name="cellphone-information" color={color} size={size} />
                )}
                label="About Application"
                onPress={() => {
                  props.navigation.navigate('Version');
                }}
              />
                <DrawerItem
                icon={({color, size}) => (
                  <Icon name="account" color={color} size={size} />
                )}
                label="Profile"
                onPress={() => {
                  props.navigation.navigate('Version');
                }}
              />
              <DrawerItem
                icon={({color, size}) => (
                  <Icon name="information-variant" color={color} size={size} />
                )}
                label="About On-Call-Services"
                onPress={() => {
                  props.navigation.navigate('About');
                }}
              />
              <DrawerItem
                icon={({color, size}) => (
                  <Icon name="bookmark-outline" color={color} size={size} />
                )}
                label="Author"
                onPress={() => {
                  props.navigation.navigate('Author');
                }}
              />
          
              <View style={{ borderBottomColor: '#bdbdbd',
    borderBottomWidth: 0.5,
    marginTop: 10,}}></View>
            </Drawer.Section>
          </View>
        </View>

      
      </DrawerContentScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },

  title: {
    fontSize: 16,
    marginTop: 3,
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  iconcart: {
    height: 22,
    color: 'grey',
    width: 22,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
