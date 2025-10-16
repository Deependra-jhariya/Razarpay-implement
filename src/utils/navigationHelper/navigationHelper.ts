import {
  NavigationProp,
  StackActions,
  useNavigation,
} from '@react-navigation/native';
import { RootStackParamsList } from '../../navigation/types';

export const useAppNavigation = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamsList>>();

  const navigateTo = (screen: keyof RootStackParamsList, params?: any) => {
    navigation.navigate(screen, params);
  };
  const resetTo = (screen: keyof RootStackParamsList, params?: any) => {
    navigation.reset({
      index: 0,
      routes: [{ name: screen, params }],
    });
  };

  // ✅ Replace (previous screen is removed from stack)
  const replaceTo = (screen: keyof RootStackParamsList, params?: any) => {
    navigation.dispatch(StackActions.replace(screen, params));
  };
  const goBack = () => {
    if (navigation.canGoBack()) {
      navigation.goBack();
    }
  };
  return {
    navigateTo,
    resetTo,
    goBack,
    replaceTo,
  };
};
