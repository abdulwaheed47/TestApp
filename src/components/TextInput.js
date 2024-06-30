import React from 'react';
import {TextInput, StyleSheet, Image, TouchableOpacity} from 'react-native';

function TextField({
  secureTextEntry = false,
  onChangeText = () => {},
  value = '',
  placeholderTextColor = 'gray',
  style = {},
  multiline = false,
  keyboardType = 'default',
  noOfLines = 1,
  placeholder = '',
  disable = true,
}) {
  return (
    <>
      <TextInput
        style={{...styles.input, ...style}}
        placeholder={placeholder}
        keyboardType={keyboardType}
        value={value}
        numberOfLine={noOfLines}
        multiline={multiline}
        secureTextEntry={secureTextEntry}
        onChangeText={onChangeText}
        placeholderTextColor={placeholderTextColor}
        editable={disable}
      />
    </>
  );
}

export default TextField;

const styles = StyleSheet.create({
  iconStyle: {
    // right:true,
    position: 'absolute',
    zIndex: 100,
    top: 22,
  },
  input: {
    marginTop: 10,
    width: '100%',
    height: 48,
    fontSize:12,
    padding: 5,
    paddingLeft: 10,
    color:'black',
    borderRadius: 10,
    borderColor: '#D6D6D6',
    borderWidth: 1,
    backgroundColor:"#F3F3F3"
  },
});