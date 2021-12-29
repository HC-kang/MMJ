import React from 'react';
import {Image, View, StyleSheet} from 'react-native';

const ImageWrap = ({tintColor, resizeMode = 'contain', style = {}, image}) => {
  return (
    <View style={[styles.root, style]}>
      <Image
        source={image}
        style={[
          styles.image,
          {resizeMode},
          style.borderRadius && {borderRadius: style.borderRadius},
          tintColor && {tintColor},
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%',
  },
  root: {},
});

export default ImageWrap;
