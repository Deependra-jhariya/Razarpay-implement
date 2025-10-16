import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import AppText from '../AppText/AppText';
import { AppColors, AppFontFamily } from '../../../themes';
import AppButton from '../AppButton/AppButton';

interface ReusableCardProps {
  title: string;
  subtitle: string;
  buttonText: string;
  description: string;
  imageSource: any;
  BackImageSource: any;
  onPress: () => void;
  disabled: boolean;
}

const ReusableCard: React.FC<ReusableCardProps> = ({
  title,
  subtitle,
  buttonText,
  description,
  imageSource,
  BackImageSource,
  onPress,
  disabled=false
}) => {
  return (
    <ImageBackground
      style={styles.card}
      source={BackImageSource}
      imageStyle={styles.backImageStyle}
    >
      <View style={styles.textContainer}>
        <AppText text={title} style={styles.title} />
        <AppText text={subtitle} style={styles.subtitle} />
        <AppText text={description} style={styles.description} />
        <AppButton
          text={buttonText}
          style={styles.button}
          ButtonTextStyle={styles.buttonText}
          disabled={disabled}
        />
      </View>
      <View style={{}}>
        <Image source={imageSource} style={styles.image} resizeMode="contain" />
      </View>
    </ImageBackground>
  );
};

export default ReusableCard;

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    marginHorizontal: 16,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 15,
  },
  textContainer: {
    flex: 1,
    paddingRight: 12,
  },
  title: {
    fontSize: 12,
    fontFamily: AppFontFamily.Regular,
    color: AppColors.lightBlack,
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 16,
    fontFamily: AppFontFamily.SemiBold,
    color: AppColors.black,
    marginBottom: 8,
  },
  description: {
    fontSize: 12,
    fontFamily: AppFontFamily.Regular,
    color: AppColors.lightBlack,
    marginBottom: 12,
  },
  button: {
    backgroundColor: '#A28F4A',
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 20,
    alignSelf: 'flex-start',
  },
  buttonText: {
    fontSize: 10,
    fontFamily: AppFontFamily.SemiBold,
    color: AppColors.white,
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    marginRight: -30,
  },
  backImageStyle: {
    borderRadius: 8,
  },
  //   imageVoew:{
  //     position:"absolute",
  //     right:0,
  //     top:0,
  //     bottom:0,
  //     alignItems:"flex-end"
  //   }
});
