import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import PAGES from "../constants/pages"
import { ProductList } from "../screens/ProductList/ProductList"
import Home from "../screens/Home/Home"
import { MarketList } from "../screens/MarketList"
import { MyList } from "../screens/MyList/MyList"
import { ProductMarket } from "../screens/ProductMarket"
import { PrimePages } from "../screens/PrimePages"
import { LoginPages } from "../screens/LoginPage/login"
import { Registratio } from "../screens/Registration"
import { AddProducts } from "../screens/AddProduct"

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
        <Stack.Screen name={PAGES.PRIMEPAGES} component={PrimePages} />
        <Stack.Screen name={PAGES.REGISTRATIO} component={Registratio} />
        <Stack.Screen name={PAGES.LOGIN} component={LoginPages} />
        <Stack.Screen name={PAGES.MAIN} component={Home} />
        <Stack.Screen name={PAGES.MYLIST} component={MyList} />
        <Stack.Screen name={PAGES.MARKETLIST} component={MarketList} />
        <Stack.Screen name={PAGES.PRODUCTLIST} component={ProductList} />
        <Stack.Screen name={PAGES.ADDPRODUCTS} component={AddProducts} />
        <Stack.Screen name={PAGES.PRODUCTMARKET} component={ProductMarket} />
      </Stack.Group>
    </Stack.Navigator>
  )
};

export default StackNavigator;