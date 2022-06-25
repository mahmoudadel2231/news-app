import { StyleSheet } from "react-native";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";

const styles = StyleSheet.create({
  homeScreenContainer: {
    height: heightPercentageToDP(100),
    width: widthPercentageToDP(100),
    flex: 1,
  },
  ListHeaderComponent: {},
});

export default styles;
