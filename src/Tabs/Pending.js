
import React from 'react';
import { View, StyleSheet, Dimensions,Container,StatusBar,
Text,Picker ,Image,TouchableHighlight,Alert,ScrollView,FlatList,Linking,
TouchableOpacity,Title,Caption,Drawer,Avatar,ActivityIndicator } from 'react-native';
import { Assets } from '../assets/index';  
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'                       

export default class completed extends React.Component {
  constructor(props)
 {

   super(props);

   this.state = { 

   isLoading: true,

   PickerValueHolder : ''

  }
 }


    render() {
      return (
          
       <View>
                  <View
        style={{
         
          height:60,
           
          backgroundColor:'#1a237e',
          alignItems: 'center',
        }}>
          <View  style={{flexDirection:'row',alignSelf:'flex-start',marginHorizontal:10 }}>
            <Icon onPress={() => this.props.navigation.navigate('Home')}
                  style={{  color: 'white',
                  fontSize: 24,                 
                  marginTop:15
                   }}
                  name="arrow-left"
                 /> 
                  <Text style={{ color: 'white', fontSize: 22, marginTop:12,marginLeft:70 }}>
                    Pending Calls
                    </Text>
                    </View>
      </View> 
        <ScrollView style={{marginBottom:70}}> 
          <FlatList
            style={{
              marginHorizontal: 5,
            }}
            data={[
              {
            
              Callno:'1',
                Name: 'Sumit Sharma',
                Mobile:9876543210,
                Address: '220 A rajendra nagar ',
                Email:'xyz@gmail.com',
                fatherName:'Vishnu sharma',
                Location:'Bareilly',
                addharNo:628153745162,
                DOB:'22 may 1989',
                noOfAnimals:4,
                Specie:'Dog',
                problem:'Animal Sick',
                Level:'High fever and not eating anything',
                status:'Pending'   
             },

             {
            
                Callno:'2',
                  Name: 'Ram Sharma',
                  Mobile:9876543210,
                  Address: '220 A Kirti nagar ',
                  Email:'xyz@gmail.com',
                  fatherName:'Shivam sharma',
                  Location:'Izzatnagar',
                  addharNo:74562849916,
                  DOB:'22 Sept 1989',
                  noOfAnimals:2,
                  Specie:'Cat',
                  problem:'Animal Sick',
                  Level:'High fever and not eating anything',
                  status:'Pending'   
               },
            
            ]}
            vertical
            showsVerticalScrollIndicator={false}
            renderItem={this.renderItem}
            keyExtractor={(item, i) => i.toString()}
          />
        </ScrollView>
        

  
   </View>
   
      );
  }
  renderItem = ({item, index}) => (
    <View style={styles.verticalview}>
      
      <View style={styles.view}>
        <TouchableOpacity>
          <Text style={styles.verticaltext}>Call no: {item.Callno}</Text>
        </TouchableOpacity>
        
        <TouchableOpacity>
          <Text style={styles.verticaltext}>{item.Name}</Text>
        </TouchableOpacity>       
        <Text style={styles.subtitle}>{item.Mobile}</Text>
        <Text style={styles.subtitle}>Father's name : {item.fatherName}</Text>
        <Text style={styles.subtitle}>Location : {item.Location}</Text>
        <Text style={styles.subtitle}>Addhar no : {item.addharNo}</Text>
        <Text style={styles.subtitle}>D.O.B : {item.DOB}</Text>
        <Text style={styles.subtitle}>No of Animals : {item.noOfAnimals}</Text>



        <Text style={styles.subtitle}>Address : {item.Address}</Text>
        <Text style={styles.subtitle}>Email : {item.Email}</Text>
        <Text style={styles.subtitle}>Specie : {item.Specie}</Text>
        <Text style={styles.subtitle}>Problem : {item.problem}</Text>
        <Text style={styles.subtitle}>Level of problem : {item.Level}</Text>
        <Text style={{
      color: 'black',
      fontWeight:'bold',
      paddingStart: 5,
      marginTop: 7,
    }}>Status : {item.status}</Text>




        
       
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
       paddingTop: 300
    },
    input: {
        borderRadius:10,
       margin: 15,
       height: 50,
       borderColor: '#000',
       borderWidth: 1
    },
    submitButton: {
        backgroundColor: '#03a9f4',
        
        marginTop:14,
        
        height: 45,  borderRadius:10,
     },
     submitButtonText:{
         top:10,
         alignSelf:'center',
          fontSize:16,
          color: 'white',
      
     },
    heading: {fontSize: 18, fontWeight: 'bold', marginTop: 12, marginStart: 15},
    flatlist: {marginStart: 17, marginEnd: 12, marginTop: 20},
    viewall: {color: 'grey', marginTop: 12, marginEnd: 15},
    verticaltext: {
      paddingStart: 5,
      marginTop: 7,
  
      fontWeight: 'bold',
      fontSize: 18,
      color: 'black',
    },
    view: {flex: 1, flexDirection: 'column', marginHorizontal: 20, marginTop: 10},
    price: {color: 'grey', paddingStart: 5, marginTop: 5},
    verticalimg: {
      borderRadius: 10,
      height: 100,
      marginHorizontal: 6,
      width: 100,
      resizeMode: 'contain',
    },
    verticalview: {
      flexDirection: 'row',
      height:420,
      justifyContent: 'space-between',
      marginVertical: 8,
      marginHorizontal: 6,
      elevation: 1,
      borderRadius: 0.8,
    },
    horizontalimg: {
      height: 150,
       resizeMode:'contain',
      width: 130,
    },
    subtitle: {
      color: 'black',
      
      paddingStart: 5,
      marginTop: 7,
    },
    icon: {
      fontSize: 26,
      marginTop: 10,
  
      aspectRatio: 1.5,
  
      alignSelf: 'center',
    },
    img: {
      flex: 0.7,
      height: 380,
      width: 400,
    },
    iconcart: {
      height: 22,
      marginTop: 10,
      marginStart: 10,
  
      width: 22,
    },
 })
