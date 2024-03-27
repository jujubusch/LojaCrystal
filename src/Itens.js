import { View, FlatList, StyleSheet } from "react-native";
import Produtos from "./Produtos";

const dados = [ 
    {
        id: "01",
        titulo: "𝒜𝓃é𝒾𝓈 𝒹𝑒 𝒩𝑜𝒾𝓋𝒶𝒹𝑜",
        img: "Anel Noivado"
    },
    {
        id: "02",
        titulo: "Pulseiras de Ouro",
        img: "𝒫𝓊𝓁𝓈𝑒𝒾𝓇𝒶𝓈 𝒹𝑒 𝒪𝓊𝓇𝑜"
    },
    {
        id: "03",
        titulo: "Tênis Puma",
        preco: 109.99,
        categoria: "Social",
        data: "30/10/2023"
    },
    {
        id: "04",
        titulo: "Tênis Vans",
        preco: 299.99,
        categoria: "Simples",
        data: "16/11/2023"
    },
    {
        id: "05",
        titulo: "Tênis Mizuno",
        preco: 89.99,
        categoria: "Esportivo",
        data: "10/04/2024"
    },
    {
        id: "06",
        titulo: "Tênis Olympikus",
        preco: 149.99,
        categoria: "Esportivo",
        data: "03/06/2023"
    },
    {
        id: "07",
        titulo: "Tênis Fila",
        preco: 349.99,
        categoria: "Social",
        data: "04/03/2024"
    },
    {
        id: "08",
        titulo: "Tênis Capricho",
        preco: 39.90,
        categoria: "Infantil",
        data: "02/10/2023"
    },
    {
        id: "09",
        titulo: "Tênis Versace",
        preco: 849.99,
        categoria: "Chique e Social",
        data: "05/01/2024"
    },
    {
        id: "10",
        titulo: "Tênis Channel",
        preco: 179.99,
        categoria: "Social",
        data: "08/04/2024"
    },
    {
        id: "11",
        titulo: "Tênis Dolce Gabbana",
        preco: 329.99,
        categoria: "Social e Chique",
        data: "28/01/2023"
    },
    {
        id: "12",
        titulo: "Tênis Gucci",
        preco: 839.99,
        categoria: "Chique",
        data: "09/08/2024"
    },
]



export default function Itens( {navigation} )
{
    return(
        <View >
            <FlatList 
            data={dados}
            renderItem={ ({item}) => 
            <Produto 
            titulo={item.titulo} 
            preco={item.preco} 
            categoria={item.categoria} 
            data={item.data} 
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
        width: "100%",
        display: "flex",
        justifyContent: "center"
    }
})
