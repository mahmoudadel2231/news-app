import React from "react";
import { Text, View, Image } from "react-native";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";
import { useSelector } from "react-redux";
import Movies from "../../redux/Movies";

export const MoviesItem = ({ item }) => {
  const currentMovie = useSelector((state) =>
    Movies.selectors.selectById(state, item)
  );

  return (
    <View
      style={{
        backgroundColor: "red",
        marginBottom: heightPercentageToDP(2),
        flexDirection: "row",
        height: heightPercentageToDP(30),
        borderRadius: 10,
      }}
    >
      <Image
        style={{
          height: "100%",
          width: widthPercentageToDP(40),
          borderRadius: 10,
        }}
        source={{
          uri: `https://image.tmdb.org/t/p/w500/${currentMovie?.poster_path}`,
        }}
      />
      <View
        style={{
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          width: widthPercentageToDP(50),
        }}
      >
        <Text>{currentMovie?.title}</Text>
        <Text numberOfLines={2}>{currentMovie?.overview}</Text>
        <Text>{currentMovie?.release_date}</Text>
      </View>
    </View>
  );
};
