import { View, FlatList, StyleSheet, Text } from "react-native";
import Produtos from "./Produtos";

const dados = [ 
    {
        id: "01",
        titulo: "𝒜𝓃é𝒾𝓈 𝒹𝑒 𝒩𝑜𝒾𝓋𝒶𝒹𝑜",
        preco:"R$ 199,90",
        categoria:"Anel em Prata",
        image: "https://images.tcdn.com.br/img/img_prod/1104305/anel_de_noivado_nazilli_ii_461_1_59ec7bebe9e874b786d4a61b864c765f.png"
    },
    {
        id: "02",
        titulo: "𝒫𝓊𝓁𝓈𝑒𝒾𝓇𝒶𝓈 𝒹𝑒 𝒪𝓊𝓇𝑜",
        preco:"R$ 75,00",
        categoria:"Pulseira Mais Vendida!",
        image: "https://images.tcdn.com.br/img/img_prod/755645/pulseira_corrente_ouro_amarelo_18k_1105_1_8a8e81c88e6439cddfbb61999dcf67f2.jpeg"
    },
    {
        id: "03",
        titulo: "𝒞𝑜𝓃𝒿𝓊𝓃𝓉𝑜 𝒹𝑒 𝐵𝓇𝒾𝓃𝒸𝑜 𝑒 𝒞𝑜𝓁𝒶𝓇",
        preco:"R$ 100,00",
        categoria:"Conjuto Incrível com detalhe em pedras!",
        image: "https://images.tcdn.com.br/img/img_prod/824010/conjunto_de_coracao_brinco_e_colar_com_pedras_banhado_1217_1_33b70fae7bf7554bf0fee15758d47c6b.jpg"
    },
    {
        id: "04",
        titulo: "𝒯𝑜𝓇𝓃𝑜𝓏𝑒𝓁𝑒𝒾𝓇𝒶 𝒹𝑒 𝒪𝓊𝓇𝑜 𝒸𝑜𝓂 𝒟𝑒𝓉𝒶𝓁𝒽𝑒𝓈",
        preco: "R$ 59,99",
        categoria: "Tornozeleiras incriveís!",
        image: "https://images.tcdn.com.br/img/img_prod/905432/tornozeleira_joia_feminina_mix_de_coracoes_banho_ouro_20127_1_2439ef45c65dbb872c2b85378ae5600e.jpg"
    }

]



export default function Itens( {navigation} )
{
    return(
        <View style={[css.container, {backgroundColor: "#E7B9AF" }]}>
            <Text style={css.titulos}>Mais Vendidos:</Text>
            <FlatList 
            data={dados}
            renderItem={ ({item}) => 
            <Produtos
            titulo={item.titulo} 
            preco={item.preco} 
            categoria={item.categoria}             
            image={item.image}
            />
            }
            keyExtractor={ item => item.id }
            contentContainerStyle={css.container}
            horizontal={false}
            numColumns={2}
            />
        </View>
    )
}

const css = StyleSheet.create({
    container: {
        height: "100%",
        width: "100%",
        display: "flex",
        justifyContent: "center"
    },
    titulos: {
        fontSize: 50,
        textAlign: "center",
        marginTop: 60,
        color: "#C94EEB"
    }
})
