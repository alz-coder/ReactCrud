import React from 'react';
import { View, StyleSheet, Text, TextInput, Alert } from 'react-native';
import { stylesGlobal } from '../themes/Styles';
import axios from 'axios';
import FormButton from './FormButton';
import { useState } from 'react';
import FormPasswordInput from './FormPasswordInput';




export const Form: React.FC = () => {
  const [cedula, setcedula] = useState('');
  const [Nombre, setnombre] = useState('');
  const [correo, setcorreo] = useState('');
  const [pass, setpass] = useState('');
  const [img, setimg] = useState('');


  const Setuser = (Cedula: string, Nombre: string, Correo: string, contrasenna: string, ImgUrl: string) => {
    axios.post('https://alzcoder.azurewebsites.net/api/users/', {
      cedula: Cedula, Nombre: Nombre, correo: Correo, contrasenna: contrasenna, img: ImgUrl
    })
      .then(function (response) {
        console.log(response);

        Alert.alert('Guardar', 'registrado con exito');

      })
      .catch(function (error) {
        console.log(error);
        Alert.alert('Guardar', 'Error al registrar');

      });

  }

  return (
    <View style={styles.container}>
      <TextInput

        multiline
        style={stylesGlobal.TextInput}
        onChangeText={setcedula}
        placeholder='IDENTIFICACION' placeholderTextColor={'white'}
        value={cedula}
      />
      <TextInput
        editable
        multiline
        numberOfLines={4}
        maxLength={40}
        style={stylesGlobal.TextInput}
        placeholder='NOMBRE' placeholderTextColor={'white'}
        onChangeText={setnombre}
        value={Nombre}
      />
      <TextInput
        editable
        multiline
        numberOfLines={4}
        maxLength={40}
        style={stylesGlobal.TextInput}
        placeholder='CORREO' placeholderTextColor={'white'}
        onChangeText={setcorreo}
        value={correo}

      />
      <FormPasswordInput value={pass} placeholder={'CONTRASEÑA'} onChangeText={setpass} />

      <TextInput
        editable
        multiline
        numberOfLines={4}
        style={stylesGlobal.TextInput}
        placeholder='URL IMAGEN' placeholderTextColor={'white'}
        onChangeText={setimg}
        value={img}
      />
      <FormButton label="Guardar" onPress={() => Setuser(cedula, Nombre, correo, pass, img)} />


    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
  error: {
    color: 'red',
  },
});

