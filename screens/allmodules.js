import React, { useState } from 'react';
import { View, Text, ScrollView, Image, ImageBackground, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons'; // Assuming you're using Expo

const AllModules = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Data structure for grid items
  const gridData = [
    { label: 'AR Experience', description: 'Developed by Dutch Rose Company', image: require('../assets/drs.jpeg') },
    { label: 'Smart Stadium', description: 'Developed by Sorama', image: require('../assets/soramalogo.png') },
    { label: 'VR Experience', description: 'Developed by Dutch Rose Company', image: require('../assets/drs.jpeg') },
    { label: 'POV bodycam', description: 'Developed by Fontys', image: require('../assets/fontys.jpeg') },
    { label: 'Betting games', description: 'Developed by TOTO', image: require('../assets/toto.png') },
    { label: 'PSV Quiz game', description: 'Developed by Fontys', image: require('../assets/fontys.jpeg') },
    { label: 'PSV Christmas ', description: 'Developed by PSV itself', image: require('../assets/psvlg.png') },
    // ... all grid items here ...
  ];

  const filterGridItems = () => {
    return gridData
      .filter(item => 
        item.label.toLowerCase().includes(searchTerm.toLowerCase()))
      .map((item, index) => (
        <View style={styles.gridItem} key={index}>
          <View style={styles.textContainer}>
            <Text style={styles.gridLabel}>{item.label}</Text>
            <Text style={styles.descriptionText}>{item.description}</Text>
          </View>
          <Image source={item.image} style={styles.gridImage} />
        </View>
      ));
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/homebg.png')} style={styles.backgroundImage}>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search..."
            value={searchTerm}
            onChangeText={setSearchTerm}
          />
          <TouchableOpacity
            style={styles.searchButton}
            onPress={() => console.log('Search button pressed')} // Add search functionality if needed
          >
            <Feather name="search" size={25} color="white" />
          </TouchableOpacity>
        </View>
        <ScrollView style={styles.scrollView}>
          <View style={styles.gridContainer}>
            {filterGridItems()}
          </View>
        </ScrollView>
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
    position: 'absolute', // Ensure background image covers the entire screen
  },
  scrollView: {
    flex: 1,
  },
  gridContainer: {
    alignItems: 'center',
    marginTop: 0,
    paddingTop: 10,
    paddingBottom: 100,
  },
  gridItem: {
    flexDirection: 'row',
    width: '90%',
    height: 100,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 10,
    marginVertical: 8,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  gridLabel: {
    fontSize: 24,
    fontWeight: 'bold',
    flex: 1,
  },
  gridImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start', // Align text to the left
    padding: 10,
  },
  descriptionText: {
    fontSize: 14, // Smaller font size for the description
    color: '#62000D', // You can adjust the color
  },
  
  // Search bar
  searchContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 0,
    alignItems: 'center',
    paddingTop: 60,
    paddingBottom: 10,
  },
  searchInput: {
    flex: 1,
    height: 45,
    borderColor: '#62000D',
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    marginRight: 10,
    backgroundColor: 'white',
  },
  searchButton: {
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  // Add or adjust styles as needed
});

export default AllModules;
