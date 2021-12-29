import React from 'react';
import MyPage from '../screens/MyPage';
import Pick from '../screens/Pick';
import Restaurant from '../screens/Restaurant';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import images from '../libs/images';
import BottomTabIcon from '../components/bottom-tab-icon/BottomTabIcon';

const Tab = createBottomTabNavigator();

const Tabs = () => (
  <Tab.Navigator>
    <Tab.Screen
      name="Restaurant"
      component={Restaurant}
      options={{
        headerTitle: '식당 리스트',
        headerTitleAlign: 'center',
        tabBarIcon: ({focused}) => (
          <BottomTabIcon image={focused ? images.i2 : images.i1} />
        ),
      }}
    />
    <Tab.Screen
      name="Pick"
      component={Pick}
      options={{
        headerTitle: '메뉴고르기',
        headerTitleAlign: 'center',
        tabBarIcon: ({focused}) => (
          <BottomTabIcon image={focused ? images.i2 : images.i2} />
        ),
      }}
    />
    {/* <Tab.Screen
      name="MyPage"
      component={MyPage}
      options={{
        headerTitle: 'MyPage',
        headerTitleAlign: 'center',
        tabBarIcon: ({focused}) => (
          <BottomTabIcon image={focused ? images.i2 : images.i3} />
        ),
      }}
    /> */}
  </Tab.Navigator>
);

export default Tabs;
