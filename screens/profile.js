import React from 'react';
import { View, ImageBackground, StyleSheet } from 'react-native';

const Profile = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/homebg.png')} style={styles.backgroundImage}>

      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    position: 'absolute', 
  },
});


export default Profile;


