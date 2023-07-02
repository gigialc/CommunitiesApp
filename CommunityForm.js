import React, { useContext, useState } from 'react';
import { View, TextInput, Button, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { CommunityContext } from './CommunityContext';
import Page1 from './Page1';

const CreateCommunity = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [currentPage, setCurrentPage] = useState('Home');

  const { updateCommunityData } = useContext(CommunityContext);

  const handleButtonPress = () => {
    handleSubmit();
    handleNavigation();
  };

  const handleSubmit = () => {
    const communityData = { name, description };
    updateCommunityData(communityData);


  };
  const handleNavigation = (page) => {
    setCurrentPage(page);
  };

  return (
    <View>
      <TextInput style={styles.type}
        placeholder="Name of Community"
        value={name}
        onChangeText={text => setName(text)}
      />

      <TextInput style={styles.type}
        placeholder="What is your mission?"
        value={description}
        onChangeText={text => setDescription(text)}
      />

      {/* <TextInput style={styles.type}
        placeholder="Name of Founder"
        value={founder}
        onChangeText={text => setFounder(text)}
      />

      <TextInput style={styles.type}
        placeholder="Goal"
        value={goal}
        onChangeText={text => setGoal(text)}
      /> */}

      <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>

      {currentPage === 'Page1' && (
            <View style={styles.Page1}>
              <Page1 />
            </View>
          )}
    </View>

    
  );
};

export default CreateCommunity;

const styles = StyleSheet.create({
button:{
  alignItems: 'center',
  paddingVertical: 8,
  marginTop:20,
  borderRadius: 30,
  elevation: 4,
  backgroundColor: "#FFDFF6",
  width: 100,
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
    
  },
  type:{

    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    left:0,
    marginTop:20,
    borderRadius: 1,
    fontSize: 17, 
    elevation: 0,
    color: "black",
  },
  Page1:{
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    left:0,
  },

  
});