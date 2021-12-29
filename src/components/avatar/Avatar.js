import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import Ripple from 'react-native-material-ripple';

const colors = {
  background: '#fff',
};

const Avatar = ({style, image, onPress, width, height}) => {
  const imageView = (
    <Image
      source={image}
      style={[styles.image, width && height && {width: width, height: height}]}
    />
  );

  let view = <View>{imageView}</View>;

  if (onPress) {
    return (
      <Ripple
        rippleContainerBorderRadius={100}
        style={[styles.root, style]}
        onPress={onPress}>
        {view}
      </Ripple>
    );
  }
  return view;
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 100,
  },
  root: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Avatar;
