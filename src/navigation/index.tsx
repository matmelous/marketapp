import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import StackNavigator from "./stack-navigation";

const Navigation = () => {
  return (
    <NavigationContainer>
        <StackNavigator />
    </NavigationContainer>
  );
};

export type RootStackParamList = {
  ProductList: undefined;
};

export type NavigationType = NativeStackNavigationProp<
  RootStackParamList,
  keyof RootStackParamList
>;

export default Navigation;
