import React, { useState } from "react";
import { View, TextInput, Button, Text, TouchableOpacity } from "react-native";

import styles from "./style";

export default function Form() {

    const [matricula, setMatricula] = useState(null)
    const [senha, setSenha] = useState(null)
    const [textButton, setTextButton] = useState("Entrar")

    function limpaCampos() {
        setMatricula(null)
        setSenha(null)
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
                />

                <TouchableOpacity
                    style={styles.buttonClean}
                    onPress={() => limpaCampos()}
                >
                    <Text style={styles.textButtonClean}>{textButton}</Text>
                </TouchableOpacity>

                {/* <Button
                    onPress={() => limpaCampos()} 
                    title="ENTRAR"/> */}
            </View>
        </View>
    )
}