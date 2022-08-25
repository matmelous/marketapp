import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import PAGES from "../constants/pages"
import { ProductList } from "../screens/ProductList/ProductList"
import Home from "../screens/Home/Home"


const Stack = createNativeStackNavigator()

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Group 
        screenOptions={{
          headerShown: false, 
          contentStyle: { backgroundColor: "#FFFFFF" }
        }}
      >
        <Stack.Screen name={PAGES.MAIN} component={Home} />
        <Stack.Screen name={PAGES.PRODUCTLIST} component={ProductList} />
      </Stack.Group>
    </Stack.Navigator>
  )
};

export default StackNavigator;