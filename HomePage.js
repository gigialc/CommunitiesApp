import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { CommunityContext } from './CommunityContext';

const HomePage = () => {
  const { communityData } = useContext(CommunityContext);

  

  return (
    <View>
      <Text>Name of Community: {communityData.name}</Text>
      <Text>Description: {communityData.description}</Text>
      <Text>Founder: {communityData.founder}</Text>
      <Text>Goal: {communityData.goal}</Text>
    </View>
  );
};

export default HomePage;