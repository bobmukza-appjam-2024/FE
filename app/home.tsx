import { View } from "react-native";
import Icon from "./svgs/icon";
import { useRouter } from "expo-router";

export function Start() {
  const r = useRouter();
  setTimeout(() => {
    r.push("/pages/main");
  }, 3000);
  return (
    <View>
      <Icon />
    </View>
  );
}
