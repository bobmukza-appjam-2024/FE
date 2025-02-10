import ShowPosts from "@/app/features/main/ui/showPosts";
import { Container } from "./styles";
import { Text } from "react-native";
import Plus from "@/app/svgs/plus";
import { Link } from "expo-router";

export default function Main() {
  return (
    <Container>
      <ShowPosts />
      <Link
        style={{
          width: "100%",
          borderWidth: 1,
          alignItems: "center",
          justifyContent: "center",
          padding: 10,
          borderRadius: 12,
          borderColor: "#a1a1a1",
          textAlign: "center",
          gap: 10,
        }}
        href={"/pages/write"}
      >
        <Text style={{ fontSize: 14 }}>밥 약속 추가하기</Text>
        <Plus />
      </Link>
    </Container>
  );
}
