// Importering af dependencies
import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { windowHeight, windowWidth } from '../utils/Dimensions'

// Oprettelse af FormButton Component
const FormButton = ({buttonTitle, ...rest}) => {
  return (
        <TouchableOpacity style = {styles.buttonContainer} {...rest}>
            <Text style = {styles.buttonText}>{buttonTitle}</Text>
        </TouchableOpacity>
  )
}

// Eksportering af FormButton
export default FormButton

// Styling af FormButton component 
const styles = StyleSheet.create({
    buttonContainer: {
        marginTop: 10, 
        width: '100%',
        height: windowHeight / 15,
        backgroundColor: '#0f9d58',
        padding: 10, 
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 3 
    }, 
    buttonText: {
        fontSize: 20, 
        fontWeight: 'bold',
        color: '#ffffff',
    }
})