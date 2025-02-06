import { User } from "@/app/entities/user";
import { getUserList } from "@/app/features/chatingList/api/getUserList";
import UserCard from "@/app/features/chatingList/ui/userCard";
import { useEffect, useState } from "react";
import { View } from "react-native";

export default function ChatingListPage() {
  const [users, setUsers] = useState<User[]>([]);
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const userList = await getUserList();
        setUsers(userList);
      } catch (error) {
        console.error("Failed to fetch users:", error);
      }
    };
    fetchUsers();
  }, []);
  return (
    <View>
      {users.map((v) => {
        return <UserCard key={v.id} user={v} />;
      })}
    </View>
  );
}
