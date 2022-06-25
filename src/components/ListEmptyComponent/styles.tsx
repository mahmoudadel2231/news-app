import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  emptyListContainer: {
    height: hp(70),
    width: wp(100),
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  textStyle: {
    width: wp(100),
    color: 'red',
    textAlign: 'center',
    fontSize: 18,
    marginTop: hp(3),
  },
});

export default styles;
