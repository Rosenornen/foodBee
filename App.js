import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import OnboardingScreen from './screens/onboardingScreen';
import LoginScreen from './screens/loginScreen';

const AppStack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator
        headerMode = "none"
      >
        <AppStack.Screen name='Onboarding' component={OnboardingScreen}/>
        <AppStack.Screen name='Login' component={LoginScreen}/>
      </AppStack.Navigator>
    </NavigationContainer>
  )
}

export default App
