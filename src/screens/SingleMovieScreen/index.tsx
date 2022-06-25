import {useRoute} from '@react-navigation/native';
import React from 'react';
import {Text, View, Image, TouchableOpacity, ScrollView} from 'react-native';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {useSelector} from 'react-redux';
import Movies from '../../redux/Movies';
import styles from './styles';

export const SingleMovieScreen = () => {
  const route = useRoute<any>();
  const id = route.params?.id;
  const currentMovie = useSelector(state =>
    Movies.selectors.selectById(state, id),
  );

  return (
    <ScrollView>
      <Image
        style={styles.imageContainer}
        source={{
          uri: `https://image.tmdb.org/t/p/w500/${currentMovie?.poster_path}`,
        }}
      />
      <View style={styles.textContainer}>
        <Text numberOfLines={3} style={styles.titleStyle}>
          {currentMovie?.title} ({currentMovie?.original_language}) (
          {currentMovie?.vote_average} &#9733;)
        </Text>
        <Text style={styles.overviewStyle}>{currentMovie?.overview}</Text>
        <Text style={styles.releaseDateStyle}>
          {currentMovie?.release_date}
        </Text>
      </View>
    </ScrollView>
  );
};
