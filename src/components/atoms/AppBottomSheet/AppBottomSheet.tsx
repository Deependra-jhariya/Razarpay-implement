import React, { forwardRef, useImperativeHandle, useRef } from 'react';
import { StyleSheet, View } from 'react-native';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';

// Exposed methods for parent
export type AppBottomSheetRef = {
  open: () => void;
  close: () => void;
};

type Props = {
  snapPoints?: (string | number)[];
  children: React.ReactNode;
};

const AppBottomSheet = forwardRef<AppBottomSheetRef, Props>(
  ({ snapPoints = ['25%', '50%'], children }, ref) => {
    const bottomSheetRef = useRef<BottomSheet>(null);

    // expose open / close methods to parent
    useImperativeHandle(ref, () => ({
      open: () => {
        bottomSheetRef.current?.expand(); // 👈 expand to largest snap point
      },
      close: () => {
        bottomSheetRef.current?.close();
      },
    }));

    return (
      <BottomSheet
        ref={bottomSheetRef}
        snapPoints={snapPoints}
        enableContentPanningGesture={true}
      >
        {/* <BottomSheetView style={styles.content}> */}
        <View style={styles.content}>{children}</View>
        {/* </BottomSheetView> */}
      </BottomSheet>
    );
  },
);

const styles = StyleSheet.create({
  content: {
    flex: 1,
    padding: 16,
  },
});

export default AppBottomSheet;
