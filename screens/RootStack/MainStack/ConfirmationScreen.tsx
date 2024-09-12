import React from "react";
import { View, Text, Button } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { MainStackParamList } from "./MainStackScreen";
import { styles } from "./ConfirmationScreen.styles";

interface Props {
  navigation: StackNavigationProp<MainStackParamList, "ConfirmationScreen">;
}

export default function ConfirmationScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.message}>Your event has been successfully created!</Text>
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate("HomeScreen")}
      />
      <Button
        title="View Events"
        onPress={() => navigation.navigate("FeedScreen")}
      />
    </View>
  );
}
