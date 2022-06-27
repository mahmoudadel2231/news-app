import React from 'react';
import {View, Text} from 'react-native';
import useKeyTranslation from '../../translations/useKeyTranslations';
import styles from './styles';

export const ListEmptyComponent = () => {
  const translate = useKeyTranslation('common');

  return (
    <View style={styles.emptyListContainer}>
      <Text style={styles.textStyle}>{translate('empty_movies')}</Text>
    </View>
  );
};
