// Importering af dependencies
import React, {useState} from "react";
import {View, Text, StyleSheet, TouchableOpacity} from "react-native"

// Importering af components og database
import FormInput from "../components/FormInput"
import FormButton from "../components/FormButton";
import SocialButton from "../components/SocialButton";
import {auth} from '../firebaseAuth'

const RegisterScreen = ({navigation}) => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();

    const handleRegister = () => {
      auth
        .createUserWithEmailAndPassword(email, password)
        .then(userCredentials => {
          const user = userCredentials.user;
          console.log('Registered with:', user.email);
          navigation.replace("Login")
        })
        .catch(error => alert(error.message))
    }
    
    return(
        <View style = {styles.container}>
            <Text style = {styles.text}> Create an Account</Text>
            <FormInput 
                labelValue={email}
                onChangeText = {(userEmail) => setEmail(userEmail)}
                placeholderText = 'Email'
                iconType = 'person-outline'
                keyboardType = 'email-address'
                autoCapitalize = 'none'
                autoCorrect = 'false'
            />
            <FormInput 
                labelValue={password}
                onChangeText = {(userPassword) => setPassword(userPassword)}
                placeholderText = 'Password'
                iconType = 'lock-closed-outline'
                secureTextEntry = 'true'
            />
            <FormInput 
                labelValue={confirmPassword}
                onChangeText = {(userConfirmPassword) => setConfirmPassword(userConfirmPassword)}
                placeholderText = 'Cornfirm Password'
                iconType = 'lock-closed-outline'
                secureTextEntry = 'true'
            />           
            <FormButton 
                buttonTitle = 'Register'
                onPress={handleRegister}
            />

            <View style = {styles.textTermsPrivacy}>
              <Text style = {styles.color_textTermsPrivacy}>By registering, you confirm that you accept our</Text>
              <TouchableOpacity onPress={() => alert('Terms Clicked!')}>
                <Text style = {[styles.color_textTermsPrivacy, {color: '#db4437'}]}>Terms of Service</Text>
              </TouchableOpacity>
              <Text style = {styles.color_textTermsPrivacy}> and </Text>
              <TouchableOpacity onPress={() => alert('Privacy Clicked!')}>
                <Text style = {[styles.color_textTermsPrivacy, {color: '#db4437'}]}>Privacy Policy</Text>
              </TouchableOpacity>
            </View>
            <SocialButton 
                buttonTitle= 'Register with Google'
                buttonType= 'logo-google'
                color = '#0f9d58'
                onPress = {() => {}}
            /> 
            <SocialButton 
                buttonTitle= 'Register with School Email'
                buttonType= 'school'
                color = '#0f9d58'
                onPress = {() => {}}
            />
            <TouchableOpacity 
            style = {styles.navButton} 
            onPress = {() => navigation.navigate("Login")}>
                <Text style = {styles.navButtonText}>Have an account? Sign in</Text>
            </TouchableOpacity>
        </View>
    )
} 

export default RegisterScreen

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f9fafd',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    fontSize: 28,
    marginBottom: 10,
    color: '#0f9d58',
  },
  navButton: {
    marginTop: 15,
  },
  navButtonText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#0f9d58',
  },
  textTermsPrivacy: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 20,
    justifyContent: 'center',
  },
  color_textTermsPrivacy: {
    fontSize: 13,
    fontWeight: '400',
    color: 'grey',
  },
});