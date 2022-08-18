import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import PAGES from "../constants/pages";

import { ProductList } from "../screens/ProductList/ProductList"; 
import { ButtonsHome } from "../components/Buttons/ButtonsHome";

const Tab = createBottomTabNavigator();

const BottomTabNavigation = () => {
  return (
    <Tab.Navigator
      tabBar={props => <ButtonsHome {...props} />}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen name={PAGES.PRODUCTLIST} component={ProductList} />
    </Tab.Navigator>
  )
}

export default BottomTabNavigation;