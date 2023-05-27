import React, { useState } from 'react'
import { View, Text, Image, TextInput, Alert } from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import axios from 'axios';
import { stylesGlobal } from '../themes/Styles';

interface IUser {
  _id: string, cedula: string, Nombre: string, correo: string, contrasenna: String, img: string
}
interface Props {
  onPress: () => void;
}
export const Listado: React.FC<Props> = ({ onPress }) => {
  const [Datosvalue, setDatos] = useState([]);
  const [IDBuscar, setIDBuscar] = useState('');
  // URL
  const GetuserByid = () => {
   
    axios.get('https://alzcoder.azurewebsites.net/api/users/' + IDBuscar).then(Response => {


      console.log(Response.data);
      setDatos(Response.data);


    }).catch(err => console.log(err));


  }
  //funcion mostrar usuario
  const Getuser = () => {
    axios.get('https://alzcoder.azurewebsites.net/api/users').then(Response => {
      setDatos(Response.data)
      console.log(Response.data)

    }).catch(err => console.log(err));
  }
  //funcion eliminar usuario
  const DeleteUser = (Id: string) => {
    axios.delete('https://alzcoder.azurewebsites.net/api/users/'+ Id)
      .then(function (response) {
        console.log(response);

        Alert.alert('Eliminar', 'Eliminado con exito');
        Getuser();

      })
      .catch(function (error) {

        console.log(error);

        Alert.alert('Eliminar', 'Error al eliminar');
      });
  }
  //confirmacion para eliminar
  const DeleteUserOpcion = (id: string) => {

    Alert.alert('Confirmación', '¿Estás seguro de Eliminar? Id :' + id, [
      {
        text: 'Cancel',
      },
      {
        text: 'OK',
        onPress: () =>
          DeleteUser(id),
      },
    ]);
  }




  const Item = ({ Datosvalue }: { Datosvalue: IUser }) => (
    <View style={stylesGlobal.advice}>

      <Text style={stylesGlobal.textoR}> ID Object {Datosvalue._id}</Text>
      <Text style={stylesGlobal.textoR}> CEDULA: {Datosvalue.cedula}</Text>
      <Text style={stylesGlobal.textoR}> NOMBRE: {Datosvalue.Nombre}</Text>
      <Text style={stylesGlobal.textoR}> CORREO: {Datosvalue.correo}</Text>
      <Text style={stylesGlobal.textoR}> CONTRASEÑA: {Datosvalue.contrasenna}</Text>
      <Image
        style={stylesGlobal.imguser}
        source={{
          uri: Datosvalue.img,
        }}
      />

      <TouchableOpacity style={{ ...stylesGlobal.Boton3, backgroundColor: '#B2E7E3' }} onPress={onPress}  >
        <Text style={stylesGlobal.botontexto2}>
          Actualizar
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ ...stylesGlobal.Boton3, backgroundColor: '#4D181C' }} onPress={() => { DeleteUserOpcion(Datosvalue._id) }}>
        <Text style={stylesGlobal.botontexto2}>
          Eliminar
        </Text>
      </TouchableOpacity>

    </View>
  )
  return (
    <View style={{ flex: 1 }}>
      <TextInput

        multiline
        style={stylesGlobal.TextInput}
        onChangeText={setIDBuscar}
        placeholder='Buscar' placeholderTextColor={'white'}
        value={IDBuscar}
      />
      <FlatList
        data={Datosvalue}
        renderItem={({ item }) => <Item Datosvalue={item} />}
        keyExtractor={(item: IUser) => item._id}
      />

      <TouchableOpacity style={stylesGlobal.advice2} >
        <Text style={stylesGlobal.textoR2} onPress={GetuserByid} >Buscar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={stylesGlobal.advice2} >
        <Text style={stylesGlobal.textoR2} onPress={Getuser} >Lista Completa</Text>
      </TouchableOpacity>

    </View>
  )
}