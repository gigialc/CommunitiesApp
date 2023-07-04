import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { CommunityContext } from './CommunityContext';

const Page1 = () => {
  const { communities } = useContext(CommunityContext);

  return (
    <View>
      {communities.map((community, index) => (
        <View key={index} style={styles.communidadcontainer}>
          <Text style={styles.comunidadname}>{community.name}</Text>
          <Text style={styles.comunidadinput}>{community.description}</Text>
          <Text style={styles.comunidadinput}>{community.incentives}</Text>          
          <View style={styles.containersubscribe}>
          </View>
        </View>
      ))}
    </View>
  );
};

export default Page1;

const styles = StyleSheet.create({

    comunidadname:{
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 0,
        left:0,
       // marginTop:10,
        //borderRadius: 0,
        fontSize: 25, 
        elevation: 4,
        //backgroundColor: "gray",
        // fontWeight: 'bold',
        color: "black",
    },

    comunidadinput:{
      left:0,
      marginTop:3,
      fontSize: 15, 
      color: "black",
    },

    communidadcontainer:{
        paddingHorizontal: 10,
        //marginTop:0,
        elevation: 0,  
        paddingVertical: 10,
        marginTop: 0,
        width:330,
      
        marginVertical: 5,
      
    },

  

  

});