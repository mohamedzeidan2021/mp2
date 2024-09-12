import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { MainStackScreen } from "./MainStack/MainStackScreen";
import NewSocialScreen from "./NewSocialScreen/NewSocialScreen.main";
import { NavigationContainer } from "@react-navigation/native";
import ConfirmationScreen from "./MainStack/ConfirmationScreen";

export type RootStackParamList = {
  Main: undefined;
  NewSocialScreen: undefined;
  ConfirmationScreen: undefined;
};

const RootStack = createStackNavigator<RootStackParamList>();

export function RootStackScreen() {
  const options = { headerShown: false };
  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{ presentation: 'modal' }} initialRouteName="Main">
        <RootStack.Screen
          name="Main"
          component={MainStackScreen}
          options={options}
        />
        <RootStack.Screen
          name="NewSocialScreen"
          options={options}
          component={NewSocialScreen}
        />
        <RootStack.Screen
          name="ConfirmationScreen"
          options={options}
          component={ConfirmationScreen}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
