// Nav.js in the /components folder

import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

const Nav = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.navContainer}>
      <TouchableOpacity
        style={styles.navButton}
        onPress={() => navigation.navigate("Home")}
      >
        <Ionicons name="home-outline" size={30} color="#62000D" />
        <Text style={styles.navText}>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.navButton}
        onPress={() => navigation.navigate("AllModules")}
      >
        <Ionicons name="grid-outline" size={30} color="#62000D" />
        <Text style={styles.navText}>All Modules</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.navButton}
        onPress={() => navigation.navigate("Feedback")}
      >
        <Ionicons name="chatbubble-outline" size={30} color="#62000D" />
        <Text style={styles.navText}>Feedback</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.navButton}
        onPress={() => navigation.navigate("Profile")}
      >
        <Ionicons name="person-outline" size={30} color="#62000D" />
        <Text style={styles.navText}>Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  navContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingVertical: 10,
    paddingBottom: 25, // Bottom padding
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: "#FFFDFD",
    shadowColor: "#DD1B25",
    shadowOffset: {
      width: 0,
      height: -4, // Shadow on the top edge
    },
    shadowOpacity: 5, 
    shadowRadius: 5,
    elevation: 5, // for Android
  },

  navButton: {
    alignItems: "center",
    justifyContent: "center",
  },
  navText: {
    color: "#DD1B25",
    fontSize: 12, 
  },

});

export default Nav;
