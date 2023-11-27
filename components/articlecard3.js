// ArticleCard.js in the /components folder
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const ArticleCard3 = () => {
    return (
      <TouchableOpacity style={styles.articleContainer} activeOpacity={0.9}>
        <Image
          source={require('../assets/bodycam.png')} // boby cam picture
          style={styles.articleImage}
        />
        <View style={styles.articleContent}>
          <Text style={styles.articleDate}>The NEW Bodycam - directly from the field!</Text>
          <Text style={styles.articleTitle}>
            Bodycam from a PSV player
          </Text>
          <Text style={styles.articleDescription} numberOfLines={3}>
          Get up close with the on-field action through our player body cam feature during PSV matches. 
          Feel the excitement and intensity as if you're part of the game, witnessing every move, pass, and goal from a player's perspective. This immersive experience offers fans a unique and thrilling viewpoint, bringing the energy of the match to life in a whole new way.
          </Text>
  
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Test it now!</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    );
  };

  const styles = StyleSheet.create({
    articleContainer: {
      overflow: "hidden",
      borderRadius: 12,
      backgroundColor: "#F0F0F0",
      marginTop: 30,
      margin: 20,
      shadowColor: "#000",
      shadowOpacity: 0.1,
      shadowRadius: 4,
      shadowOffset: { width: 0, height: 2 },
      elevation: 3, // Only for Android
    },
    articleImage: {
      height: 224, 
      width: "100%",
      resizeMode: "cover",
    },
    articleContent: {
      padding: 16, 
    },
    articleDate: {
      color: "#6b7280", 
      fontSize: 10, 
      marginBottom: 4,
    },
    articleTitle: {
      color: "#111827", 
      fontSize: 18, 
      fontWeight: "bold",
      marginTop: 2,
    },
    articleDescription: {
      color: "#6b7280", 
      fontSize: 14, 
      marginTop: 8,
    },
    button: {
      marginTop: 12,
      backgroundColor: 'red',
      paddingVertical: 10,
      paddingHorizontal: 80,
      borderRadius: 20,
      alignSelf: 'center', // Center button horizontally
    },
    buttonText: {
      color: 'white',
      textAlign: 'center',
      fontWeight: 'bold',
    },
  });
export default ArticleCard3;
