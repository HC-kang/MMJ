import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import colors from '../../libs/colors';
import ImageWrap from '../image-wrap/ImageWrap';

const BottomTabIcon = ({image}) => {
  return (
    <View>
      <ImageWrap image={image} style={styles.root} />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    width: 24,
    height: 24,
  },
  notification: {
    position: 'absolute',
    top: -6,
    right: -8,
    backgroundColor: colors.error,
    borderRadius: 100,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  text: {
    fontSize: 11,
    color: colors.white,
  },
});

export default BottomTabIcon;
