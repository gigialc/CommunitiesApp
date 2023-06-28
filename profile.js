import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const ProfilePage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.infoBox}>
        <Text style={styles.infoText}>Name: John Doe</Text>
      </View>
      <View style={styles.infoBox}>
        <Text style={styles.infoText}>Age: 25</Text>
      </View>
      <View style={styles.infoBox}>
        <Text style={styles.infoText}>Location: New York</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:40,
  },
  infoBox: {
    width: 350,
    height: 150,
    borderRadius: 50,
    backgroundColor: '#FFDFF6',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  infoText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',

  },
});

export default ProfilePage;
