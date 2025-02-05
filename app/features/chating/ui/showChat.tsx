import { useEffect, useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { getMessage } from "../api/getMessage";
import { Chat } from "@/app/entities/chat";
import { getToken } from "../../login/api/getToken";
import Input from "@/app/components/input/input";

const ShowChat = () => {
  const token = getToken();
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
        chat.senderId === Number(token) ? (
          <Text>{chat.content}</Text>
        ) : (
          <Text>
            {chat.senderId}: {chat.content}
          </Text>
        )
      )}
      <View>
        <TextInput onChangeText={(text) => setMessage(text)} />
        <TouchableOpacity>
          <Text>&gt;</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ShowChat;
