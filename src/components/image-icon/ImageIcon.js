import React from 'react';
import {StyleSheet, View} from 'react-native';
import ImageWrap from '../image-wrap/ImageWrap';
const ImageIcon = ({image, width = 20, height = 20, style, tintColor}) => {
  return (
    <View>
      <ImageWrap
        image={image}
        style={[styles.image, style, {width, height}]}
        tintColor={tintColor}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {},
});

export default ImageIcon;
