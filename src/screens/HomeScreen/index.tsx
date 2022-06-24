import React, { useEffect } from "react";
import { Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import Movies from "../../redux/Movies";
import styles from "./styles";

const HomeScreen = () => {
  const dispatch = useDispatch<any>();
  useEffect(() => {
    dispatch(Movies.thunks.fetchMoviesList());
  }, []);
  const currentUser = useSelector(Movies.selectors.selectAll) || {};
  // console.log(currentUser);

  return (
    <View style={styles.homeScreenContainer}>
      <Text>Hello This in news app</Text>
    </View>
  );
};

export default HomeScreen as any;
