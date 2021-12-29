import React from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import {screenWidth, screenHeight} from '../libs/utils';
import Ripple from 'react-native-material-ripple';
import BasicLayout from '../layouts/BasicLayout';
import colors from '../libs/colors';
import style from '../libs/style';

const MyPage = () => <BasicLayout></BasicLayout>;

const styles = StyleSheet.create({
  topbar: {
    height: 50,
    width: screenWidth,
    paddingHorizontal: 25,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.25,
    elevation: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.primary,
  },
  setting: {
    position: 'absolute',
    right: 25,
  },
  set_part: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon_setting: {
    color: colors.primary,
    fontSize: 22,
    fontWeight: 'bold',
  },
  scrollView: {
    alignSelf: 'stretch',
    height: screenHeight - 50,
  },
  root: {
    width: screenWidth,
    paddingHorizontal: 20,
    paddingVertical: 15,
    flexDirection: 'column',
    alignItems: 'center',
  },
  content: {
    width: '100%',
    backgroundColor: colors.white,
    paddingHorizontal: 20,
    paddingTop: 5,
    paddingBottom: 10,
    borderRadius: 15,
    flexDirection: 'column',
    alignItems: 'center',
  },
});

export default MyPage;
