import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {screenWidth, screenHeight} from '../libs/utils';
import colors from '../libs/colors';
import BasicLayout from '../layouts/BasicLayout';
import Avatar from '../components/avatar/Avatar';
import images from '../libs/images';
import style from '../libs/style';
import ImageIcon from '../components/image-icon/ImageIcon';
import Ripple from 'react-native-material-ripple';
import ImageWrap from '../components/image-wrap/ImageWrap';

var dummy = [
  {
    id: 121,
    resto_name: '촌돼지마을',
    profile: '',
    menu_list: '',
    score: 5,
    memo: '차돌비빔밥!',
  },
  {
    id: 122,
    resto_name: '김가솜씨',
    profile: '',
    menu_list: '',
    score: 6,
    memo: '돼지갈비정식',
  },
  {
    id: 122,
    resto_name: 'ㅇㅇ기사식당',
    profile: '',
    menu_list: '',
    score: 3,
    memo: '안가..',
  },
  {
    id: 122,
    resto_name: 'ㅇㅇ기사식당',
    profile: '',
    menu_list: '',
    score: 3,
    memo: '',
  },
  {
    id: 122,
    resto_name: '여기가',
    profile: '',
    menu_list: '',
    score: 3,
    memo: '가나다',
  },
  {
    id: 122,
    resto_name: '어디기',
    profile: '',
    menu_list: '',
    score: 3,
    memo: '',
  },
  {
    id: 122,
    resto_name: '테스트',
    profile: '',
    menu_list: '',
    score: 3,
    memo: '',
  },
  {
    id: 122,
    resto_name: 'ㅇㅇ국밥',
    profile: '',
    menu_list: '',
    score: 3,
    memo: '',
  },
  {
    id: 122,
    resto_name: 'ㅇㅇ만두국',
    profile: '',
    menu_list: '',
    score: 3,
    memo: '냉만두국',
  },
  {
    id: 122,
    resto_name: '해장국',
    profile: '',
    menu_list: '',
    score: 3,
    memo: '속풀림',
  },
  {
    id: 122,
    resto_name: '천린',
    profile: '',
    menu_list: '',
    score: 3,
    memo: '볶음밥 곱배기',
  },
  {
    id: 122,
    resto_name: '모쿠커피',
    profile: '',
    menu_list: '',
    score: 3,
    memo: '모쿠스티커',
  },
];

const Restaurant = () => (
  <BasicLayout>
    <View style={styles.root}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.scrollView}>
        <View style={styles.top_part}>
          <Ripple onPress={null}>
            <View style={styles.row}>
              <View>
                <ImageWrap image={images.i7} style={{width: 40, height: 40}} />
              </View>
              <Text style={{fontSize: 28, marginLeft: 20, color: colors.black}}>
                추가 입력
              </Text>
            </View>
          </Ripple>
        </View>
        <View style={styles.form}>
          {dummy.length > 0 && (
            <View style={styles.content}>
              {dummy &&
                dummy.map((data, index) => (
                  <View key={index} style={styles.item}>
                    <View style={styles.row}>
                      {data.profile === '' ? (
                        <Avatar image={images.i4} width={50} height={50} />
                      ) : (
                        <Avatar
                          image={{uri: Config.IMG_URL + data.profile}}
                          width={50}
                          height={50}
                        />
                      )}
                      <View style={[styles.column, style.ml10]}>
                        <View style={styles.row}>
                          <Text style={styles.txt1}>{data.resto_name}</Text>
                        </View>
                        <View style={[styles.row, style.mt5]}>
                          <ImageIcon
                            width={22}
                            height={22}
                            image={images.i2}
                            style={style.mr5}
                          />
                          <Text style={styles.txt2}>{data.score}점</Text>
                          <Text style={styles.txt3}> | </Text>
                          <Text style={styles.txt2}>{data.memo}</Text>
                        </View>
                      </View>
                    </View>
                    <View>
                      <Ripple
                        onPress={() => {
                          null;
                        }}
                        rippleContainerBorderRadius={20}>
                        <View style={[styles.row, styles.right]}>
                          <ImageWrap
                            image={images.i5}
                            style={styles.good_bad}
                          />
                          <Text>Good</Text>
                        </View>
                      </Ripple>
                      <View style={styles.space}></View>
                      <Ripple
                        onPress={() => {
                          null;
                        }}
                        rippleContainerBorderRadius={20}>
                        <View style={[styles.row, styles.right]}>
                          <Text>Bad </Text>
                          <ImageWrap
                            image={images.i6}
                            style={styles.good_bad}
                          />
                        </View>
                      </Ripple>
                    </View>
                  </View>
                ))}
            </View>
          )}
        </View>
      </ScrollView>
    </View>
  </BasicLayout>
);

const styles = StyleSheet.create({
  root: {
    width: screenWidth,
    paddingHorizontal: 20,
    paddingVertical: 0,
    backgroundColor: colors.color4,
  },
  top_part: {
    width: screenWidth - 40,
    height: 70,
    flexDirection: 'row',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
    marginTop: 15,
  },
  form: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
    paddingHorizontal: 15,
    paddingBottom: 25,
    borderRadius: 10,
  },
  scrollView: {
    alignSelf: 'stretch',
    marginBottom: 0,
  },
  item: {
    width: screenWidth - 40,
    backgroundColor: colors.white,
    borderRadius: 20,
    borderBottomColor: colors.background,
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 80,
    marginBottom: 5,
    paddingVertical: 15,
    paddingHorizontal: 15,
  },
  content: {
    width: screenWidth - 40,
    backgroundColor: colors.color4,
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 25,
    borderRadius: 15,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  right: {
    justifyContent: 'flex-end',
  },
  space: {
    height: 10,
  },
  line: {
    height: 1,
    backgroundColor: colors.black,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  column: {
    flexDirection: 'column',
  },
  good_bad: {width: 22, height: 22},
  plus_button: {
    backgroundColor: colors.color3,
    borderRadius: 15,
    height: 40,
    width: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // paddingBottom: 10,
  },
  plus: {
    fontWeight: '500',
    fontSize: 40,
  },
});

export default Restaurant;
