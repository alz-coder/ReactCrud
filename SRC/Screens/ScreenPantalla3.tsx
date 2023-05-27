import { StackScreenProps } from '@react-navigation/stack';
import { stylesGlobal } from '../themes/Styles';
import { Text, View, Button } from 'react-native';
import FormActualiza from '../components/FormActualiza';

interface Props extends StackScreenProps<any, any> { };
export const ScreenPantalla3 = ({ route }: Props) => {


    return (
        <View style={stylesGlobal.containerPrincipal}>
            <View style={stylesGlobal.GlobalMargin}>
                <Text style={stylesGlobal.Titulo3}>
                    Actualizar Usuario
                </Text>
                <FormActualiza/>
               
               

            </View>
        </View>
    )
}
