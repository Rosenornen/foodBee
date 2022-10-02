import React, {useState} from "react";
import {View, Text, Button, StyleSheet, Image, TouchableOpacity} from "react-native"
import FormInput from "../components/FormInput"
import FormButton from "../components/FormButton";
import SocialButton from "../components/SocialButton";
import {auth} from '../firebaseAuth'

const LoginScreen = ({navigation}) => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    
    const handleLogin = () => {
      auth
        .signInWithEmailAndPassword(email, password)
        .then(userCredentials => {
          const user = userCredentials.user;
          console.log('Logged in with:', user.email);
          navigation.replace("Home")
        })
        .catch(error => alert(error.message))
    }

    return(
        <View style = {styles.container}>
            <Image 
                source={require('../assets/foodbee-logo.png')}
                style = {styles.logo}
            /> 
            <Text style = {styles.text}> FoodBee </Text>
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
            <FormButton 
                buttonTitle = 'Sign In'
                onPress = {handleLogin}
            />
            <TouchableOpacity style = {styles.forgotButton} onPress = {() => {}}>
                <Text style = {styles.navButtonText}> Forgot Password? </Text>
            </TouchableOpacity>
            <SocialButton 
                buttonTitle= 'Sign in with Google'
                btnType= 'logo-google'
                color = '#0f9d58'
                onPress = {() => {}}
            /> 
            <SocialButton 
                buttonTitle= 'Sign in with School Email'
                btnType= 'school'
                color = '#0f9d58'
                onPress = {() => {}}
            /> 
            <TouchableOpacity 
            style = {styles.forgotButton} 
            onPress = {() => navigation.navigate("Register")}>
                <Text style = {styles.navButtonText}> Don't have an account? Create here </Text>
            </TouchableOpacity>
        </View>
    )
} 

export default LoginScreen

const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
      paddingTop: 50,
      backgroundColor: '#f9fafd'
    },
    logo: {
      height: 150,
      width: 150,
      resizeMode: 'cover',
    },
    text: {
      fontSize: 28,
      marginBottom: 10,
      color: '#0f9d58',
      alignItems: 'center',
      justifyContent: 'center'
    },
    navButton: {
      marginTop: 15,
    },
    forgotButton: {
      marginVertical: 35,
    },
    navButtonText: {
      fontSize: 18,
      fontWeight: '500',
      color: '#0f9d58',
    },
  });

  