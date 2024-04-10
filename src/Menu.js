import { View, StyleSheet, Switch, Text } from "react-native";
import React, {useState, useEffect, useContext} from 'react';
import { StatusBar } from "expo-status-bar";
import { useBatteryLevel } from 'expo-battery';
import * as Network from "expo-network";
import UserContext from "./Context/UserContext";

export default function Home( {navigation} )
{
    const [ ativado, setAtivado ] = useState( false );
    const [ cor, setCor ] = useState( "white" );
    const [ bateria, setBateria ] = useState();
    const [ rede, setRede ] = useState( false );


    const {usuario} = useContext( UserContext );


    const batteryLevel = useBatteryLevel();
    
    async function getStatus()
    {
        const status = await Network.getNetworkStateAsync();
        if( status.type == "WIFI" ) {
            setRede( true );
        }
    }

    useEffect( () =>  {
        getStatus();
    } , [] );

    useEffect( () =>  {
        getStatus();
    } , [rede] );

    useEffect( () => {
        setBateria( ( batteryLevel * 100 ).toFixed(0) );
    }, [batteryLevel] );

    function CliqueSwitch()
    {
        setAtivado( !ativado );
        if( !ativado ) {
            setCor( 'black' );
        } else {
            setCor( 'white' );
        }
    }

    return(
        <View style={[CSS.container, {backgroundColor: cor }]}>
            <Text>Bem Vindo: {usuario} </Text>
            { bateria > 20 ?
            <Switch
                trackColor={{false: 'lightgrey', true: 'lightgrey'}}
                thumbColor={ ativado ? 'blue' : 'gray'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={CliqueSwitch}
                value={ativado}
            />
            : <Text>Recarregar o celular</Text>}
            <Text>{bateria}%</Text>
            { rede ? <Text>Recursos Premium</Text> : <Text>Conecte no seu WIFI</Text> }
            <StatusBar />
        </View>
    )
}
const CSS = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
  });
