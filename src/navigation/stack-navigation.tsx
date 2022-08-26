import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import PAGES from "../constants/pages"
import { ProductList } from "../screens/ProductList/ProductList"
import Home from "../screens/Home/Home"
import { MarketList } from "../screens/MarketList"
import { MyList } from "../screens/MyList/MyList"
import { ProductMarket } from "../screens/ProductMarket"
import { ErrorProductList } from "../screens/ErrorProductList/ErrorProductList"
import { LoginPage } from "../screens/LoginPage/login"


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
        <Stack.Screen name={PAGES.MARKETLIST} component={MarketList} />
        <Stack.Screen name={PAGES.MYLIST} component={MyList} />
        <Stack.Screen name={PAGES.PRODUCTMARKET} component={ProductMarket} />
        <Stack.Screen name={PAGES.ERRORPRODUCTLIST} component={ErrorProductList} />
        <Stack.Screen name={PAGES.LOGIN} component={LoginPage} />


      </Stack.Group>
    </Stack.Navigator>
  )
};

export default StackNavigator;