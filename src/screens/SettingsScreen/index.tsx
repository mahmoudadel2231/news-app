import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect, useState} from 'react';
import {
  Alert,
  I18nManager,
  Modal,
  Pressable,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {rtlSupport} from '../../translations';
import {Restart} from 'fiction-expo-restart';
import isEmpty from 'lodash/isEmpty';

import styles from './styles';
import i18next from 'i18next';
import useKeyTranslation from '../../translations/useKeyTranslations';

const SettingsScreen = () => {
  const onChangeLanguage = async (
    newLanguage: 'en' | 'ar',
    restart?: boolean,
  ) => {
    I18nManager.allowRTL(rtlSupport[newLanguage]);
    I18nManager.forceRTL(rtlSupport[newLanguage]);
    await AsyncStorage.setItem('language', newLanguage);
    Restart();
  };
  const translate = useKeyTranslation('common');
  console.log('translate', translate('Home'));

  const [modalVisible, setModalVisible] = useState(false);
  // onChangeLanguage('ar', true);

  return (
    <View style={styles.homeScreenContainer}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            {/* <Text style={styles.modalText}>EN</Text> */}
            <TouchableOpacity
              style={styles.modalButtonStyle}
              onPress={() => {
                setModalVisible(!modalVisible);
                onChangeLanguage('en', true);
              }}>
              <Text style={styles.textStyle}>ENGLISH</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.modalButtonStyle}
              onPress={() => {
                setModalVisible(!modalVisible);
                onChangeLanguage('ar', true);
              }}>
              <Text style={styles.textStyle}>ARABIC</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <Pressable
        style={styles.modalOpenStyle}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.textStyle}>Change Language</Text>
      </Pressable>
    </View>
  );
};

export default SettingsScreen as any;
