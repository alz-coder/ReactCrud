import React from 'react';
import { View, StyleSheet, Text, TextInput, Alert } from 'react-native';
import { stylesGlobal } from '../themes/Styles';


import axios from 'axios';
import FormButton from './FormButton';
import { useState } from 'react';



const FormActualiza:React.FC = () => {
  
  const URL='https://alzcoder.azurewebsites.net/api/users/';
  const [cedula, setcedula] = useState('');
  const [Nombre, setnombre] = useState('');
  const [correo, setcorreo] = useState('');
  const [pass, setpass] = useState('');
  const [img, setimg] = useState('');

  function Actualizar(id: string, Nombre: string, Correo: String, Pass: string,img:string) {
    axios.put(URL+id, {
      Nombre: Nombre,
      correo: Correo,
      contrasenna: Pass,
      img:img
    })
      .then(function (response) {
        console.log(response);
   
        Alert.alert('Actualizar','Actualizado con exito');
      })
      .catch(function (error) {
        console.log(error);
        Alert.alert('Actualizar','Error al actualizar');
      });
  }
  return (
    <View style={styles.container}>
      
      <TextInput

        multiline
        style={stylesGlobal.TextInput}
        onChangeText={setcedula}
        placeholder='ID OBJECT' placeholderTextColor={'white'}
        value={cedula}
      />
      <TextInput
        editable
        multiline
        numberOfLines={4}
        maxLength={40}
        style={stylesGlobal.TextInput}
        placeholder='Nombre' placeholderTextColor={'white'}
        onChangeText={setnombre}
        value={Nombre}
      />
      <TextInput
        editable
        multiline
        numberOfLines={4}
        maxLength={40}
        style={stylesGlobal.TextInput}
        placeholder='Correo' placeholderTextColor={'white'}
        onChangeText={setcorreo}
        value={correo}

      />
      <TextInput
        editable
        multiline
        numberOfLines={4}
        maxLength={40}
        style={stylesGlobal.TextInput}
        placeholder='contraseña' placeholderTextColor={'white'}
        onChangeText={setpass}
        value={pass}
      />
       <TextInput
        editable
        multiline
        numberOfLines={4}
        style={stylesGlobal.TextInput}
        placeholder='URL IMAGEN' placeholderTextColor={'white'}
        onChangeText={setimg}
        value={img}
      />
      <FormButton label="Actualizar" onPress={() => Actualizar(cedula, Nombre, correo, pass,img)} />
    


    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
  error: {
    color: 'red',
  },
});

export default FormActualiza;