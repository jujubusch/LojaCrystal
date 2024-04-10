import { View, Text, StyleSheet, FlatList } from "react-native";
import Produtos from "./Produtos";

const dados = [ 
    {
        id: "01",
        titulo: "Corrente Masculina de Ouro",
        preco:"R$ 59,99",
        image: "https://images.tcdn.com.br/img/img_prod/680812/colar_masculino_sao_bento_folheada_a_ouro_18k_36103635_1_20191024085744.jpg"
    },
    {
        id: "02",
        titulo: "Conjunto infantil em formato de borboleta",
        preco:"R$ 149,99",
        image: "https://devtoquedejoia.brtloja.com.br/wp-content/uploads/2020/10/conjunto-infantil-semijoia-brinco-pulseira-e-colar-joaninha-copy-0818_6578.jpegg"
    }
]

export default function Carrinho() {
    return(
        <View style={[css.Container, {backgroundColor: "#E7B9AF" }]}>
            <Text style={css.titulo}>Seu Carrinho:</Text>
            <FlatList 
            data={dados}
            renderItem={ ({item}) => 
            <Produtos
            titulo={item.titulo} 
            preco={item.preco}            
            image={item.image}
            />
            }
            keyExtractor={ item => item.id }
            contentContainerStyle={css.Container}
            horizontal={false}
            numColumns={2}
            />
        </View>
    )
}
const css = StyleSheet.create({
    Container: {
        height: "100%"
    },
    titulo: {
        fontSize: 40,
        textAlign: "center",
        marginTop: 30
    }
})