import React, { useState } from 'react';
import { View, KeyboardAvoidingView, Platform, Image, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

import api from '../services/api';
import logo from '../assets/logo.png';

import axios from 'axios';

export default function Login() {
    const [user, setUser] = useState('');

    async function handleSubmit() {
        var config = {
          headers: { 'Content-Type': 'multipart/form-data' }
        };
        const data = new FormData();
        data.append('user', user);
        
        axios.post("http://mypersonalfit.com.br/sessions", data, config)
        .then(function(response){
            console.log(response.data);
        })
        // const { success } = response.data;
        // console.log(user);
    }
    return (
        <KeyboardAvoidingView enabled={Platform.OS == 'ios'} behavior="padding" style={styles.container}>
            <Image source={logo} />

            <View style={styles.form}>
                <Text style={styles.label}>USUÁRIO *</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Seu usuário"
                    placeholderTextColor="#999"
                    autoCapitalize="none"
                    autoCorrect={false}
                    value={user}
                    onChangeText={setUser}
                />
                <TouchableOpacity onPress={handleSubmit} style={styles.button}>
                    <Text style={styles.buttonText}>Entrar</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    form: {
        alignSelf: 'stretch',
        paddingHorizontal: 30,
        marginTop: 30,
    },
    label:{
        fontWeight: 'bold',
        color: '#444',
        marginBottom: 8,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        paddingHorizontal: 20,
        fontSize: 16,
        color: '#444',
        height: 44,
        marginBottom: 20,
        borderRadius: 10,
    },
    button: {
        height: 42,
        backgroundColor: '#D91F3C',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
});
