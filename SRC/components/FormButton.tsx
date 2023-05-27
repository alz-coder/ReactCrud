import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface FormButtonProps {
  label: string;
  onPress: () => void;
}

const FormButton: React.FC<FormButtonProps> = ({ label, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#006400',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop:20,marginBottom :20, borderColor: '#7fff00',
    borderWidth: 2

  },
  label: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default FormButton;