import React, { useState } from 'react';
import { Modal, Text, Pressable, View, TextInput, Alert } from 'react-native';

import styles from './style';

const Cadastro = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [email, setemail] = useState(null);

    function closeModalAndEnviaEmail(){
        if(email != null){
            setModalVisible(!modalVisible);
            emailEnviadoComSucesso()
            setemail(null)
        } else {
            createAlert()
        }
    }

    const emailEnviadoComSucesso = () => Alert.alert(
        "Sucesso!",
        "Você recebera um e-mail para recuperação de senha!"
    ); 

    const createAlert = () => Alert.alert(
        "Oops!",
        "É necessário preencher o campo com seu e-mail!"
    );

    return (
        <View style={styles.centeredView}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>
                            Olá querido aluno.
                            Seu trabalho vai ser criar esse Modal para recuperar a senha!
                            LEMBRE! Você vai ter abrir esse modal dentro da tela de login.
                        </Text>
                        <TextInput
                            style={styles.inputEmail}
                            onChangeText={setemail}
                            value={email}
                            placeholder="digite seu e-mail"
                        />
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => closeModalAndEnviaEmail()}>
                            <Text style={styles.textStyle}>Enviar</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
            <Pressable
                style={[styles.button, styles.buttonOpen]}
                onPress={() => setModalVisible(true)}>
                <Text style={styles.textStyle}>Exibir Modal</Text>
            </Pressable>
        </View>
    );
};

export default Cadastro;