import { useEffect, useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { getMessage } from "../api/getMessage";
import { Chat } from "@/app/entities/chat";

const ShowChat = ({ id }: { id: string }) => {
  const [chats, setChats] = useState<Chat[]>([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchMessages = async () => {
      const messages = await getMessage(id);
      setChats(messages);
    };

    fetchMessages();
    const interval = setInterval(fetchMessages, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <View>
      {chats.map((chat) =>
        chat.senderId === Number(id) ? (
          <Text key={chat.id}>{chat.content}</Text>
        ) : (
          <Text key={chat.id}>
            {chat.senderId}: {chat.content}
          </Text>
        )
      )}
      <View>
        <TextInput onChangeText={(text) => setMessage(text)} value={message} />
        <TouchableOpacity>
          <Text>&gt;</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ShowChat;
