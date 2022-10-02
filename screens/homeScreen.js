import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import FormButton from '../components/FormButton'
import { auth } from '../firebaseAuth'

const HomeScreen = ({navigation}) => {
  const handleSignOut = () => {
    auth
    .signOut()
    .then(() => {
        navigation.replace("Login")
    })
    .catch(error => alert(error.message))
  }
  
  return (
    <View>
      <Text style = {styles.container}>Welcome</Text>
      <FormButton buttonTitle = 'Logout' onPress = {handleSignOut}/>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({

})