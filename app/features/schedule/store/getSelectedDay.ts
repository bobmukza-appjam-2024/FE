import AsyncStorage from "@react-native-async-storage/async-storage";

export const getSelected = async () => {
  const selected = await AsyncStorage.getItem("selected");
  return selected;
};
