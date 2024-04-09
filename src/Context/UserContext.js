import { createContext, useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

export const UserContext = createContext();

function UserProvider({children})
{
    const[ usuario, setUsuario ] = useState(null);
    const[ logado, setLogado ] = useState( false );

    async function Login( email, senha ) 
    {
        if( email == "ana@busch.com" && senha == "12345" )
        {
            await AsyncStorage.setItem( "usuario" , "Ana Júlia" );
            setLogado( true );
        }
        
    }
    async function infoUsuario()
    {
        const usuario = await AsyncStorage.getItem( "usuario" );
        if( usuario ) {
            setUsuario( usuario );
            setLogado( true );
        }
    }
    useEffect( () => {
        infoUsuario();
    }, [] );


    return (
        <UserContext.Provider value={ { usuario: usuario, logado: logado , Login, infoUsuario } }>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider;