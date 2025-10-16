import React from 'react';
import { StyleSheet, ViewStyle, TextStyle, Text, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { AppColors } from '../../../themes';

interface DropdownOption {
  name: string;
  price: number;
  value: string | number;
}

interface AppDropdownProps {
  data: DropdownOption[];
  placeholder?: string;
  searchPlaceholder?: string;
  value: string | number | null;
  onChange: (value: string | number) => void;
  style?: ViewStyle;
  placeholderStyle?: TextStyle;
  selectedTextStyle?: TextStyle;
  labelField: string;
  valueField: string;
  renderItem?: (
    item: DropdownOption,
    selected?: boolean,
  ) => React.ReactElement | null;
}

const AppDropdown: React.FC<AppDropdownProps> = ({
  data,
  placeholder = 'Select item',
  searchPlaceholder = 'Search...',
  value,
  onChange,
  style,
  placeholderStyle,
  selectedTextStyle,
  labelField,
  valueField,
  renderItem,
}) => {
  const dropdownData = [{ name: 'None', price: '0', value: 'none' }, ...data];

  return (
    <Dropdown
      style={[styles.dropdown, style]}
      placeholderStyle={[styles.placeholderStyle, placeholderStyle]}
      selectedTextStyle={[styles.selectedTextStyle, selectedTextStyle]}
      iconStyle={styles.iconStyle}
      itemTextStyle={styles.itemTextStyle}
      inputSearchStyle={styles.inputSearchStyle}
      data={dropdownData}
      maxHeight={300}
      labelField={labelField || 'label'}
      valueField={valueField || 'value'}
      placeholder={placeholder}
      searchPlaceholder={searchPlaceholder}
      value={value}
      onChange={item => onChange(item)}
      renderItem={
        renderItem
          ? renderItem
          : item => (
              <View style={styles.itemContainer}>
                <Text allowFontScaling={false} style={styles.itemTextStyle}>
                  {item[labelField]}{' '}
                  {item[labelField] == 'None' ? '' : `₹${item.price}`}
                </Text>
              </View>
            )
      }
    />
  );
};

export default AppDropdown;

const styles = StyleSheet.create({
  dropdown: {
    flex: 1,
    margin: 12,
    marginLeft: 30,
    // width: 200,
  },
  placeholderStyle: {
    fontSize: 16,
    color: AppColors.appColor,
  },
  selectedTextStyle: {
    fontSize: 16,
    color: AppColors.appColor,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
    color: AppColors.black,
  },
  itemContainer: {
    padding: 12,
  },
  itemTextStyle: {
    fontSize: 16,
    color: AppColors.black,
  },
});
