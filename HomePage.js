
import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { CommunityContext } from './CommunityContext';

const HomePage = () => {
  const { communityData } = useContext(CommunityContext);
  const [clickCount, setClickCount] = useState(0);

  const handleSubscribeClick = () => {
    setClickCount((prevCount) => prevCount + 1);
  };

  const subscribeButtonText = clickCount < 3 ? 'enter' : 'subscribe';

  if (!communityData) {
    return <Text>Loading...</Text>; // Display a loading message or any other component
  }
  
  return (
    <View style={styles.communidadcontainer}>
      {communityData && (
        <>
      <Text style={styles.comunidadname}>{communityData.name}</Text>
      <Text style={styles.comunidadinput}>{communityData.description}</Text>
      </>
      )}
      <View style={styles.containersubscribe}>
        <Image source={require('./assets/members.png')} style={styles.membersimage} />
        <TouchableOpacity style={styles.subscribeButton} onPress={handleSubscribeClick}>
          <Text style={styles.subscribeButtonText}>{subscribeButtonText}</Text>
        </TouchableOpacity>
        
      </View>

      {/* number of subscribers  */}
       <Text style={styles.amount}>1242 </Text>

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
      // alignItems: 'center',
      // justifyContent: 'center',
      left:0,
      marginTop:3,
      fontSize: 15, 
      //backgroundColor: "gray",
      color: "black",
    },

    communidadcontainer:{
        paddingHorizontal: 10,
        //marginTop:0,
        elevation: 0,  
        paddingVertical: 10,
        marginTop: 0,
      
    },

    //subscribe button
  subscribeButton: {
    paddingVertical: 8,
    width: 119,
    borderRadius: 30,
    backgroundColor: "#FFDFF6",
    alignSelf: 'flex-end',
  
  },

  subscribeButtonText: {
    color: 'black',
    fontWeight: '',
    fontSize: 16,
    textAlign: 'center', 
   
  },

  membersimage:{
    height: 110, // Adjust the height of the image
    width: 70,
    marginTop: -25,
  // Adjust the width of the image
  },

  containersubscribe:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  amount:{
   marginLeft: 12,
   marginTop: -25,
   fontSize: 20,
  },

});