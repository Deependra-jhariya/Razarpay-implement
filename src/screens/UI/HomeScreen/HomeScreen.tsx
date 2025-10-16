import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { AppColors, CommonStyle } from '../../../themes';
import { SearchBar } from '../../../components/atoms';

const HomeScreen = () => {
  const [search, setSearch] = useState<string>('');
  const [placeholderIndex, setPlaceholderIndex] = useState(0);

  const searchItem = [
    {
      id: '1',
      name: 'Electronics',
    },
    {
      id: '2',
      name: 'Clothes',
    },
    {
      id: '3',
      name: 'Fashion',
    },
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      setPlaceholderIndex(prev => (prev + 1) % searchItem.length);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <View style={CommonStyle.statusBarContainer}>
      <View
        style={{
          backgroundColor: AppColors.appColor,
          paddingVertical: 16,
          paddingHorizontal: 16,
        }}
      >
        <SearchBar
          value={search}
          placeholder={searchItem[placeholderIndex].name}
          onChangeText={text => setSearch(text)}
        />
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
