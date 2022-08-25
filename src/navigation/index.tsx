import * as React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import StackNavigator from "./stack-navigation"
import * as Linking from 'expo-linking'


const Navigation = () => {

  const appScheme = Linking.createURL('/');
  const prefixes = [appScheme]
  const linking = { prefixes }

  return (
    <NavigationContainer
      linking={linking}
    >
      <StackNavigator />
    </NavigationContainer>
  )
}

export type RootStackParamList = {
  ProductList: undefined;
  Main: undefined;

};

export type NavigationType = NativeStackNavigationProp<
  RootStackParamList,
  keyof RootStackParamList
>

export default Navigation
