import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useContext } from 'react';
import { UserContext } from './Context/UserContext';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Login from './Login';
import Itens from "./Itens";
import Selecionar from "./Selecionar";
import Agenda from './Agenda';
import Localização from "./Localização";
import Carrinho from "./Carrinho";

const Tab = createBottomTabNavigator();

export default function Rotas() {
  
  const { logado } = useContext(UserContext);

  if (logado == false) {
    return (<Login />);
  }

  return (    
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home">
        <Tab.Screen 
          options={{
            tabBarLabel: '',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="diamond-stone" color="black" size={size} />
            ),
          }}
        name="Itens"
        component={Itens} 
        /> 
        <Tab.Screen 
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="menu" color="black" size={size} />
          ),
        }}
        name="Selecionar" 
        component={Selecionar} 
        />  
        <Tab.Screen 
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="calendar" color="black" size={size} />
          ),
        }}
        name="Agenda" 
        component={Agenda} 
        />
        <Tab.Screen 
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="map-marker-radius-outline" color="black" size={size} />
          ),
        }}
        name="Localização" 
        component={Localização} 
        />
        <Tab.Screen 
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="cart-heart" color="black" size={size} />
          ),
        }}
        name="Carrinho" 
        component={Carrinho}
        />
        
      </Tab.Navigator>
    </NavigationContainer>
  );
}