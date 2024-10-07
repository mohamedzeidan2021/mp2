import React from "react";
import { Button } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import FeedScreen from "./FeedScreen/FeedScreen.main";
import DetailScreen from "./DetailScreen/DetailScreen.main";
import NewSocialScreen from "../NewSocialScreen/NewSocialScreen.main";
import HomeScreen from "./HomeScreen/HomeScreen";
import ConfirmationScreen from "./ConfirmationScreen/ConfirmationScreen";
import { SocialModel } from "../../../models/social";

export type MainStackParamList = {
  HomeScreen: undefined;
  FeedScreen: undefined;
  DetailScreen: { social: SocialModel };
  NewSocialScreen: undefined;
  ConfirmationScreen: undefined;
};

const MainStack = createStackNavigator<MainStackParamList>();

export function MainStackScreen() {
  return (
    <MainStack.Navigator initialRouteName="HomeScreen">
      <MainStack.Screen
        name="HomeScreen"
        options={{ headerShown: false }}
        component={HomeScreen}
      />
      <MainStack.Screen
        name="FeedScreen"
        component={FeedScreen}
        options={({ navigation }) => ({
          title: "Socials",
          headerLeft: () => (
            <Button
              title="Home"
              onPress={() => navigation.goBack()}
            />
          ),
          headerTitle: "All Socials",
        })
        }
      />
      <MainStack.Screen
        name="DetailScreen"
        options={{ headerShown: false }}
        component={DetailScreen}
      />
      <MainStack.Screen
        name="NewSocialScreen"
        options={{ headerShown: false }}
        component={NewSocialScreen}
      />
      <MainStack.Screen
        name="ConfirmationScreen"
        options={{ headerShown: false }}
        component={ConfirmationScreen}
      />
    </MainStack.Navigator>
  );
}
