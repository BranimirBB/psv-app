import React from 'react';
import { ImageBackground, ScrollView, StyleSheet, View } from 'react-native';
import ArticleCard from '../components/articlecard'; // Article card 1
import ArticleCard2 from '../components/articlecard2'; // Article card 2
import ArticleCard3 from '../components/articlecard3'; // Article card 3
import ArticleCard4 from '../components/articlecard4'; // Article card 4
import ArticleCard5 from '../components/articlecard5'; // Article card 5
import ArticleCard6 from '../components/articlecard6'; // Article card 6
import ArticleCard7 from '../components/articlecard7';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/homebg.png')} style={styles.backgroundImage}>
        <ScrollView style={styles.scrollViewContainer}>
          <View style={styles.contentContainer}>
            <ArticleCard />
            <ArticleCard2 />
            <ArticleCard3 />
            <ArticleCard4 />
            <ArticleCard5 />
            <ArticleCard6 />
            <ArticleCard7 />
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
  scrollViewContainer: {
    flex: 1,
  },
  contentContainer: {
    paddingTop: 30, 
    paddingBottom: 100,
  },
});

export default HomeScreen;