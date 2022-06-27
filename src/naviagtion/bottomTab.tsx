import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SettingsScreen from '../screens/SettingsScreen';
import useKeyTranslation from '../translations/useKeyTranslations';
import HomeStack from './homeStack';

const Tab = createBottomTabNavigator();

const MyTabs = () => {
  const translate = useKeyTranslation('pages');

  return (
    <Tab.Navigator>
      <Tab.Screen name={translate('home_screen')} component={HomeStack} />
      <Tab.Screen
        name={translate('settings_screen')}
        component={SettingsScreen}
      />
    </Tab.Navigator>
  );
};

export default MyTabs;
