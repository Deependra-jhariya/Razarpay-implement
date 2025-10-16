// components/TabSwitcher.tsx
import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { useTheme } from '@react-navigation/native';
import AppText from '../AppText/AppText';
import { AppFontFamily } from '../../../themes';

type TabItem = {
  label: string;
  icon: React.ReactNode;
  key: string;
};

type TabSwitcherProps = {
  tabs: TabItem[];
  selectedKey: string;
  onSelect: (key: string) => void;
};

const TabSwitcher = ({ tabs, selectedKey, onSelect }: TabSwitcherProps) => {
  const { colors } = useTheme();

  return (
    <View style={[styles.container, { borderColor: colors.border }]}>
      {tabs.map(tab => {
        const isSelected = tab.key === selectedKey;
        return (
          <TouchableOpacity
            key={tab.key}
            style={[
              styles.tab,
              isSelected && {
                backgroundColor: colors.card,
              },
            ]}
            activeOpacity={0.7}
            onPress={() => onSelect(tab.key)}
            disabled={tab.key === 'takeaway'} // for disable
          >
            <View style={styles.icon}>{tab.icon}</View>
            <AppText
              style={[
                styles.label,
                {
                  color: isSelected ? colors.text : 'white',
                  fontWeight: isSelected ? 'bold' : 'normal',
                },
              ]}
              text={tab.label}
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 10,
    overflow: 'hidden',
  },
  tab: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  icon: {
    marginRight: 4,
  },
  label: {
    fontSize: 14,
    fontFamily: AppFontFamily.Regular,
  },
});

export default TabSwitcher;
