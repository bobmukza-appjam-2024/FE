import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { getMessage } from "../api/getMessage";
import { Chat } from "@/app/entities/chat";

const ShowChat = () => {
  const [chats, setChats] = useState<Chat[]>();
  const [message, setMessage] = useState("");
  useEffect(() => {
    setInterval(async () => {
      setChats(await getMessage("1"));
    }, 10000);
  }, []);
  return (
    <View>
      {chats?.map((chat) =>
        chat.senderId === 1 ? (
          <Text>{chat.content}</Text>
        ) : (
          <Text>
            {chat.senderId}: {chat.content}
          </Text>
        )
      )}
    </View>
  );
};

export default ShowChat;
