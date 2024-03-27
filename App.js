import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Menu from "./src/Menu";
import Produtos from "./src/Produtos";
import Itens from "./src/Itens";

const Tab = createBottomTabNavigator();
/*const Stack = createNativeStackNavigator();*/
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Image 
      style={styles.logo}
      source={ require( "./assets/LogoJoias.png" ) } 
      />
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Menu" component={Menu} />
          <Tab.Screen name="Itens" component={Itens} />
          <Tab.Screen name="Produtos" component={Produtos} />
        </Tab.Navigator>
      </NavigationContainer>
      
    </View>
  );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFCDCD',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    marginTop: 200
  }
});
