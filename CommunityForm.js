import React, { useContext, useState } from 'react';
import { View, TextInput, Button, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { CommunityContext } from './CommunityContext';


const CreateCommunity = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [founder, setFounder] = useState('');
  const [goal, setGoal] = useState('');

  const { updateCommunityData } = useContext(CommunityContext);

  const handleSubmit = () => {
    const communityData = { name, description, founder, goal };
    updateCommunityData(communityData);
    console.log(communityData)
  };
  const SubscribeButton = () => {
    return (
      <TouchableOpacity style={styles.subscribeButton}>
        <Text style={styles.subscribeButtonText}>Subscribe</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View>
      <TextInput style={styles.type}
        placeholder="Name of Community"
        value={name}
        onChangeText={text => setName(text)}
      />

      <TextInput style={styles.type}
        placeholder="Description of Community"
        value={description}
        onChangeText={text => setDescription(text)}
      />

      <TextInput style={styles.type}
        placeholder="Name of Founder"
        value={founder}
        onChangeText={text => setFounder(text)}
      />

      <TextInput style={styles.type}
        placeholder="Goal"
        value={goal}
        onChangeText={text => setGoal(text)}
      />

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CreateCommunity;

const styles = StyleSheet.create({
button:{
  alignItems: 'center',
  justifyContent: 'center',
  paddingVertical: 12,
  paddingHorizontal: 20,
  marginTop:20,
  borderRadius: 2,
  elevation: 4,
  backgroundColor: "#FFDFF6",
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
    //fontWeight: 'bold',
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
    //backgroundColor: "gray",
  },
  subscribeButton: {
    backgroundColor: 'pink',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 10,
  },
    subscribeButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
  
});