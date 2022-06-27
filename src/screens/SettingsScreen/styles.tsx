import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP,
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
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    width: widthPercentageToDP(90),
    borderRadius: 20,
    paddingHorizontal: 35,
    paddingBottom: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalOpenStyle: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    width: widthPercentageToDP(80),
    backgroundColor: 'red',
    marginTop: hp(5),
    alignSelf: 'center',
    borderColor: 'black',
    borderWidth: 1,
  },
  modalButtonStyle: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    width: widthPercentageToDP(80),
    backgroundColor: 'red',
    marginTop: hp(5),
  },
  buttonOpen: {
    // backgroundColor: '#F194FF',
  },
  buttonClose: {},
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default styles;
