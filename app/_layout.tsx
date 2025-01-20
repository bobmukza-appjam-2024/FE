import "react-native-reanimated";
import Header from "./components/header/header";
import { View } from "react-native";
import Footer from "./components/footer/footer";
import { Slot } from "expo-router";
import "./reset/reset.css";

export default function RootLayoutNav() {
  return (
    <View style={{ width: "100%", height: "100%", backgroundColor: "#f5f5f5" }}>
      <Header />
      <Slot />
      <Footer />
    </View>
  );
}
