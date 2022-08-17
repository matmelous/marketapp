import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import * as Linking from 'expo-linking';

// import { LOGIN_PROVIDER_URL } from "@env";

import StackNavigator from "./stack-navigation";
// import { OverlayProvider } from "stream-chat-expo";

const Navigation = () => {
  const appScheme = Linking.createURL('/');
  // const urlScheme = LOGIN_PROVIDER_URL
  const config = {
    screens: {
      Login: "login",
      ChangePassword: "reset-password",
    }
  }

  // const prefixes = [appScheme, urlScheme]

  const linking = {
    // prefixes,
    config
  }

  return (
    <NavigationContainer>
      {/* <OverlayProvider> */}
        <StackNavigator />
      {/* </OverlayProvider> */}
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
