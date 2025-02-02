import "react-native-reanimated";
import Header from "./components/header/header";
import { View } from "react-native";
import Footer from "./components/footer/footer";
import { Slot, Redirect, useRootNavigationState } from "expo-router";

export default function RootLayoutNav() {
  const navigationState = useRootNavigationState();

  if (!navigationState?.key) return null;

  return (
    <View style={{ width: "100%", height: "100%", backgroundColor: "#f5f5f5" }}>
      <Header />
      <Redirect href="/pages/login" />
      <Slot />
      <Footer />
    </View>
  );
}
