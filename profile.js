import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';

const ProfilePage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('./profile.png')}
          style={styles.profileImage}
        />
        <Text style={styles.username}>John Doe</Text> {/* Replace with the user's username */}
      </View>
      <View>
        <View style={styles.infoBox}>
          <Text style={styles.infoText}>communities created</Text>
        </View>
        <View style={styles.infoBox}>
          <Text style={styles.infoText}>communities joined</Text>
        </View>
        <View style={styles.infoBox}>
          <Text style={styles.infoText}>recently viewed</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  username: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
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
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    position: 'absolute',
    top: 20,
    left: 20,
  },
});

export default ProfilePage;
