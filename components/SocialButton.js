import { Text, TouchableOpacity, StyleSheet, View } from 'react-native'
import React from 'react'
import { windowHeight, windowWidth } from '../utils/Dimensions'

import Ionicons from "react-native-vector-icons/Ionicons";

const SocialButton = (
    {buttonTitle, btnType, color, backgroundColor, ...rest}) => {
    
    let bgColor = backgroundColor; 
        
    return (
        <TouchableOpacity style = {styles.buttonContainer} 
        {...rest}>
            <View style = {styles.iconWrapper}>
                <Ionicons style = {styles.icon} name = {btnType} size = {22} color = {color}/> 
            </View>
            <View style = {styles.btnTxtWrapper}>
                <Text style = {[styles.buttonText, {color: color}]}>{buttonTitle}</Text>
            </View>
        </TouchableOpacity>
  )
}

export default SocialButton

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
    btnTxtWrapper: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonText: {
      fontSize: 15,
      fontWeight: 'bold',
    },
  });