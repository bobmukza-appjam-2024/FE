import { View } from "react-native";

interface InputProps {
  label: string;
  setValue: (value: string) => void;
}

const Input = ({ label, setValue }: InputProps) => {
  return (
    <View>
      <label htmlFor={label}></label>
      <input id={label} onChange={(e) => setValue(e.target.value)} />;
    </View>
  );
};
export default Input;
