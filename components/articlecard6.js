// ArticleCard.js in the /components folder
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const ArticleCard6 = () => {
    return (
      <TouchableOpacity style={styles.articleContainer} activeOpacity={0.9}>
        <Image
          source={require('../assets/soramapic.png')} // boby cam picture
          style={styles.articleImage}
        />
        <View style={styles.articleContent}>
          <Text style={styles.articleDate}>PSV X Sorama</Text>
          <Text style={styles.articleTitle}>
            PSV X Sorama - Smart stadium
          </Text>
          <Text style={styles.articleDescription} numberOfLines={3}>
          Smart stadiums use data analytics from an interconnected eco-system to enhance the overall fan experience and improve safety & security.
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
export default ArticleCard6;