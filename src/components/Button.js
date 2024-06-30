import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';


function Button({
  buttonText = "",
  textStyle = {},
  btnStyle = {},
  onPress = () => { },
  shadow = false,
  disabled = false,
  preIcon = null,
  postIcon = null
}) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      disabled={disabled}
      style={
        shadow ? { ...styles.buttonStyle, ...styles.btnShadow, ...btnStyle } : { ...styles.buttonStyle, ...btnStyle }
      }
      onPress={onPress}
    >
      {preIcon}
      <Text style={{ ...styles.btnTextStyle, ...textStyle }}>{buttonText}</Text>
      {postIcon}
    </TouchableOpacity>
  )
}

export default Button;

const styles = StyleSheet.create({
  buttonStyle: {
    width: '100%',
    paddingHorizontal: 12,
    paddingVertical: 16,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#129D49'
  },
  btnShadow: {
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 10,
  },

  btnTextStyle: {
    fontSize:14,
    color: 'white',
  },
});