import React from "react";
import { View, Text, Button } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { MainStackParamList } from "../MainStackScreen";
import { styles } from "./HomeScreen.styles";

interface Props {
  navigation: StackNavigationProp<MainStackParamList, "HomeScreen">;
}

export default function HomeScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Socials App!</Text>
      <Button
        title="View Events"
        onPress={() => navigation.navigate("FeedScreen")}
      />
      <Button
        title="Create New Event"
        onPress={() => navigation.navigate("NewSocialScreen")}
      />
    </View>
  );
}
