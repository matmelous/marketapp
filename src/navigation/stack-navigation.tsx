import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PAGES from "../constants/pages";
import { ProductList } from "../screens/ProductList/ProductList";
import BottomTabNavigation from "./bottom-tab";

const Stack = createNativeStackNavigator()

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Group screenOptions={{headerShown: false, contentStyle: { backgroundColor: "#FFFFFF" }}}>
        <Stack.Screen name={PAGES.PRODUCTLIST} component={ProductList} />
        <Stack.Screen name={PAGES.MAIN} component={BottomTabNavigation} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default StackNavigator;