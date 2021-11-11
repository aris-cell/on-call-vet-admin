import { Container } from 'native-base';
import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  Dimensions,
  StatusBar,
  TouchableOpacity,
  StyleSheet,
  Share,

  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { SliderBox } from 'react-native-image-slider-box';

import { Assets } from '../assets/index';

import { ScrollView } from 'react-native-gesture-handler';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        require('../assets/b1.png'),
        require('../assets/b2.jpeg'),
        require('../assets/b3.jpeg'),

      ],
    };
  }

  onShare = async () => {
    try {
      const result = await Share.share({
        message:
          'To know about the YAK Application Click the Link : https://play.google.com/store/apps/details?id=com.cleanmilk',
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

  render() {
    return (
      <View>
        <StatusBar backgroundColor="#1a237e" barStyle="light-content" />
        <View style={{ flexDirection: 'row', backgroundColor: '#1a237e', justifyContent: 'space-between', height: 45 }}>
          <Icon onPress={() => this.props.navigation.openDrawer()}  name="menu" style={{ fontSize: 32, color: 'white', marginLeft: 10, marginTop: 4 }} />
          <Text style={{ fontSize: 20, alignSelf: 'center', color: 'white', bottom: 5 }}>Home</Text>
<View style={{flexDirection:'row'}}> 
<Icon onPress={this.onShare}    name="share" style={{ fontSize: 32, color: 'white' , marginTop: 4 ,marginRight:10}} />

          <Icon onPress={() => this.props.navigation.navigate('Version')}  name="information" style={{ fontSize: 28, color: 'white', marginTop: 6, marginRight: 10 }} />
</View>
        </View>
        
        <ScrollView  >
            <View style={{backgroundColor:'white'}}>
          
          <SliderBox

            images={this.state.images}
            sliderBoxHeight={190}
            
            dotColor="#ea0016"
            inactiveDotColor="#90A4AE"
            paginationBoxVerticalPadding={20}
            autoplay
            circleLoop
            dotStyle={{
              width: 10,
              height: 10,
              backgroundColor: 'white',
            }}
            ImageComponentStyle={{
              alignSelf: 'center',

              width: '97%',
              marginTop: 15,
            }}
          />
 
          </View>

          <View style={{ flexDirection:'row'}}>
        
       
        <View style={{flexDirection:'column'}}>
        <Text style={{marginLeft:20,marginTop:15,fontSize:16,fontWeight:'bold'}}>Dr.Yashpal Singh</Text>
          
         
          <View style={{height:1,backgroundColor:'#e0e0e0',marginLeft:20,marginTop:0,width:'30%'}}></View>
          <Text style={{marginLeft:20,marginTop:20,fontSize:16,fontWeight:'bold'}}>785247386</Text>
          <View style={{height:1,backgroundColor:'#e0e0e0',marginLeft:20,marginTop:6,width:'30%'}}></View>
          
         
          
          <Text style={{marginLeft:20,marginTop:15,fontSize:16,fontWeight:'bold'}}>xyz@gmail.com</Text>
          <View style={{height:1,backgroundColor:'#e0e0e0',marginLeft:20,marginTop:6,width:'30%'}}></View>
          <Text style={{marginLeft:20,marginTop:15,fontSize:16,fontWeight:'bold',width:'60%'}}>House no.4 Rajendra nagar bareilly</Text>
          <View style={{height:1,backgroundColor:'#e0e0e0',marginLeft:20,marginTop:6,width:'60%'}}></View>
        
        </View>
        <View style={{height:160,width:140,borderRadius:20,backgroundColor:'grey',marginTop:16,right:50}}>
          <Image style={{height:160,width:140,borderRadius:20 }} source={Assets.p2}/>

        </View> 
        </View>

        
        <View style={{ flexDirection:'row',marginTop:10,marginHorizontal:8}}>
        
        <TouchableOpacity onPress={() => this.props.navigation.navigate('newCall')} 
        style={{height:110,width:170,borderRadius:20,backgroundColor:'white',marginTop:16,marginLeft:14,elevation:0.7}}>
        <Image style={{height:60,width:60,borderRadius:10,alignSelf:'center',top:10 }} source={Assets.newcall}/>
        <Text style={{ marginTop:15,fontSize:14,fontWeight:'bold',textAlign:'center',color:'#1a237e'}}>Latest Calls</Text>
        
        </TouchableOpacity>


        <TouchableOpacity onPress={() => this.props.navigation.navigate('Pending')} 
         style={{height:110,width:170,borderRadius:20,backgroundColor:'white',marginTop:16,marginLeft:14,elevation:0.7}}>
        <Image style={{height:60,width:60,borderRadius:10,alignSelf:'center',top:10 }} source={Assets.pending}/>
        <Text style={{ marginTop:15,fontSize:14,fontWeight:'bold',textAlign:'center',color:'#1a237e'}}>Pending Calls</Text>

        
        
        </TouchableOpacity>

        
 
        
       
         
        </View>
        <TouchableOpacity  onPress={() => this.props.navigation.navigate('Completed')} 
        style={{height:110,width:'90%',borderRadius:20,backgroundColor:'white',marginTop:16,marginLeft:22,elevation:0.7,marginBottom:50}}>
        <Image style={{height:60,width:60,borderRadius:10,alignSelf:'center',top:10 }} source={Assets.complete}/>
        <Text style={{ marginTop:15,fontSize:14,fontWeight:'bold',textAlign:'center',color:'#1a237e'}}>Completed Call</Text>

        
        
        </TouchableOpacity>
       
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({

  submitButton: {
    marginTop:10,
   backgroundColor: '#fff',
   marginHorizontal:8,
   elevation:1,
   width:'95%',
    height: 50,  borderRadius:10,
},
submitButtonText:{
      fontSize:16,
      paddingLeft:10,
      top:10,
      alignSelf:'center',
      color: 'black',

 
}
   
})
