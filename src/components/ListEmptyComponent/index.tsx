import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";

export const ListEmptyComponent = ({ title = "No Movies were added!" }) => {
  return (
    <View style={styles.emptyListContainer}>
      <Text style={styles.textStyle}>{title}</Text>
    </View>
  );
};
