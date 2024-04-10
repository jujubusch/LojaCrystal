import { Text, View, StyleSheet, TextInput, Button, TouchableOpacity, Image } from "react-native";

import Agenda from "./Agenda";

export default function Home( {navigation} ) {
    return (
        <View style={[css.container, {backgroundColor: "#E7B9AF" }]}>
            <Text style={css.titulo}>𝓙ó𝓲𝓪𝓼 </Text>
            <Text style={css.Caixinhas}>Mulheres</Text>
            <Text style={css.Caixinhas2}>Homens</Text>
            <Text style={css.Caixinhas2}>Jóias Infantis</Text>
            <Text style={css.Caixinhas2}>Coleções</Text>
            <Text style={css.Caixinhas2}>Agende Sua Visita:</Text>
            <Text style={css.Caixinhas2}>Localizar Minhas Compras</Text>
        </View>
    )
}
const css = StyleSheet.create ({
    container: {
        fontSize: 50,
        
        height:"100%"
    },
    titulo: {
        fontSize: 50,
        marginTop: 80,
        marginLeft: 120
    },
    Caixinhas: {
        backgroundColor: "#FF8282",
        marginTop: 70,
        height: 45,
        fontSize: 25
    },
    Caixinhas2: {
        backgroundColor: "#FF8282",
        marginTop: 15,
        height: 45,
        fontSize: 25
    }
})