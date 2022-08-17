import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import PAGES from "../constants/pages";

import BottomTabNavigation from "./bottom-tab"

import LoginScreen from "../screens/LoginScreen";
import ProfileSelectionScreen from "../screens/ProfileSelection";
import RecordScreen from "../screens/RecordScreen";
import CreateAccountScreen from "../screens/CreateAccountScreen";
import ProjectDetailsScreen from "../screens/ProjectDetailsScreen";
import OtherUserProfileScreen from "../screens/OtherUserProfileScreen";
import RecoverPasswordScreen from "../screens/RecoverPasswordScreen";
import ChangePasswordScreen from "../screens/ChangePasswordScreen";
import SplashScreen from "../screens/SplashScreen";
import LoginRequiredNoticeScreen from "../screens/LoginRequiredNoticeScreen";
import InviteCodeScreen from "../screens/InviteCodeScreen";
import UpdatePasswordScreen from "../screens/UpdatePasswordScreen";
import EditProfileScreen from "../screens/EditProfileScreen";
import InvitesScreen from "../screens/InvitesSreen";
import ChatScreen from "../screens/ChatScreen";

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Group
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: "#FFFFFF" },
        }}
      >
        <Stack.Screen name={PAGES.SPLASH} component={SplashScreen} />
        <Stack.Screen
          name={PAGES.LOGIN}
          component={LoginScreen}
          options={{
            animation: 'fade'
          }}
        />
        <Stack.Screen name={PAGES.CREATE_ACCOUNT} component={CreateAccountScreen} />
        <Stack.Screen
          name={PAGES.PROFILE_SELECTION}
          component={ProfileSelectionScreen}
        />
        <Stack.Screen name={PAGES.RECORD} component={RecordScreen} />
        <Stack.Screen name={PAGES.MAIN} component={BottomTabNavigation} />
        <Stack.Screen name={PAGES.PROJECT_DETAILS} component={ProjectDetailsScreen} />
        <Stack.Screen name={PAGES.OTHER_USER_PROFILE} component={OtherUserProfileScreen} />
        <Stack.Screen name={PAGES.REQUEST_RECOVER_PASSWORD} component={RecoverPasswordScreen} />
        <Stack.Screen name={PAGES.CHANGE_PASSWORD} component={ChangePasswordScreen} />
        <Stack.Screen name={PAGES.LOGIN_REQUIRED_NOTICE} component={LoginRequiredNoticeScreen} />
        <Stack.Screen name={PAGES.INVITE_CODE} component={InviteCodeScreen} />
        <Stack.Screen name={PAGES.UPDATE_PASSWORD} component={UpdatePasswordScreen} />
        <Stack.Screen name={PAGES.EDIT_PROFILE} component={EditProfileScreen} />
        <Stack.Screen name={PAGES.INVITES} component={InvitesScreen} />
        <Stack.Screen name={PAGES.CHAT} component={ChatScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default StackNavigator;