import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import firebase from 'firebase/app';
import 'firebase/auth';

const LoginPage = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = async () => {
    try {
      const authProvider = new firebase.auth.GoogleAuthProvider();
      await firebase.auth().signInWithPopup(authProvider);
      setIsAuthenticated(true);
    } catch (error) {
      console.error(error);
    }
  };

  const renderLogin = () => (
    <View style={styles.container}>
      <Text style={styles.title}>Login Page</Text>
      <Button title="Login with Google" onPress={handleLogin} />
    </View>
  );

  if (!isAuthenticated) {
    return renderLogin();
  }

  // Render the main app content if authenticated
  return (
    <View>
      <Text>Welcome, authenticated user!</Text>
      {/* Add your app content here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
});

export default LoginPage;
