import React from 'react';
import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: 'gray',
    marginBottom: hp(2),
    flexDirection: 'row',
    height: hp(30),
    borderRadius: 10,
  },
  textContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    width: wp(50),
    marginLeft: wp(2),
  },
  imageContainer: {
    height: '100%',
    width: wp(40),
    borderRadius: 10,
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
