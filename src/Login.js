import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import React, { useContext, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { UserContext } from "./Context/UserContext";

export default function Login() {

    const[ email, setEmail ] = useState("");
    const[ senha, setSenha ] = useState()
    const[ erro, setErro ] = useState( false );

    const {Login} = useContext( UserContext );

    function realizaLogin()
    {
        Login( email, senha );
    }

    return(
        <View style={css.container}> 
            <Image
            style={css.image}
            source="./assets/LogoJoias"
            contentFit="cover"
            transition={1000}
            />
            <TextInput 
            placeholder='Email:' 
            style={css.input} 
            value={email}
            onChangeText={ (digitado) => setEmail( digitado ) }
            />
            <TextInput 
            placeholder='Senha:' 
            style={css.input} 
            value={senha}
            onChangeText={ (digitado) => setSenha( digitado ) }
            />
            <TouchableOpacity style={css.btnTexto} onPress={() => Login( email, senha )}>
                <Text style={css.btnCaixa}>Entrar ♛</Text>
            </TouchableOpacity>
        </View>
    )
}
const css = StyleSheet.create ({
    container: {
        marginTop: 300,
        marginLeft:80,
        
    },
    input: {
        fontSize: 25,
        backgroundColor: "#D9D9D9",
        color: "black",
        marginTop: 10,
        width: 230,
        height: 70,
        borderRadius: 10,
        textAlign: "center"
    },
    btnTexto: {
        marginTop: 25,
        backgroundColor: "#960000",
        marginLeft: 50,
        height: 50,
        width: 130,
        borderRadius: 10
    },
    btnCaixa : {
        fontSize: 23,
        color: "white",
        textAlign: "center",
        marginTop: 10
    }
}) 