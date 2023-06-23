import React, { useContext, useState } from 'react';
import { View, TextInput, Button } from 'react-native';
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

  return (
    <View>
      <TextInput
        placeholder="Name of Community"
        value={name}
        onChangeText={text => setName(text)}
      />

      <TextInput
        placeholder="Description of Community"
        value={description}
        onChangeText={text => setDescription(text)}
      />

      <TextInput
        placeholder="Name of Founder"
        value={founder}
        onChangeText={text => setFounder(text)}
      />

      <TextInput
        placeholder="Goal"
        value={goal}
        onChangeText={text => setGoal(text)}
      />

      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

export default CreateCommunity;