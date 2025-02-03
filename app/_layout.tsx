import "react-native-reanimated";
import Header from "./components/header/header";
import { View } from "react-native";
import Footer from "./components/footer/footer";
import { Slot, useSegments } from "expo-router";

export default function RootLayoutNav() {
  const segments = useSegments() as string[];
  const hideBottomBar =
    segments.includes("login") || segments.includes("signup");
  return (
    <View style={{ width: "100%", height: "100%", backgroundColor: "#f5f5f5" }}>
      <Header />

      <Slot />
      {!hideBottomBar && <Footer />}
    </View>
  );
}
