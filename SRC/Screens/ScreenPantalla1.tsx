import { StackScreenProps } from '@react-navigation/stack';
import { stylesGlobal } from '../themes/Styles';
import { Text, View, Button } from 'react-native';
import { Form } from '../components/Form';


interface Props extends StackScreenProps<any, any> { };
export const ScreenPantalla1 = ({ route }: Props) => {

    
    return (
        <View style={stylesGlobal.containerPrincipal}>
            <View style={stylesGlobal.GlobalMargin}>
                <Text style={stylesGlobal.Titulo3}>
                    Registrar Usuario
                </Text>
                <Form />
               
              

            </View>

        </View>

    )
}
