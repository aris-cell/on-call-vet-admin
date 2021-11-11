
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
 
 
 export default class Login extends React.Component {
     render(){
   return (
     <View  style={{ backgroundColor:'white',flex:1}}>
     <View style={{ backgroundColor:'white'}}>
         <StatusBar backgroundColor="#ffb74d" barStyle="light-content" />
         <View style={{ flexDirection: 'row', backgroundColor: '#ffb74d' , height: 45 }}>
           <Icon   onPress={() => this.props.navigation.navigate('Home')}  name="arrow-left" style={{ fontSize: 32, color: 'white', marginLeft: 10, marginTop: 4 }} />
           {/* <Text style={{ fontSize: 20, alignSelf: 'center', color: 'white', bottom: 5,marginLeft:12 }}>About Application</Text> */}
         </View>  
         <ScrollView  style={{ backgroundColor:'white'}} showsVerticalScrollIndicator={false}> 
         
 <Text style={{textAlign:'center',fontSize:22,fontWeight:'bold',marginTop:10,}}>About Application</Text>
                  <Text numberOfLines={25} style={{ marginRight: 10,alignSelf:'center',textAlign:'center',fontSize:16,marginTop:20,marginHorizontal:10 }}>Milk is highly evolved secretion of mammary glands, which is considered as perfect food for each species infants, as well as for human beings. Milk which comes from the udder of healthy animals and has good flavor, pleasant smell, free from dust, dirt, drug residues and does not contain harmful microbes, which can affect human health is considered as Clean Milk. Clean milk is safe for human consumption and free from disease producing microorganisms like typhoid, dysentery, etc. Clean milk has a high keeping quality and can be transported over long distances. Milk needs to be protected from all possible sources of microbial contamination as it act as good media for pathogenic organism; hence milk gets easily contaminated. The CMP app covers what is milk, clean milk, how the quality of raw milk can be assessed, and package practices for production of clean milk.</Text>
                  <Text numberOfLines= {3} style={{fontWeight:'bold',fontSize:22,color:'#1a237e',alignSelf:'center',textAlign:'center',marginHorizontal:8,marginBottom:0,marginTop:10}}>Designed By </Text> 

                  {/* <Image style={{ width:'95%',alignSelf:'center',resizeMode:'contain',height:150,marginTop:10}} source={require('../assets/logo.png')}/> */}

                  <Text numberOfLines= {3} style={{fontWeight:'bold',fontSize:22,color:'#1a237e',alignSelf:'center',textAlign:'center',marginHorizontal:8,marginBottom:0,marginTop:10}}>ARIS Cell ICAR-IVRI Izzatnagar,Bareilly,Uttar Pradesh 243122</Text> 

         </ScrollView>
          </View>
          </View>
   );
     }
 }
 