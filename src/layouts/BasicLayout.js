import React from 'react';
import {StyleSheet, SafeAreaView, View} from 'react-native';
import colors from '../libs/colors';

const BasicLayout = ({
  padding = 0,
  paddingHorizontal = 0,
  paddingVertical = 0,
  children,
  centerHorizontal = false,
  centerVertical = false,
}) => {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View
        style={[
          styles.view,
          {
            paddingHorizontal,
            paddingVertical,
            padding,
            alignItems: centerHorizontal ? 'center' : 'flex-start',
            justifyContent: centerVertical ? 'center' : 'flex-start',
          },
        ]}>
        {children}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
  view: {
    flex: 1,
    backgroundColor: colors.background,
  },
});

export default BasicLayout;
