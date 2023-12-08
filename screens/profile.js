import React from "react";
import { View, Image, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';

const Profile = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={require("../assets/homebg.png")} style={styles.backgroundImage}>
        <View style={styles.profileSection}>
          <Image source={require("../assets/victorimage.jpeg")} style={styles.profileImage}/>
          <Text style={styles.nameText}>John Doe</Text>
          <Text style={styles.detailText}>Email: johndoe@example.com</Text>
          <Text style={styles.detailText}>Phone: 123-456-7890</Text>
          <Text style={styles.detailText}>Focus on: AR, VR</Text>
          <View style={styles.buttonsWrapper}>
          <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Focus tags</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Settings</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Help</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Logout</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    justifyContent: "center", // Aligns the child views (profile section) in the center of the screen vertically
  },
  profileSection: {
    alignItems: "center", // Aligns child views in the center of the profile section horizontally
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    borderRadius: 10,
    padding: 50,
    marginHorizontal: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  nameText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  detailText: {
    fontSize: 19,
    marginBottom: 20,
    marginTop: 5,
    marginHorizontal: -10,
    fontWeight: "600",
  },
  buttonsWrapper: {
    marginTop: 10, // Adjust the space as per design need
  },
  button: {
    marginTop: 12,
      backgroundColor: 'black',
      paddingVertical: 10,
      paddingHorizontal: 80,
      borderRadius: 10,
      alignSelf: 'center', 
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
  },
});

export default Profile;
