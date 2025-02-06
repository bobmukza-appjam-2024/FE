import AsyncStorage from "@react-native-async-storage/async-storage";

export const getSelected = async () => {
  return await AsyncStorage.getItem("selected");
};
