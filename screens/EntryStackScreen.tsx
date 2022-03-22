import { RootStackScreen } from "./RootStack/RootStackScreen";

export function EntryStackScreen() {
  // In Part B, we will add logic here that
  // keeps track of the Authentication State. If a user is signed in,
  // this screen will return the RootStack. Otherwise, this screen will
  // return the MainStack. For now, we just return the RootStack.
  return <RootStackScreen />;
}
