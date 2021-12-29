import React from 'react';
import {StyleSheet, SafeAreaView, View, ScrollView} from 'react-native';
import Topbar from '../../components/topbar/Topbar';
import colors from '../../libs/colors';
import {screenWidth, screenHeight} from '../../libs/utils';

const StackLayout = ({
  children,
  center,
  title,
  back,
  close,
  skip,
  refresh,
  onPress = null,
}) => {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={[styles.view]}>
        <Topbar
          title={title}
          back={back}
          close={close}
          skip={skip}
          refresh={refresh}
          onPress={onPress}
        />
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.scrollView}>
          <View style={[styles.main, center && styles.center]}>{children}</View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
  scrollView: {
    height: '100%',
    width: screenWidth,
  },
  main: {
    minHeight: screenHeight - 80,
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  view: {
    flex: 1,
    backgroundColor: colors.background,
  },
  close: {
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
});

export default StackLayout;
