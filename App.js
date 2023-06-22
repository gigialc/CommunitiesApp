
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

export default function App() {
  const [currentPage, setCurrentPage] = useState('Home');

  const handleNavigation = (page) => {
    setCurrentPage(page);
  };

  return (
    <View style={styles.container}>
      {/* App Content */}
      <View style={styles.content}>
        {currentPage === 'Home' && <Text>Welcome to Destig Femme</Text>}
      {currentPage === 'Profile' && (
          <View style={styles.profileContainer}>
            <View style={styles.profileInfo}>
              <Image
                source={require('./assets/user.png')} // Adjust the path to your logo image
                style={styles.userImage}
              />
              <Text style={styles.profileName}>Georgina Alcaraz</Text>
            </View>
            <Text style={styles.profileText}>Welcome to your Profile Page</Text>
            {/* Add more UI components or content here */}
          </View>
        )}
        {currentPage === 'Create' && <Text>Welcome to Settings Page</Text>}
      </View>

      <Image
      source={require('./assets/logo.png')} // Replace with the actual path to your logo image
      style={styles.logo}
        />

      {/* Horizontal Navigation Bar */}
      <View style={styles.bottomNavBar}>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => handleNavigation('Home')}
        >
          <Text style={currentPage === 'Home' ? styles.activeNavItem : styles.navItemText}>
            Home
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => handleNavigation('Profile')}
        >
          <Text style={currentPage === 'Profile' ? styles.activeNavItem : styles.navItemText}>
            Profile
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => handleNavigation('Create')}
        >
          <Text style={currentPage === 'Create' ? styles.activeNavItem : styles.navItemText}>
            Create
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );



  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'Arial', //
    fontSize: 20,
    fontWeight: 'bold',
  },
  bottomNavBar: {
    flexDirection: 'row',
    height: 56,
    backgroundColor: '#fff',
  },
  navItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  navItemText: {
    color: 'black',
  },
  activeNavItem: {
    color: '#C57EB1',
    fontWeight: 'bold',
  },
  logo: {
    position: 'absolute',
    top: 1, // Adjust the value to position the logo vertically
    left: 1, // Adjust the value to position the logo horizontally
    width: 150, // Adjust the value to set the desired width of the logo
    height: 150, 
  },
 
 userImage: {
  position: 'absolute',
    top: 20,
  left: 20,
  width: 50,
  height: 50,
  resizeMode: 'cover',
},

});
