import "react-native-reanimated";
import Header from "./components/header/header";
import { View } from "react-native";
import Footer from "./components/footer/footer";

export default function RootLayoutNav() {
  return (
    <View style={{ width: "100%", height: "100%" }}>
      <Header />
      <Footer />
    </View>
  );
}
