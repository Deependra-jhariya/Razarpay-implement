import React from 'react';
import {
  StyleProp,
  StyleSheet,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import CommonIcon from '../CommonIcon/CommonIcon';
import { AppColors } from '../../../themes';

interface VegDotProps {
  size?: number;
  color?: string;
  style?: StyleProp<ViewStyle | TextStyle>;
}

const VegDot: React.FC<VegDotProps> = ({
  size = 15,
  color = AppColors.green,
  style,
}) => {
  return (
      <CommonIcon
        name="dot-fill"
        type="Octicons"
        size={size}
        color={color}
        style={[styles.vegDotstyle, style]}
      />
    );
};

export default VegDot;

const styles = StyleSheet.create({
  vegDotstyle: {
    borderWidth: 1,
    borderColor: AppColors.green,
    alignSelf: 'flex-start',
    marginBottom: 7,
    height: 15,
    width: 15,
    textAlign:"center"
  },
});
