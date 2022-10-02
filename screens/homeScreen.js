import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import FormButton from '../components/FormButton'

const HomeScreen = () => {
  return (
    <View>
      <Text style = {styles.container}>Welcome</Text>
      <FormButton buttonTitle = 'Logout' onPress = {() => {}}/>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({

})