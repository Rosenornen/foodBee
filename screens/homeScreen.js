// Importering af dependencies og components 
import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import FormButton from '../components/FormButton'
import { auth } from '../firebaseAuth'

// Oprettelse af HomeScreen
const HomeScreen = ({navigation}) => {
  // funktion til at logge ud med 
  const handleSignOut = () => {
    auth
    .signOut()
    .then(() => {
        navigation.replace("Login")
    })
    .catch(error => alert(error.message))
  }
  
  // Hvad brugeren ser
  return (
    <View style = {styles.container}>
      <Text >Welcome</Text>
      <FormButton buttonTitle = 'Logout' onPress = {handleSignOut}/>
    </View>
  )
}

// Eksportering af HomeScreen
export default HomeScreen

// Styling af HomeScreen
const styles = StyleSheet.create({
    container: {
      flex: 1, 
      alignItems: 'center',
      justifyContent: 'center'
    }
})