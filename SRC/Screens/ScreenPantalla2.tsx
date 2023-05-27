import { Text, View, Button } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { stylesGlobal } from '../themes/Styles';



interface Props extends StackScreenProps<any, any> { };
export const ScreenPantalla2 = ({ route }: Props) => {
  
    return (
        <View style={stylesGlobal.containerPrincipal}>
            <View>
                <Text style={stylesGlobal.Titulo3}>
                    Sin uso
                </Text>
            </View>
        </View>
    )
}
