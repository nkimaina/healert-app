import React from 'react'
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { View, Text, KeyboardAvoidingView, UIManager, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import styles from './Styles';
import VerifyCode from './VerifyCode';
import { Button } from 'react-native-elements';
import { FormInput } from '../../components/Form/FormInput';
import { NavigationContainer } from '@react-navigation/native';

UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);


const SignIn = ({ navigation }) => {
  const [phone, setPhone] = React.useState<string>();
  const [confirmResult, setConfirmResult] = React.useState<FirebaseAuthTypes.ConfirmationResult>();
  const [loading, setLoading] = React.useState<boolean>(false);
  
  const validatePhoneNumber = () => {
    var regexp = /^\+[0-9]?()[0-9](\s|\S)(\d[0-9]{8,16})$/
    return regexp.test(phone)
  }

  const handleSendCode = () => {
    // Request to send OTP
    if (validatePhoneNumber()) {
      setLoading(true);
      auth()
        .signInWithPhoneNumber(phone)
        .then(confirmResult => {
          setLoading(false);
          setConfirmResult(confirmResult);
        })
        .catch(error => {
          console.log(error, 'error')
          setLoading(false);
        })
    } else {
      setLoading(false);
    }
  }

  const changePhoneNumber = () => {
    setConfirmResult(null);
  }

  return <ScrollView
    keyboardShouldPersistTaps="handled"
    contentContainerStyle={styles.container}
  >
    <KeyboardAvoidingView
      behavior="position"
      contentContainerStyle={styles.formContainer}
    >
      <View>
      </View>
      <Text style={styles.signUpText}>Sign up</Text>
      <View style={{ width: '100%' }}>
        <FormInput
          placeholder='Phone Number'
          onChangeText={phone => setPhone(phone)}
          maxLength={15}
          editable={confirmResult ? false : true}
          value={phone}
          icon="phone"
        />
      </View>
      {confirmResult && <VerifyCode confirmResult={confirmResult}/>}
      {!confirmResult && <Button
        loading={loading}
        title="Sign In"
        containerStyle={{ flex: -1 }}
        buttonStyle={styles.signUpButton}
        titleStyle={styles.signUpButtonText}
        onPress={
          confirmResult
            ? changePhoneNumber
            : handleSendCode
        }
        disabled={loading}
      />}
    </KeyboardAvoidingView>
  </ScrollView>


}

export default SignIn;