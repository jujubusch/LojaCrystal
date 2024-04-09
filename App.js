import 'react-native-gesture-handler';
import UserProvider from './src/Context/UserContext';
import { View, Image, TouchableOpacity, Text, NavigationContainer, Tab, } from 'react-native';

import Rotas from "./src/Rotas"

export default function App() {
  return (   
      <UserProvider>
        <Rotas />
      </UserProvider>   
  );
  
}