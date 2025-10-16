import { StyleSheet } from 'react-native';
import { AppColors, AppFontFamily } from '../../../themes';

export const CardStyle = StyleSheet.create({
  cardContainer: {
    borderWidth: 1,
    borderColor: AppColors?.lightBlack,
    backgroundColor: AppColors?.white,
    marginHorizontal: 16,
    padding: 16,
    borderRadius: 10,
    marginVertical: 10,
    shadowColor: AppColors?.grayColor,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 1,
    shadowRadius: 4,
  },
  cardHeading: {
    fontSize: 15,
    fontFamily: AppFontFamily.Regular,
    color: AppColors?.transparent,
    textAlign: 'center',
  },
  cardSubHeading: {
    fontSize: 18,
    color: AppColors?.white,
    textAlign: 'center',
    // letterSpacing: 1.5,
  },
});
