import {unwrapResult} from '@reduxjs/toolkit';
import React, {useCallback, useEffect, useState} from 'react';
import {Appearance, FlatList, Text, useColorScheme, View} from 'react-native';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {useDispatch, useSelector} from 'react-redux';
import {ListEmptyComponent} from '../../components/ListEmptyComponent';
import {MoviesItem} from '../../components/MoviesItem';
import Movies from '../../redux/Movies';
import {useLoadingSelector} from '../../redux/selectors';
import styles from './styles';

const HomeScreen = () => {
  const dispatch = useDispatch<any>();
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchMovies({});
  }, []);

  const fetchMovies = useCallback(({refresh, page}) => {
    dispatch(Movies.thunks.fetchMoviesList({page, refresh}))
      .then(unwrapResult)
      .then(res => {
        setPage(res.page);
      });
  }, []);

  const currentMovies =
    useSelector((state: any) => state.movies.currentMovies) || {};
  const isLoading = useLoadingSelector(Movies.thunks.fetchMoviesList);

  return (
    <View style={styles.homeScreenContainer}>
      <FlatList
        data={currentMovies}
        renderItem={({item}) => {
          return <MoviesItem item={item} />;
        }}
        numColumns={1}
        style={{
          flex: 1,
          paddingTop: heightPercentageToDP(2),
          paddingHorizontal: widthPercentageToDP(5),
        }}
        ListHeaderComponentStyle={styles.ListHeaderComponent}
        ListEmptyComponent={() =>
          ListEmptyComponent({title: 'No Movies Avaialbe'})
        }
        contentContainerStyle={{paddingBottom: '10%'}}
        indicatorStyle="white"
        refreshing={isLoading}
        onRefresh={() => fetchMovies({refresh: true})}
        onEndReachedThreshold={0.5}
        onEndReached={() => fetchMovies({page: page + 1})}
      />
    </View>
  );
};

export default HomeScreen as any;
