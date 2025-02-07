import ShowChat from "@/app/features/chating/ui/showChat";
import { useLocalSearchParams } from "expo-router";
import { View } from "react-native";

export default function ChatingPage() {
  const { id } = useLocalSearchParams();
  return (
    <View>
      <ShowChat id="id" />
    </View>
  );
}
