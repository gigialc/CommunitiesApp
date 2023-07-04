import Page1 from './Page1';
import { ScrollView } from 'react-native';
import {  CommunityProvider } from './CommunityContext';
import React, { Profiler, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, SafeAreaView, Button } from 'react-native';
import HomePage from './HomePage';
import CreateCommunity from './CommunityForm';
import ProfilePage from './profile';

export default function App() {
  const [currentPage, setCurrentPage] = useState('Home');
  const [communityData, setCommunityData] = useState(null);

  const handleNavigation = (page) => {
     setCurrentPage(page);
   };

  const updateCommunityData = (data) => {
    setCommunityData(data);
  };


  return (
   
    <CommunityProvider>
      <View style={styles.container}>
    
      <ScrollView>
        {/* App Content */}
        <View style={styles.content}>
          {currentPage === 'Home' && (
            <View style={styles.homeContainer}>
              <Image
                //source={require('./assets/user.png')} // Adjust the path to your logo image
                //style={styles.userImage}
              />
              <Text style={styles.homeName}></Text>
              <View style={styles.topline} />
              {/* Add more UI components or content here */}
              <HomePage setCurrentPage={setCurrentPage} />
              {/* subscribe button */}
            
            </View>
          )}
          {currentPage === 'Create' && (
            <View style={styles.createContainer}>
              <Text style={styles.createText}>Create your community here!</Text>
              
              {/* Add more UI components or content here */}
              <CreateCommunity setCurrentPage={setCurrentPage} />


            </View>
          )}
          {currentPage === 'Profile' && (
            <View style={styles.profileContainer}>
              <ProfilePage />
            </View>
          )}

          {/* New pages */}
          {currentPage === 'Page1' && (
           <View style={styles.pageContainer}>
          
             </View>
              )}

          {currentPage === 'Page2' && (
            <View style={styles.pageContainer}>
              <Page2 />
            </View>
          )}
      {currentPage === 'Page3' && (
            <View style={styles.pageContainer}>
              <Page3 />
            </View>
          )}
     </View>
   
        <Image
          source={require('./assets/logo.png')} // Replace with the actual path to your logo image
          style={styles.logo}
        />
         </ScrollView>
        {/* Horizontal Navigation Bar */}
      
        <View style={styles.bottomNavBar}>
           {/* Background Rectangle */}
           <Image
            source={require('./assets/nav.png')} // Replace with the actual path to your logo image
            style={styles.nav}
          />
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
    </CommunityProvider>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  topline:{
    borderBottomWidth: 1,
    borderBottomColor: 'green',
    marginVertical: 0,
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
    height: 0,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    position: 'absolute',
    bottom: 100,
    left: 0,
    right: 0,
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
    paddingBottom: 10,
  },
  
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
  nav:{
    position: 'absolute',
    height: 100,
    width: 1000,
    bottom:-100,
    backgroundColor: '#0000ff',
  },

});

