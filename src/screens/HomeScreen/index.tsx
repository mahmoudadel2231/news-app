import {unwrapResult} from '@reduxjs/toolkit';
import React, {useCallback, useEffect, useState} from 'react';
import {
  Appearance,
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {useDispatch, useSelector} from 'react-redux';
import {ListEmptyComponent} from '../../components/ListEmptyComponent';
import {MoviesItem} from '../../components/MoviesItem';
import Movies from '../../redux/Movies';
import {useLoadingSelector} from '../../redux/selectors';
import useKeyTranslation from '../../translations/useKeyTranslations';
import styles from './styles';

const HomeScreen = () => {
  const dispatch = useDispatch<any>();
  const [page, setPage] = useState(1);
  const [query, setQuey] = useState(undefined);

  const translate = useKeyTranslation('common');
  console.log(Appearance.getColorScheme());
  let colorScheme = useColorScheme();
  console.log('colorScheme', colorScheme);

  useEffect(() => {
    fetchMovies({refresh: true, query, page});
  }, []);

  const fetchMovies = ({
    refresh,
    page,
    query,
  }: {
    refresh?: boolean;
    page?: number;
    query?: string;
  }) => {
    if (query && query !== undefined) {
      dispatch(Movies.thunks.searchMovies({page, refresh, query}))
        .then(unwrapResult)
        .then(res => {
          setPage(res.page);
        });
    } else {
      dispatch(Movies.thunks.fetchMoviesList({page, refresh}))
        .then(unwrapResult)
        .then(res => {
          setPage(res.page);
        });
    }
  };

  const currentMovies =
    useSelector((state: any) => state.movies.currentMovies) || {};
  const isLoading = useLoadingSelector(Movies.thunks.fetchMoviesList);

  return (
    <View style={styles.homeScreenContainer}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.textInputStyle}
          onChangeText={setQuey}
          value={query}
          placeholder={translate('search_placeholder')}
        />
        <TouchableOpacity
          style={styles.searchButton}
          onPress={() => {
            fetchMovies({refresh: true, query, page});
          }}>
          <Text> {translate('search')}</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={currentMovies}
        renderItem={({item}) => {
          return <MoviesItem item={item} />;
        }}
        numColumns={1}
        style={{
          flex: 1,
          paddingTop: heightPercentageToDP(0),
          paddingHorizontal: widthPercentageToDP(5),
        }}
        ListHeaderComponentStyle={{}}
        ListEmptyComponent={() => ListEmptyComponent()}
        contentContainerStyle={{paddingBottom: '10%'}}
        indicatorStyle="white"
        refreshing={isLoading}
        onRefresh={() => fetchMovies({refresh: true, page: 1})}
        onEndReachedThreshold={0.5}
        onEndReached={() => fetchMovies({page: page + 1})}
      />
    </View>
  );
};

export default HomeScreen as any;
