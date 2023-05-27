import { Text, View, Button, StyleSheet } from 'react-native';

import { stylesGlobal } from '../themes/Styles';
import { Listado } from '../components/Tabla';
import { StackScreenProps } from '@react-navigation/stack';



interface Props extends StackScreenProps<any, any> { };
export const ScreenRegistros = ({ navigation }: Props) => {
    
   
    
    return (
        <View style={stylesGlobal.containerPrincipal}>
            
              
              <Listado onPress={() => navigation.navigate('Pagina3')}/>
             
        </View>
    );
}




