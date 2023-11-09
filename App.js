import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider } from "react-redux";
import store from "./context/store";
import Homescreen from "./pages/Home";
import Loginscreen from "./pages/Login";
import RegisterScreen from "./pages/Register";
import Displayscreen from "./pages/Display";
import UserInfoScreen from "./pages/UserInfo";
import UsersViewScreen from "./pages/UsersView";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Homescreen} />
          <Stack.Screen name="Login" component={Loginscreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="Display" component={Displayscreen} />
          <Stack.Screen name="User Info" component={UserInfoScreen} />
          <Stack.Screen name="Users View" component={UsersViewScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
