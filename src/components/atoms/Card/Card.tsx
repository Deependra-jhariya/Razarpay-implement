import {StyleProp, StyleSheet, Text, TextStyle, View, ViewStyle} from 'react-native';
import React from 'react';
import {CardStyle} from './CradStyle';

// componets
import DividerLine from '../../atoms/DividerLine/DividerLine';
import AppText from '../AppText/AppText';

interface CardProps {
  style?:StyleProp<ViewStyle>;
  tittle?: String;
  subTittle?: String;
  Divider?: boolean;
  cardChildren?: React.ReactNode;
  tittleTestStyle?: TextStyle;
  subTittleTestStyle?: TextStyle;
}

const Card: React.FC<CardProps> = props => {
  const {
    style,
    tittle,
    subTittle,
    Divider,
    cardChildren,
    tittleTestStyle,
    subTittleTestStyle,
  } = props;
  return (
    <View style={[CardStyle?.cardContainer, style]}>
      {tittle && (
        <AppText style={[CardStyle?.cardHeading, tittleTestStyle]}text={tittle}/>
      )}
      {Divider && <DividerLine thickness={1} />}
      {subTittle && (
        <AppText style={[CardStyle?.cardSubHeading, subTittleTestStyle]}
          text={subTittle}
       />
      )}
      {cardChildren && <View>{cardChildren}</View>}
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({});
