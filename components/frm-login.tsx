import { auth } from "@/lib/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";

import {
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from "react-native";

import { router } from "expo-router";

export default function LoginForm() {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const validarLogin = async () => {
        const credenciais = await signInWithEmailAndPassword(
            auth,
            email,
            senha
        );
        router.push("/(tabs)");
    }

    return(
        <View>
            <TextInput />
            <TextInput />
            <TouchableOpacity onPress={validarLogin}>
                <Text>Entrar</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({

})