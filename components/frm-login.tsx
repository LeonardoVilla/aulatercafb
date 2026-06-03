import { auth } from "@/lib/firebase"; // seu arquivo
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { Button, KeyboardAvoidingView, Platform, StyleSheet, TextInput, View } from "react-native";
import { router } from "expo-router";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {

      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

    router.push("/(tabs)");
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          autoCapitalize="none"
          keyboardType="email-address"
          onChangeText={setEmail}
          value={email}
        />

        <TextInput
          style={styles.input}
          placeholder="Senha"
          secureTextEntry
          onChangeText={setPassword}
          value={password}
        />

        <Button title="Entrar" onPress={handleLogin} />
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  form: {
    paddingHorizontal: 24,
    gap: 12,
  },
  input: {
    height: 48,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 12,
    fontSize: 16,
  },
});