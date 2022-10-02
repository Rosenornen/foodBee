// Importering af dependencies
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {View} from 'react-native'
import Ionicons from "react-native-vector-icons/Ionicons";

// Importering af mine Screens/Views 
import OnboardingScreen from '../screens/onboardingScreen';
import LoginScreen from '../screens/loginScreen';
import RegisterScreen from '../screens/registerScreen';
import HomeScreen from '../screens/homeScreen'

// Oprettelse af Stack, der går det muligt at navigere
const Stack = createStackNavigator();

// Oprettelse af AuthStack
const AuthStack = ({routename, navigation}) => {
 // Stack.Screen er det forskellige View
  return (
      <Stack.Navigator
        initialRouteName={routename}
      >
        <Stack.Screen name='Onboarding' component={OnboardingScreen} options = {{header: () => null}}/>
        <Stack.Screen name='Login' component={LoginScreen} options = {{header: () => null}}/>
        <Stack.Screen 
          name = 'Register' 
          component={RegisterScreen} 
          options = {({navigation}) => ({
            title: '',
            headerStyle: {
              backgroundColor: '#f9fafd',
              shadowColor: '#f9fafd',
              elevation: 0
            },
            headerLeft: () => (
              <View>
                <Ionicons.Button 
                  name = 'arrow-back'
                  backgroundColor = '#f9fafd'
                  color = '#000000'
                  onPress = {() => navigation.navigate('Login')}
                />
              </View>
            ),
          })}
        />
         <Stack.Screen name = 'Home' component={HomeScreen} options = {{header: () => null}}/> 
      </Stack.Navigator>
  )
}

// Eksportering af AuthStack navigation
export default AuthStack
