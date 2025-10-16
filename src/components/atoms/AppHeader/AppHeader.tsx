import React from 'react';
import {
  StyleSheet,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';

import { DrawerActions, useNavigation } from '@react-navigation/native';
import { AppColors, AppFontFamily } from '../../../themes';
import CommonIcon from '../CommonIcon/CommonIcon';
import AppText from '../AppText/AppText';

interface HeaderProps {
  onMenuIcon?: () => void;
  onRightIcon?: () => React.ReactNode;
  isMenuIcon?: Boolean;
  isdisableLeftIcon?: Boolean;
  isLogo?: Boolean;
  tittle?: string;
  headerContainerStyle?: ViewStyle;
  tittleStyle?: TextStyle;
  leftIconStyle?: TextStyle | ViewStyle;
}

const AppHeader: React.FC<HeaderProps> = props => {
  const {
    onMenuIcon,
    isMenuIcon,
    isdisableLeftIcon,
    isLogo,
    tittle,
    headerContainerStyle,
    tittleStyle,
    leftIconStyle,
    onRightIcon,
  } = props;

  const navigation = useNavigation();

  return (
    <View style={[HeaderStyle?.headerContainer, headerContainerStyle]}>
      <View style={HeaderStyle?.headerView}>
        {isMenuIcon ? (
          <TouchableOpacity
            style={HeaderStyle?.menuIconView}
            onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
          >
            <CommonIcon
              type={'Entypo'}
              name={'menu'}
              size={30}
              color={AppColors.black}
            />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={HeaderStyle?.menuIconView}
            onPress={() => navigation.goBack()}
          >
            <CommonIcon
              type={'Entypo'}
              name={'chevron-small-left'}
              size={30}
              color={AppColors.black}
              style={leftIconStyle}
            />
          </TouchableOpacity>
        )}

        <View style={HeaderStyle?.logoView}>
          <AppText
            text={tittle}
            style={[HeaderStyle?.tittleStyle, tittleStyle]}
          />
        </View>

        {onRightIcon && (
          <View style={HeaderStyle?.menuIconView}>{onRightIcon()}</View>
        )}
      </View>
    </View>
  );
};

export default AppHeader;

export const HeaderStyle = StyleSheet.create({
  headerContainer: {
    height: 60,
    backgroundColor: AppColors?.appColor,
    paddingHorizontal: 16,
  },
  headerView: {
    flex: 1,
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'space-between',
  },
  logoView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoSty: {
    // height: 25,
    width: 200,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  menuIconView: {
    alignSelf: 'center',
  },
  tittleStyle: {
    fontSize: 16,
    fontFamily: AppFontFamily.SemiBold,
    color: AppColors.black,
  },
});
