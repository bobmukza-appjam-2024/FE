import { PostType } from "@/app/entities/post";
import { Text, View } from "react-native";

const Post = (Post: PostType) => {
  return (
    <View>
      <Text>{Post.createdAt}</Text>
      <View>
        <Text>{Post.menuName}</Text>
        <Text>{Post.mealTime}</Text>
      </View>
      <Text>{Post.location}</Text>
    </View>
  );
};

export default Post;
