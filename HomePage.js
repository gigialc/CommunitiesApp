import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { CommunityContext } from './CommunityContext';

const HomePage = () => {
  const { communities, setCurrentPage,currentPage } = useContext(CommunityContext);
  const [clickCount, setClickCount] = useState(0);

  const handleSubscribeClick = () => {
    setClickCount((prevCount) => prevCount + 1);
    setCurrentPage('NewPage');
    
  };

  const subscribeButtonText = clickCount < 3 ? 'enter' : 'subscribe';

  if (!communities || communities.length === 0) {
    return <Text>No communities found.</Text>;
  }

  return (
    <View>
      {communities.map((community, index) => (
        <View key={index} style={styles.communidadcontainer}>
          <Text style={styles.comunidadname}>{community.name}</Text>
          <Text style={styles.comunidadinput}>{community.description}</Text>
          <Text style={styles.comunidadinput}>{community.incentives}</Text>          
          <View style={styles.containersubscribe}>
          <TouchableOpacity onPress={() => handleSubscribeClick('Community')}>
              <Text style={styles.subscribeButtonText}>{subscribeButtonText}</Text>
            </TouchableOpacity>
          </View>
          
        
        
        </View>
      ))}
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
      left:0,
      marginTop:3,
      fontSize: 15, 
      color: "gray",
   
    },

    communidadcontainer:{
        paddingVertical: 10,
        width:330,
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
    },

    //subscribe button
    subscribeButton: {
    paddingVertical: 6,
    width: 119,
    borderRadius: 30,
    backgroundColor: "pink",
    alignSelf: 'flex-end',
    marginTop: 10,
  
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