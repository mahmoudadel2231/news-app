import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  textContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: wp(100),
    backgroundColor: 'gray',
    paddingHorizontal: wp(2),
    paddingTop: hp(1),
    minHeight: hp(40),
  },
  imageContainer: {
    height: hp(60),
    width: wp(100),
  },
  titleStyle: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 20,
  },
  overviewStyle: {
    color: 'white',
    marginTop: hp(2),
  },
  releaseDateStyle: {
    color: 'white',
    marginTop: hp(2),
  },
});

export default styles;
