import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import {
  TextInput,
  Button,
  Text,
  Card,
  Title,
  Provider as PaperProvider,
} from "react-native-paper";

export default function AuthScreen() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLogin, setIsLogin] = useState(true); // Toggle between login and signup
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Placeholder login/signup function
  const handleAuth = () => {
    if (!email || !password || (!isLogin && password !== confirmPassword)) {
      alert(
        isLogin
          ? "Please fill in all fields correctly."
          : "Passwords do not match.",
      );
      return;
    }
    setIsAuthenticated(true); // Placeholder logic for authentication
  };

  const handleToggle = () => {
    setIsLogin(!isLogin);
    setEmail("");
    setPassword("");
  };

  if (isAuthenticated) {
    return (
      <View style={styles.container}>
        <Text style={styles.welcomeText}>Welcome to the Main Screen!</Text>
        <Button
          mode="contained"
          onPress={() => setIsAuthenticated(false)}
          style={styles.button}
        >
          Logout
        </Button>
      </View>
    );
  }

  return (
    <PaperProvider>
      <View style={styles.authContainer}>
        <Card style={styles.card}>
          <Card.Content>
            <Title style={styles.title}>{isLogin ? "Login" : "Sign Up"}</Title>
            <TextInput
              label="Email"
              value={email}
              onChangeText={setEmail}
              mode="outlined"
              style={styles.input}
              keyboardType="email-address"
              autoCapitalize="none"
            />
            <TextInput
              label="Password"
              value={password}
              onChangeText={setPassword}
              mode="outlined"
              secureTextEntry
              style={styles.input}
            />
            {!isLogin && (
              <TextInput
                label="Confirm Password"
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                mode="outlined"
                secureTextEntry
                style={styles.input}
              />
            )}

            <Button mode="contained" onPress={handleAuth} style={styles.button}>
              {isLogin ? "Login" : "Sign Up"}
            </Button>
            <Button
              mode="text"
              onPress={handleToggle}
              style={styles.toggleButton}
            >
              {isLogin
                ? "Don't have an account? Sign Up"
                : "Already have an account? Login"}
            </Button>
          </Card.Content>
        </Card>
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f8f9fa",
  },
  authContainer: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#f8f9fa",
  },
  card: {
    padding: 16,
  },
  title: {
    fontSize: 24,
    textAlign: "center",
    marginBottom: 16,
  },
  input: {
    marginBottom: 16,
  },
  button: {
    marginVertical: 8,
  },
  toggleButton: {
    marginTop: 8,
  },
  welcomeText: {
    fontSize: 24,
    marginBottom: 16,
  },
});
