import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useContext } from 'react';
import { UserContext } from './Context/UserContext';

import Login from './Login';
import Itens from "./Itens";
import Selecionar from "./Selecionar";

const Tab = createBottomTabNavigator();

export default function Rotas() {
  
  const { logado } = useContext(UserContext);

  if (logado == false) {
    return (<Login />);
  }

  return (    
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home">
        <Tab.Screen name="Login" component={Login} />
        <Tab.Screen name="Itens" component={Itens} /> 
        <Tab.Screen name="Selecionar" component={Selecionar} />   
      </Tab.Navigator>
    </NavigationContainer>
  );
}