// Importering af dependencies
import { Text, TouchableOpacity, StyleSheet, View } from 'react-native'
import React from 'react'
import { windowHeight, windowWidth } from '../utils/Dimensions'
import Ionicons from "react-native-vector-icons/Ionicons";

// Oprettelse af SocialButton Component
const SocialButton = (
    {buttonTitle, buttonType, color, ...rest}) => { 
        
    return (
        <TouchableOpacity style = {styles.buttonContainer} {...rest}>
            <View style = {styles.iconWrapper}>
                <Ionicons style = {styles.icon} name = {buttonType} size = {22} color = {color}/> 
            </View>
            <View style = {styles.buttonTextWrapper}>
                <Text style = {[styles.buttonText, {color: color}]}>{buttonTitle}</Text>
            </View>
        </TouchableOpacity>
  )
}

// Eksportering af SocialButton
export default SocialButton

// Styling af SocailButton component 
const styles = StyleSheet.create({
    buttonContainer: {
      marginTop: 10,
      width: '90%',
      height: windowHeight / 15,
      backgroundColor: '#e5e4e7',
      padding: 10,
      flexDirection: 'row',
      borderRadius: 3,
      alignItems: 'center',
      justifyContent: 'center'
    },
    iconWrapper: {
      width: '8%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    icon: {
      fontWeight: 'bold',
    },
    buttonTextWrapper: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonText: {
      fontSize: 15,
      fontWeight: 'bold',
    },
  });