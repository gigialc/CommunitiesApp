
import {  CommunityProvider } from './CommunityContext';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, SafeAreaView, Button } from 'react-native';
import HomePage from './HomePage';
import CreateCommunity from './CommunityForm';


export default function App() {
  const [currentPage, setCurrentPage] = useState('Home');

  const handleNavigation = (page) => {
    setCurrentPage(page);
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
        
              <View style={styles.line} />
            
            {/* Add more UI components or content here */}    
          
            <CommunityProvider >
             <HomePage/>
            </CommunityProvider>

         {/* subscribe button */}
        
            <View style={styles.line} />
        
        </View>
      )}
        
        
      {currentPage === 'Create' && (
          <View style={styles.createContainer}>
            <Text style={styles.createText}>Create your community here!</Text>
            <View style={styles.line} />
           
            {/* Add more UI components or content here */}   
            <CommunityProvider>
            <CreateCommunity/>
              </CommunityProvider> 

          </View>
        )}

        {currentPage === 'Profile' && <Text>Welcome to your Profile Page</Text>}
      </View>

      <Image
      source={require('./assets/logo.png')} // Replace with the actual path to your logo image
      style={styles.logo}
        />

      {/* Horizontal Navigation Bar */}
      <View style={styles.bottomNavBar}>
      {/* profile page icon */}
      <TouchableOpacity
          style={styles.navItem}
          onPress={() => handleNavigation('Profile')}
        >
            <Image
       source={require('./assets/profile.png')} // Replace with the actual path to your logo image
       style={styles.profileicon}
      />
        </TouchableOpacity>

        {/* home page icon */}
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => handleNavigation('Home')}
        >
         <Image
        source={require('./assets/home.png')} // Replace with the actual path to your logo image
        style={styles.homeicon}
      />
        </TouchableOpacity>
       
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => handleNavigation('Create')}
        >
           <Image
        source={require('./assets/post.png')} // Replace with the actual path to your logo image
        style={styles.posticon}
      />
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
    height: 90,
    backgroundColor: '#fff',
    justifyContent: 'space-evenly',
    marginHorizontal: 50,
  },
  navItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 2,
  },
  
  activeNavItem: {
    color: '#C57EB1',
    fontWeight: 'bold',
    marginHorizontal: 2,
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

  CreateName:{
    top: 0, // Adjust the value to position the logo vertically
    fontSize: 100,

  },
  createContainer:{
    width:300 ,
    position: "absolute",
    top:120,
    left: 30, // Adjust the value to position the logo horizontally
  },
  createText:{
    top:10,
    fontSize: 23,
    color: 'black',
    paddingBottom: 30,

  },
  // profileCard: {
  //   backgroundColor: 'pink',
  //   borderRadius: 80,
  //   padding: 100,
  //   alignItems: 'left',
  // },
  profileName: {
    position: 'absolute',
    top: 10, // Adjust the value to position the logo vertically
    left: 1, // Adju2st the value to position the logo horizontally
    width: 50, // Adjust the value to set the desired width of the logo
    height: 50,
    fontSize: 50,
  },
 
  homeText:{
    top:0,
    fontSize: 23,
    color: 'black',
    paddingBottom: 30,
    
  },
  homeContainer:{
    width:300 ,
    position: "absolute",
    top:110,
    left: 30, // Adjust the value to position the logo horizontally
    
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#29746B',
  },

  
  navItemText:{
    fontWeight: 'bold',
    marginBottom:5,
    fontSize:15,
  },
  activeNavItem:{
    fontSize:20,
    fontWeight: 'bold',
    marginBottom:5,
    color: "#eb7fe0",
  },
  homeicon:{
    position: 'absolute',
    top: 1, // Adjust the value to position the user image vertically
    left: 1, // Adjust the value to position the user image horizontally
    width: 100,
    height: 100,
    resizeMode: 'cover',
  },
  profileicon:{
    position: 'absolute',
  top: 1, // Adjust the value to position the user image vertically
  left: 1, // Adjust the value to position the user image horizontally
  width: 100,
  height: 100,
  resizeMode: 'cover',
  },
  posticon:{
    position: 'absolute',
  top: 1, // Adjust the value to position the user image vertically
  left: 1, // Adjust the value to position the user image horizontally
  width: 100,
  height: 100,
  resizeMode: 'cover',
  },

});

