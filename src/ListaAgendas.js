import { View, Text, StyleSheet } from "react-native";

export default function ListaAgendas({nome, Dia, Hora, Acompanhantes}) {
    return(
        <View>
            <Text style={css.lista} >{nome}</Text>
            <Text style={css.Lista2} >{Dia}</Text>
            <Text style={css.Lista2} >{Hora}</Text>
            <Text style={css.Lista2} >{Acompanhantes}</Text>

        </View>
    )
}
const css = StyleSheet.create({
    lista: {
        color: "#F5002A",
        fontWeight: "bold",
        fontSize: 25,
        marginTop: 30,
        backgroundColor: "#CAA2F5",
        width: "70%",
        height: 40,
        textAlign: "center",
        marginLeft: 20,
        borderRadius: 5
    },
    Lista2: {
        color: "#0000A1",
        fontWeight: "bold",
        fontSize: 25,
        
        backgroundColor: "#CAA2F5",
        width: "70%",
        height: 40,
        textAlign: "center",
        marginLeft: 20,
        borderRadius: 5
    }
})