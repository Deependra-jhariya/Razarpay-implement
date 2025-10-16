import React from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import CommonIcon from '../CommonIcon/CommonIcon';
import { AppColors } from '../../../themes';

interface SearchBarProps {
  value: string;
  onChangeText: (text: string) => void;
  onClear?: () => void;
  placeholder?: string;
  style?: object;
}

const SearchBar: React.FC<SearchBarProps> = ({
  value,
  onChangeText,
  onClear,
  placeholder = 'Search...',
  style,
}) => {
  return (
    <View style={[styles.container, style]}>
      <CommonIcon type={'Feather'} name="search" size={18} color="#999" />
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={AppColors.lightBlack}
      />
      {value.length > 0 && (
        <TouchableOpacity style={styles.clearButton} onPress={onClear}>
          <CommonIcon
            type={'Ionicons'}
            name="close"
            size={12}
            color={AppColors.lightBlack}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 15,
    alignItems: 'center',
    height: 40,
    width: '100%',
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  clearButton: {
    backgroundColor: AppColors.ExtralightYellow,
    width: 18,
    height: 18,
    borderRadius: 18 / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
