import { View,Text,StyleSheet,Image } from "react-native";

export default function Produtos({titulo, preco, categoria, image}) {
    return(
        <View style={css.caixa}>
            <Image
                style={css.img}
                source={{
                uri: image,
                }}
            />
            <Text style={css.titulo} >{titulo}</Text>
            <Text style={css.preco} >{preco}</Text>
            <Text style={css.categoria} >{categoria}</Text>
        </View>
    )
}
const css = StyleSheet.create({
    container: {
        backgroundColor: "#E7B9AF"
    },
    caixa: {
        width: "40%",
        borderRadius: 5,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: 15,
    },
    titulo: {
        fontWeight: "bold",
        fontSize: 18
    },
    preco: {
        color: "#D10500",
        padding: 8,
        fontSize: 19
    },
    categoria: {
        fontSize: 17,
        fontWeight: "bold"
    },
    img: {
        width: 110,
        height: 100,
        marginTop: 20
    }
})