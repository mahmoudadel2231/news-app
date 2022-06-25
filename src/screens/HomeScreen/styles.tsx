import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  homeScreenContainer: {
    height: hp(100),
    width: wp(100),
    flex: 1,
  },
  searchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: wp(5),
    marginVertical: hp(2),
  },
  searchButton: {
    backgroundColor: 'red',
    height: hp(5),
    justifyContent: 'center',
    borderColor: 'black',
    borderWidth: 1,
    paddingHorizontal: wp(2),
  },
  textInputStyle: {
    width: wp(70),
    borderColor: 'black',
    borderWidth: 1,
    height: hp(5),
  },
});

export default styles;
