import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Main from "./pages/main";
import SignUp from "./pages/signup";
import LoginPage from "./pages/login";
import ProfilePage from "./pages/profile";
import EditProfile from "./pages/editProfile";
import WritePage from "./pages/write";
import PostPage from "./pages/post";
import SchedulePage from "./pages/schedule";
import AddSchedulePage from "./addSchedule";
import ChatingPage from "./pages/chating";
import ChatingListPage from "./pages/chatingList";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Chating"
          component={ChatingListPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Chating"
          component={ChatingPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AddSchedule"
          component={AddSchedulePage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Schedule"
          component={SchedulePage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Post"
          component={PostPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Write"
          component={WritePage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="EditProfile"
          component={EditProfile}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Profile"
          component={ProfilePage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Main"
          component={Main}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={LoginPage}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
