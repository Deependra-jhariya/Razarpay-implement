import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

interface Props {
  name: string;
  image: any;
  price: string;
  onPress?: () => void;
}

const MenuCard: React.FC<Props> = ({ name, image, price, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={image} style={styles.image} />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.price}>{price}</Text>
    </TouchableOpacity>
  );
};

export default MenuCard;

const styles = StyleSheet.create({
  card: {
    // width: '48%',
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 10,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
  },
  image: {
    height: 200,
    width: '100%',
    resizeMode: "cover",
    borderRadius: 16,
  },
  name: {
    marginTop: 8,
    fontWeight: '600',
    fontSize: 16,
  },
  price: {
    color: '#666',
    marginTop: 4,
    fontSize: 14,
  },
});
