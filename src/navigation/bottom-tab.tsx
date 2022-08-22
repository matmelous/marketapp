import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import PAGES from "../constants/pages";
import { ButtonsHome } from "../components/Buttons/ButtonsHome";
import { ProductList } from "../screens/ProductList/ProductList"; 

const Tab = createBottomTabNavigator();

const BottomTabNavigation = ( {navigation}) => {
  return (
    <Tab.Navigator tabBar={props =>  <ButtonsHome navigation={navigation} />} screenOptions={{ headerShown: false,}}>
      <Tab.Screen name={PAGES.PRODUCTLIST} component={ProductList} />
    </Tab.Navigator>
  )
}

export default BottomTabNavigation;