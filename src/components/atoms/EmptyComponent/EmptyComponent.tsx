import React from 'react';
import { View, StyleSheet, Image, ViewStyle, TextStyle } from 'react-native';
import AppText from '../AppText/AppText';
import { AppColors, AppFontFamily } from '../../../themes';

interface EmptyComponentProps {
  message?: string;
  icon?: any; // optional icon or image
  containerStyle?: ViewStyle;
  messageStyle?: TextStyle;
}

const EmptyComponent: React.FC<EmptyComponentProps> = ({
  message = 'No Data Found',
  icon,
  containerStyle,
  messageStyle,
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      {icon && <Image source={icon} style={styles.icon} resizeMode="contain" />}
      <AppText text={message} style={[styles.message, messageStyle]} />
    </View>
  );
};

export default EmptyComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  icon: {
    width: 80,
    height: 80,
    marginBottom: 12,
  },
  message: {
    fontSize: 16,
    color: AppColors.lightBlack,
    fontFamily:AppFontFamily.Regular,
    textAlign: 'center',
  },
});
