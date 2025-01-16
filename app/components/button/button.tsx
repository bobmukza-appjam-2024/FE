import { Text, TouchableOpacity } from "react-native";

const Button = (label: string, func: () => void) => {
  return (
    <TouchableOpacity onPress={func}>
      <Text>{label}</Text>
    </TouchableOpacity>
  );
};

export default Button;
