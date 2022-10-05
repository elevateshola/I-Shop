import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const Input = ({ placeholder, name, id, value, 
    autoCorrect, onChangeText,onFocus,
    secureTextEntry, keyboardType }) => {
    
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      name={name}
      id={id}
      value={value}
      autoCorrect={autoCorrect}
      onChangeText={onChangeText}
      onFocus={onFocus}
      secureTextEntry={secureTextEntry}
      keyboardType={keyboardType}
    ></TextInput>
  );
};

export default Input;

const styles = StyleSheet.create({
  input: {
    width: '80%',
    height: 60,
    backgroundColor: 'white',
    margin: 10,
    borderRadius: 20,
    padding: 10,
    borderWidth: 2,
    borderColor: 'orange',
  },
});