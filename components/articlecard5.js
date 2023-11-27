// ArticleCard.js in the /components folder
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const ArticleCard5 = () => {
    return (
      <TouchableOpacity style={styles.articleContainer} activeOpacity={0.9}>
        <Image
          source={require('../assets/quizpsv.png')} // boby cam picture
          style={styles.articleImage}
        />
        <View style={styles.articleContent}>
          <Text style={styles.articleDate}>PSV quiz</Text>
          <Text style={styles.articleTitle}>
            Quiz game for PSV fans
          </Text>
          <Text style={styles.articleDescription} numberOfLines={3}>
          Test your PSV knowledge with our engaging PSV quiz! 
          Challenge yourself and other fans with questions about the team's history, players, and memorable matches, 
          and see how much you truly know about your favorite club.
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
      borderRadius: 10,
      alignSelf: 'center', // Center button horizontally
    },
    buttonText: {
      color: 'white',
      textAlign: 'center',
      fontWeight: 'bold',
    },
  });
export default ArticleCard5;
