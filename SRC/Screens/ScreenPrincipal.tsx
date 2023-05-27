import { StackScreenProps } from "@react-navigation/stack"
import { Text, View, Button, Image, TextInput, Alert } from "react-native"
import { stylesGlobal } from '../themes/Styles';
import { TouchableOpacity } from "react-native-gesture-handler";
import { useEffect } from "react";
import netinfo from "@react-native-community/netinfo";



interface Props extends StackScreenProps<any, any> { };
export const ScreenPrincipal = ({ navigation }: Props) => {
  useEffect(() => {
    netinfo.fetch().then((state) => {
      if (state.isConnected == true) {
        Alert.alert('Conexion a Internet  Exitosa',
          'Tipo Conexion : ' + state.type);
      } else {
        Alert.alert('Sin Conexion a Internet',
          'debes conectarte a una red wifi');
      }


    });

  });






  return (
    <View style={stylesGlobal.containerPrincipal}>
      <View style={stylesGlobal.GlobalMargin} >


        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity style={{ ...stylesGlobal.Boton1, backgroundColor: '#006400' }} onPress={() => navigation.navigate('Registros')} >
            <Text style={stylesGlobal.botontexto}>
              Ver registros
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row' }}>
               <TouchableOpacity style={{ ...stylesGlobal.Boton, backgroundColor: '#006400' }} onPress={() => navigation.navigate('Pagina1')} >
                   <Text style={stylesGlobal.botontexto}>
                            Registrar
                    </Text>
                 </TouchableOpacity>
            </View>

        {/*
            
        */}
        {/*
        <View style={{ flexDirection: 'row' }}>

          <TouchableOpacity style={{ ...stylesGlobal.Boton, backgroundColor: '#006400' }} onPress={() => navigation.navigate('Pagina2')}>
            <Text style={stylesGlobal.botontexto}>
                 1
            </Text>
          </TouchableOpacity>
           


        </View>
        */}
        <View style={{ flexDirection: 'row' }}>

          <TouchableOpacity style={{ ...stylesGlobal.Boton, backgroundColor: '#006400' }} onPress={() => navigation.navigate('Pagina3')}>
            <Text style={stylesGlobal.botontexto}>
              Actualizar
            </Text>
          </TouchableOpacity>
          <View style={stylesGlobal.Logo} />
          <Text style={stylesGlobal.Titulo}>
            Alex Zamora
          </Text>
          <Image
            style={stylesGlobal.Logo}
            source={{
              uri: 'https://www.pinclipart.com/picdir/big/360-3608891_logo-de-lobo-png-png-download-lobo-png.png',
            }}
          />




        </View>
      </View>
    </View>
  )
}
