import {useNavigation} from '@react-navigation/native';
import {RootScreenNavigationProp} from 'src/app/Navigation';

export const useNav = () => {
  const navigation = useNavigation<RootScreenNavigationProp>();
  const {navigate} = navigation;

  return {navigation, navigate};
};
