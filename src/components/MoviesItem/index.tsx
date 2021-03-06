import {useNavigation, useRoute} from '@react-navigation/native';
import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {useSelector} from 'react-redux';
import Movies from '../../redux/Movies';
import styles from './styles';

export const MoviesItem = ({item}) => {
  const {navigate} = useNavigation();
  const currentMovie = useSelector(state =>
    Movies.selectors.selectById(state, item),
  );

  return (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => navigate('singleMovie', {id: item})}>
      <Image
        style={styles.imageContainer}
        source={{
          uri: `https://image.tmdb.org/t/p/w500/${currentMovie?.poster_path}`,
        }}
      />
      <View style={styles.textContainer}>
        <Text numberOfLines={3} style={styles.titleStyle}>
          {currentMovie?.title}
        </Text>
        <Text style={styles.overviewStyle} numberOfLines={2}>
          {currentMovie?.overview}
        </Text>
        <Text style={styles.releaseDateStyle}>
          {currentMovie?.release_date}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
