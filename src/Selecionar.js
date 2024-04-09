import { Text, View, StyleSheet, TextInput, Button, TouchableOpacity } from "react-native";

import Agenda from "./Agenda";

export default function Home( {navigation} ) {
    return (
        <View>
            <Text style={css.container}>𝓙ó𝓲𝓪𝓼 </Text>
            <Text style={css.Caixinhas}>Mulheres</Text>
            <Text style={css.Caixinhas2}>Homens</Text>
            <Text style={css.Caixinhas3}>Jóias Infantis</Text>
            <Text style={css.Caixinhas4}>Coleções</Text>
            <TouchableOpacity style={css.btnTexto} onPress={() => Agenda}>
                <Text style={css.btnCaixa}>Agende Sua Visita:</Text>
            </TouchableOpacity>

        </View>
    )
}
const css = StyleSheet.create ({
    container: {
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
    },
    Caixinhas3: {
        backgroundColor: "#FF8282",
        marginTop: 15,
        height: 45,
        fontSize: 25
    },
    Caixinhas4: {
        backgroundColor: "#FF8282",
        marginTop: 15,
        height: 45,
        fontSize: 25
    }
})