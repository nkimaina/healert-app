import React from 'react'
import { View, LayoutAnimation, Text } from 'react-native'
import { FormInput } from '../../components/Form/FormInput';
import { Button } from 'react-native-elements';
import styles from './Styles';

const VerifyCode = ({ confirmResult }) => {
    const [verificationCode, setVerificationCode] = React.useState<string>();
    const [isLoading, setIsLoading] = React.useState<boolean>(false);

    const handleVerifyCode = () => {
        // Request for OTP verification
        LayoutAnimation.easeInEaseOut();
        setIsLoading(true);
        if (confirmResult && verificationCode.length == 6) {
            confirmResult
                .confirm(verificationCode)
                .then(user => {
                    alert(`Verified! ${user.uid}`);
                    setIsLoading(false);
                })
                .catch(error => {
                    alert(error.message)
                    console.log(error);
                    setIsLoading(false);
                })
        } else {
            alert('Please enter a 6 digit OTP code.');
            setIsLoading(false);
        }
    }
    return <>
        <FormInput
              value={verificationCode}
              onChangeText={verificationCode => setVerificationCode(verificationCode)}
              placeholder='Verification code'
              keyboardType="numeric"
              returnKeyType="go"
              errorMessage={
                  verificationCode && verificationCode.length !== 6 ? 'Please enter a 6 digit OTP code.' : null
              }
        />
        <Button
            loading={isLoading}
            title="Verify"
            onPress={handleVerifyCode}
            disabled={isLoading}
            buttonStyle={styles.signUpButton}
            titleStyle={styles.signUpButtonText}
          />
        
    </>
}

export default VerifyCode;