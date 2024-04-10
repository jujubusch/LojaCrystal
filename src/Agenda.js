import { useState, useEffect } from "react";
/*import uuid from 'react-native-uuid';*/
import { StyleSheet, Text, TextInput, TouchableOpacity, View, FlatList, Keyboard, Platform } from "react-native";
import ListaAgendas from "./ListaAgendas";
import * as Calendar from 'expo-calendar';

export default function Agenda()
{
    const[ agenda, setAgenda ] = useState();
    const[ Dia, setDia ] = useState();
    const[ Hora, SetHora ] = useState();
    const[ Acompanhantes, setAcompanhantes ] = useState();
    const[ dados, setDados ] = useState([]);

    async function getPermissions()
    {
        const { status } = await Calendar.requestCalendarPermissionsAsync();
        if (status === 'granted') {
        const calendars = await Calendar.getCalendarsAsync(Calendar.EntityTypes.EVENT);
        }
    }

    useEffect(() => {
        getPermissions();
    },[]);

    async function Salvar()
    {
        if( agenda != "" && Dia != "" && Hora != "" && Acompanhantes != "" ) {
            Keyboard.dismiss();
            const evento = {
                id: uuid.v4(),
                nome: agenda,
                Dia: Dia,
                Hora: Hora,
                Acompanhantes: Acompanhantes
            };
            const novoEvento = [ ...dados , evento ];
            setDados( novoEvento );
            setAgenda( "" );
            setDia( "" );
            SetHora( "" );
            setAcompanhantes( "" );

            const defaultCalendarSource = 
            Platform.OS === 'ios'
            ? await Calendar.getDefaultCalendarAsync()
            : { isLocalAccount: true, name: 'Expo Calendar' };

            const newCalendarID = await Calendar.createCalendarAsync({
                title: 'Expo Calendar',
                color: 'blue',
                entityType: Calendar.EntityTypes.EVENT,
                sourceId: defaultCalendarSource.id,
                source: defaultCalendarSource,
                name: 'intertnalCalendarName',
                ownerAccount: 'personal',
                accessLevel: Calendar.CalendarAccessLevel.OWNER,
            });

            let inicioDiaHora = Dia.split(" ");
            let Dia = inicioDiaHora[0].split("-");
            let inicioHora = inicioDiaHora[1].split(".");

            let FinalDiaHora = Dia.split(" ");
            let FinalDia = FinalDiaHora[0].split("-");
            let finalHora = FinalDiaHora[1].split(".");

            const newEvent = {
                title: agenda,
                startDate: new Date(inicioDia[2], inicioDia[1] -1 , inicioDia[0], inicioHora[0], inicioHora[1]),
                endDate: new Date(finalHora[2], finalHora[1] -1 , finalHora[0], FinalDia[0], FinalDia[1]),
                location: 'Crystal Joias',
                notes: 'Ana',
            };

            try {
                await Calendar.createEventAsync(newCalendarID, newEvent);
                alert('Agendamento Criado com Sucesso!');
            } catch (error) {
                alert('Erro ao criar agendamento!');
            }

        }
    }

    return(
        <View>
            <View style={css.container}>
                <TextInput 
                placeholder="Seu Nome" 
                style={css.input}
                TextInput={agenda}
                onChangeText={ (digitado) => setAgenda( digitado ) }
                value={agenda}
                />
                <TextInput 
                placeholder="Dia" 
                style={css.input}
                TextInput={Dia}
                onChangeText={ (digitado) => setDia( digitado ) } 
                value={Dia}
                keyboardType="numeric"
                />
                <TextInput 
                placeholder="Hora" 
                style={css.input}
                TextInput={Hora}
                onChangeText={ (digitado) => SetHora( digitado ) } 
                value={Hora}
                keyboardType="numeric"
                />
                <TextInput 
                placeholder="Acompanhantes(Até 2 Pessoas)" 
                style={css.input} 
                TextInput={Acompanhantes}
                onChangeText={ (digitado) => setAcompanhantes( digitado ) }
                value={Acompanhantes}
                />
                <TouchableOpacity style={css.btn} onPress={Salvar}>
                    <Text style={css.btnTexto}>AGENDAR</Text>
                </TouchableOpacity>
            </View>
            <FlatList 
            data={dados}
            renderItem={ ({item}) => 
            <ListaAgendas 
            nome={item.nome} 
            Dia={item.Dia}
            Hora={item.Hora}
            Acompanhantes={item.Acompanhantes}
            />
            } 

            keyExtractor={ item => item.id }
            contentContainerStyle={css.lista}
            horizontal={false}
            /> 
        </View>
    )
}

const css = StyleSheet.create({
    input: {
        width: "90%",
        height: 70,
        borderRadius: 5,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: 15, 
        borderWidth: 1
    },
    btn: {
        backgroundColor: "#EF8DF5",
        width: "85%",
        height: 40,
        alignItems: "center",
        marginLeft: 25,
        marginTop: 10,
        borderRadius: 5
    },
    btnTexto: {
        fontWeight: "bold",
        fontSize: 25,
        marginTop: 3
    }
})