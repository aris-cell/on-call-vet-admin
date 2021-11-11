import { Container } from 'native-base';
import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  Dimensions,
  StatusBar,
  Image,
} from 'react-native';
import { Assets } from '../assets/index';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { ScrollView } from 'react-native-gesture-handler';


export default class Milk extends React.Component {
    render(){
  return (
    <View style={{marginBottom:60}}>
 <StatusBar backgroundColor="#ffb74d" barStyle="light-content" />
        <View style={{ flexDirection: 'row', backgroundColor: '#ffb74d' , height: 45 }}>
          <Icon   onPress={() => this.props.navigation.navigate('Home')}  name="arrow-left" style={{ fontSize: 32, color: 'white', marginLeft: 10, marginTop: 4 }} />
          <Text style={{ fontSize: 20, alignSelf: 'center', color: 'white', bottom: 5,marginLeft:12 }}>About Application</Text>
          

        </View>  
        <ScrollView showsVerticalScrollIndicator={false}> 
        

        <View style={{ flexDirection: 'row', marginHorizontal: 10,marginTop:10 }} >
        <Text style={{ fontSize: 24, fontWeight: 'bold'   }}>* </Text>
        <View style={{flexDirection:'row'}}>
          <Text numberOfLines={5} style={{ marginRight: 8,fontStyle:'italic',fontWeight:'bold' }}>Hari Om Pandey </Text>
          <Text numberOfLines={5} style={{ marginRight: 8,fontStyle:'italic',fontWeight:'bold',color:'blue' }}> Email: hariomvet@gmail.com</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row', marginHorizontal: 10,marginTop:5 }} >
        <Text style={{ fontSize: 24, fontWeight: 'bold'   }}>* </Text>
          <Text numberOfLines={5} style={{ marginRight: 8 ,fontStyle:'italic',fontWeight:'bold'}}>Garima Kansal</Text>
        </View>
        <View style={{ flexDirection: 'row', marginHorizontal: 10,marginTop:10 }} >
        <Text style={{ fontSize: 24, fontWeight: 'bold'   }}>* </Text>
          <Text numberOfLines={5} style={{ marginRight: 8,fontStyle:'italic',fontWeight:'bold' }}>Triveni Dutt</Text>
        </View>
        <View style={{ flexDirection: 'row', marginHorizontal: 10,marginTop:10 }} >
        <Text style={{ fontSize: 24, fontWeight: 'bold'   }}>* </Text>
          <Text numberOfLines={5} style={{ marginRight: 8 ,fontStyle:'italic',fontWeight:'bold'}}>Sanjay Pandey </Text>
        </View>
        <View style={{ flexDirection: 'row', marginHorizontal: 10,marginTop:10}} >
        <Text style={{ fontSize: 24, fontWeight: 'bold'   }}>* </Text>
          <Text numberOfLines={5} style={{ marginRight: 8 ,fontStyle:'italic',fontWeight:'bold'}}>Yash Pal Singh</Text>
        </View>
       
         

        {/* <Image style={{height:250,width:'95%',alignSelf:'center',marginTop:16}} source={require('../assets/visa.png')}/> */}

        
        </ScrollView>
         </View>
  );
    }
}
