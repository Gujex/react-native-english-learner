import { StyleSheet, View, Text } from "react-native";
import AuthScreen from "@/components/auth/authorization-screen";
import { useState } from "react";
export default function HomeScreen() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  return <>{isAuthenticated ? <View></View> : <AuthScreen />}</>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // This makes the View take up the entire screen
    backgroundColor: "black", // Set a background color
    justifyContent: "center", // Center content vertically
    alignItems: "center", // Center content horizontally
  },
  text: {
    color: "white",
  },
});
