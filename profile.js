import { View, StyleSheet, Text, Image, ScrollView } from 'react-native';
import React, { useContext } from 'react';
import { CommunityContext } from './CommunityContext';

const ProfilePage = () => {
  const { communities } = useContext(CommunityContext);

  return (
    <View style={styles.container}>
       <View style={styles.innerContainer}>
      <ScrollView>
        <View>
          <View style={styles.infoBox}>
            <Text style={styles.infoText}>communities created</Text>
            <ScrollView style={styles.communitiesContainer}>
              {communities.map((community, index) => (
                <Text key={index} style={styles.miscomunidades}>
                  {community.name}
                </Text>
              ))}
            </ScrollView>
          </View>
          <View style={styles.infoBox}>
            <Text style={styles.infoText}>communities joined</Text>
          </View>
          <View style={styles.infoBox}>
            <Text style={styles.infoText}>recently viewed</Text>
          </View>
        </View>
      </ScrollView>
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 20,
    marginTop: 100,
    width: '80%', // Adjust the width value as needed
  },
  
  infoBox: {
    backgroundColor: 'pink',
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
  },
  infoText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  communitiesContainer: {
    maxHeight: 150,
  },
  miscomunidades: {
    fontSize: 16,
    color: 'black',
    marginBottom: 5,
  },
});


export default ProfilePage;
