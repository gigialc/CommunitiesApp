import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { CommunityContext } from './CommunityContext';

const HomePage = () => {
  const { communityData } = useContext(CommunityContext);

  

  return (
    <View style={styles.communidadcontainer}>
      <Text style={styles.comunidadname}>Name of Community: {communityData.name}</Text>
      <Text style={styles.comunidadinput}>Description: {communityData.description}</Text>
      <Text style={styles.comunidadinput}>Founder: {communityData.founder}</Text>
      <Text style={styles.comunidadinput}>Goal: {communityData.goal}</Text>
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
        backgroundColor: "#FFDFF6",
        paddingVertical: 20,
        
    
    }
    
});