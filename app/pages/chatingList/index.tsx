import { User } from "@/app/entities/user";
import { getUserList } from "@/app/features/chatingList/api/getUserList";
import UserCard from "@/app/features/chatingList/ui/userCard";
import { useEffect, useState } from "react";
import { View, Text } from "react-native";

export default function ChatingListPage() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const userList = await getUserList();
        setUsers(Array.isArray(userList) ? userList : []);
      } catch (error) {
        console.error("Failed to fetch users:", error);
        setUsers([]);
      }
    };

    fetchUsers();
  }, []);

  return (
    <View>
      {users.length > 0 ? (
        users.map((v) => <UserCard key={v.id} user={v} />)
      ) : (
        <Text>Loading or no users found...</Text>
      )}
    </View>
  );
}
