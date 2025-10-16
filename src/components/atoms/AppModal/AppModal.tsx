import React, { ReactNode } from 'react';
import { Modal, View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { AppColors } from '../../../themes';

interface AppModalProps {
  visible: boolean;
  onClose: () => void;
  children?: ReactNode; // ✅ Custom content
}

const AppModal: React.FC<AppModalProps> = ({ visible, onClose, children }) => {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={styles.modalContainer}>{children}</View>
      </View>
    </Modal>
  );
};

export default AppModal;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '85%',
    backgroundColor: AppColors.white,
    borderRadius: 12,
    padding: 20,
    elevation: 5,
  },
});
