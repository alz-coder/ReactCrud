import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ScreenPrincipal } from '../Screens/ScreenPrincipal';
import { ScreenPantalla1 } from '../Screens/ScreenPantalla1'; 
import { ScreenPantalla2 } from '../Screens/ScreenPantalla2';
import { ScreenPantalla3 } from '../Screens/ScreenPantalla3';
import { ScreenRegistros } from '../Screens/ScreenRegistros';

export type RootStackParams = {
  Home: undefined,
  Pagina1: undefined,
  Pagina2: undefined,
  Pagina3:undefined,
  Registros:undefined
}
const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyle: {
          backgroundColor: '#15232D'
        }, headerStyle: {
          elevation: 0,shadowColor:''
        },headerShown:false
      }}
    >
      <Stack.Screen name="Home" options={{ title: 'HOME' }} component={ScreenPrincipal} />
      <Stack.Screen name="Pagina1" options={{ title: 'Registar' }} component={ScreenPantalla1} />
      <Stack.Screen name="Pagina2" options={{ title: 'Eliminar' }} component={ScreenPantalla2} />
      <Stack.Screen name="Pagina3" options={{title:'Actualizar'}} component={ScreenPantalla3}/>
      <Stack.Screen name="Registros" options={{title:'Registros'}} component={ScreenRegistros}/>
     

    </Stack.Navigator>
  );
}