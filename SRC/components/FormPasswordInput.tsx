import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { stylesGlobal } from '../themes/Styles';

interface FormPasswordInputProps {
  value: string;
  placeholder: string;
  onChangeText: (value: string) => void;
}

const FormPasswordInput: React.FC<FormPasswordInputProps> = ({
  value,
  placeholder,
  onChangeText,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={value}
        placeholder={placeholder}
        secureTextEntry={!showPassword}
        onChangeText={onChangeText}
        placeholderTextColor={'white'}
      />
      <Text style={styles.toggle} onPress={toggleShowPassword}>
        {showPassword ? 'Ocultar' : 'Mostrar'}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    backgroundColor: '#15232D',
    borderBottomColor: 'white',
    borderBottomWidth: 1,
    color:'white',
    height:50,
    margin:5,
    width:250
  },
  toggle: {
    marginLeft: 10,
    color: 'white',
  },
});

export default FormPasswordInput;