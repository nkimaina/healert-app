import React from 'react';
import { Input, Icon } from "react-native-elements";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    inputContainer: {
      paddingLeft: 8,
      borderRadius: 40,
      borderWidth: 1,
      borderColor: 'rgba(110, 120, 170, 1)',
      height: 45,
      marginVertical: 10,
    },
    inputStyle: {
      flex: 1,
      marginLeft: 10,
      color: 'white',
      fontSize: 16,
    },
    errorInputStyle: {
      marginTop: 0,
      textAlign: 'center',
      color: '#F44336',
    }
  });
export const FormInput = ({ icon, ...otherProps }) => {
    return (
      <Input
        {...otherProps}
        inputContainerStyle={styles.inputContainer}
        leftIcon={
          icon && <Icon name={icon} type={'simple-line-icon'} color="#7384B4" size={18} />
        }
        inputStyle={styles.inputStyle}
        autoFocus={false}
        autoCapitalize="none"
        keyboardAppearance="dark"
        errorStyle={styles.errorInputStyle}
        autoCorrect={false}
        blurOnSubmit={false}
        placeholderTextColor="#7384B4"
      />
    );
  };