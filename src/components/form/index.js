import React, { useState } from "react";
import { View, TextInput, Text, TouchableOpacity, Alert } from "react-native";

import { useNavigation } from "@react-navigation/native";

import styles from "./style";

export default function Form() {
    const navigation = useNavigation();

    const [matricula, setMatricula] = useState(null)
    const [senha, setSenha] = useState(null)
    const [textButton, setTextButton] = useState("Acessar")

    const createAlert = () => Alert.alert(
        "Oops!",
        "Verifique se o campo matrícula e senha estão preenchidos."
    );

    function limpaCampos() {
        if (matricula == null || senha == null) {
            createAlert();
        }else{
            navigation.navigate("Home");
        }
    }

    return (
        <View style={styles.formContext}>
            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    onChangeText={setMatricula}
                    value={matricula}
                    placeholder="Matrícula"
                    keyboardType="numeric"
                />

                <TextInput
                    style={styles.input}
                    onChangeText={setSenha}
                    value={senha}
                    placeholder="Senha"
                    keyboardType="numeric"
                    secureTextEntry={true}
                />

                <TouchableOpacity
                    style={styles.buttonClean}
                    onPress={() => limpaCampos()}
                >
                    <Text style={styles.textButtonClean}>{textButton}</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}