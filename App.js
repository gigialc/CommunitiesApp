
import {  CommunityProvider } from './CommunityContext';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import HomePage from './HomePage';
import CreateCommunity from './CommunityForm';


export default function App() {
  const [currentPage, setCurrentPage] = useState('Home');

  const handleNavigation = (page) => {
    setCurrentPage(page);
  };
  const communityData = {
    name: 'Community Name',
    description: 'Community Description',
    founder: 'Founder Name',
    goal: 'Community Goal',
  };

  return (
    <View style={styles.container}>
      {/* App Content */}

      <View style={styles.content}>
      {currentPage === 'Home' && (
          <View style={styles.homeContainer}>
           
             <Image
                //source={require('./assets/user.png')} // Adjust the path to your logo image
                //style={styles.userImage}
              />
              <Text style={styles.homeName}></Text>
            
            <Text style={styles.homeText}>Welcome to your Home Page</Text>
            {/* Add more UI components or content here */}    
          
            <CommunityProvider initialData={communityData}>
             <HomePage/>
              <CreateCommunity/>
            </CommunityProvider>
          
        
        </View>
      )}
        
        
      {currentPage === 'Profile' && (
          <View style={styles.profileContainer}>
            
             <Image
                //source={require('./assets/user.png')} // Adjust the path to your logo image
                //style={styles.userImage}
              />
              <Text style={styles.profileName}></Text>
            <Text style={styles.profileText}>Welcome to your Profile Page</Text>
            {/* Add more UI components or content here */}   
            <CommunityProvider>
            
            <CreateCommunity/>
              </CommunityProvider> 
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
  top: 1, // Adjust the value to position the user image vertically
  left: 1, // Adjust the value to position the user image horizontally
  width: 50,
  height: 50,
  resizeMode: 'cover',
  },

  profileName:{
    position: 'absolute',
    top: 10, // Adjust the value to position the logo vertically
    left: 1, // Adjust the value to position the logo horizontally
    width: 50, // Adjust the value to set the desired width of the logo
    height: 50,
    fontSize: 50,

  }
  

});

