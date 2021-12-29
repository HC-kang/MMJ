import {Platform, Dimensions} from 'react-native';

export const isIos = Platform.OS === 'ios';
export const screenHeight = Dimensions.get('window').height;
export const screenWidth = Dimensions.get('window').width;
export const select = Platform.select;
