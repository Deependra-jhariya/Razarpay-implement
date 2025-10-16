import { StyleSheet } from 'react-native';
import { AppColors } from '../AppColors/AppColors';
import { AppFontFamily } from '../AppFontFamily/AppFontFamily';

export const CommonStyle = StyleSheet.create({
  statusBarContainer: {
    flex: 1,
    backgroundColor:AppColors.white,
  },
  mainContainer: {
    flex: 1,
    backgroundColor: AppColors.white,
  },
  mainHeading: {
    fontSize: 26,
    color: AppColors.black,
    fontFamily: AppFontFamily.Bold,
  },
  subHeading: {
    fontSize: 18,
    color: AppColors.black,
    fontFamily: AppFontFamily.SemiBold,
  },
  wrapper: {
    position: 'relative',
  },
  loaderContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  notFoundView: {
    backgroundColor: AppColors.appColor,
    height: 113,
    width: 118,
    justifyContent: 'center',
  },
  notFoundimage: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    justifyContent: 'center',
    resizeMode: 'contain',
  },
});
