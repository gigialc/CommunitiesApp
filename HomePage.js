
import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { CommunityContext } from './CommunityContext';

const HomePage = () => {
  const { communityData } = useContext(CommunityContext);
  const [clickCount, setClickCount] = useState(0);

  const handleSubscribeClick = () => {
    setClickCount((prevCount) => prevCount + 1);
  };

  const subscribeButtonText = clickCount < 3 ? 'View' : 'Subscribe';

  return (
    <View style={styles.communidadcontainer}>
      <Text style={styles.comunidadname}>Name of Community: {communityData.name}</Text>
      <Text style={styles.comunidadinput}>Description: {communityData.description}</Text>
      <Text style={styles.comunidadinput}>Founder: {communityData.founder}</Text>
      <Text style={styles.comunidadinput}>Goal: {communityData.goal}</Text>

      <TouchableOpacity style={styles.subscribeButton} onPress={handleSubscribeClick}>
        <Text style={styles.subscribeButtonText}>{subscribeButtonText}</Text>
      </TouchableOpacity>
    </View>
  );
};




export default HomePage;


const styles = StyleSheet.create({

    comunidadname:{
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 0,
        left:0,
       // marginTop:10,
        //borderRadius: 0,
        fontSize: 19, 
        elevation: 4,
        //backgroundColor: "gray",
        fontWeight: 'bold',
        color: "black",
    },
    comunidadinput:{
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 2,
      left:0,
      marginTop:10,
      borderRadius: 1,
      fontSize: 15, 
      elevation: 4,
      //backgroundColor: "gray",
      color: "gray",
    },
    communidadcontainer:{
        paddingHorizontal: 20,
        //marginTop:0,
        borderRadius: 50,
        elevation: 0,  
        paddingVertical: 20,
    
    },

    //subscribe button
  subscribeButton: {
    alignItems: 'center',
  justifyContent: 'center',
  paddingVertical: 12,
  paddingHorizontal: 20,
  marginTop:25,
  borderRadius: 2,
  elevation: 4,
  backgroundColor: "#FFDFF6",
  },
    subscribeButtonText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },

    
});