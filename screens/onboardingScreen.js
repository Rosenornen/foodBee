// Importering af dependencies
import React from "react";
import {StyleSheet, Image} from "react-native"
import Onboarding from 'react-native-onboarding-swiper';


const OnboardingScreen = ({navigation}) => {
    return(
        
        // Brugt kode herfra https://github.com/jfilter/react-native-onboarding-swiper
        <Onboarding
        onSkip = {() => navigation.replace("Login")}
        onDone = {() => navigation.navigate("Login")}
          pages = {[
            {
              backgroundColor: '#fff',
              image: <Image source={require('../assets/foodbee-logo.png')} style = {styles.image}/>,
              title: 'Tired of food waste?',
              subtitle: 'The average person throws out 47kg of food a year',
              backgroundColor: '#f1c33e'
            },
            {
              backgroundColor: '#fff',
              image: <Image source={require('../assets/foodbee-logo.png')} style = {styles.image}/>,
              title: 'Wanna do something for you neighboor?',
              subtitle: 'Give your neighboor the food you would otherwise throw out',
              backgroundColor: '#77DBF8'
            },
            {
              backgroundColor: '#fff',
              image: <Image source={require('../assets/foodbee-logo.png')} style = {styles.image}/>,
              title: 'Become part of a Community',
              subtitle: 'Sign up today and start giving and reciving food',
              backgroundColor: '#9AF877'
            },
          ]}
        />
    )
} 

export default OnboardingScreen

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        width: 200,
        height: 200
    }
})