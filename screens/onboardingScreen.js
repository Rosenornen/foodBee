import React from "react";
import {View, Text, Button, StyleSheet, Image} from "react-native"
import Onboarding from 'react-native-onboarding-swiper';


const OnboardingScreen = ({navigation}) => {
    return(
        <Onboarding
        onSkip = {() => navigation.replace("Login")}
        onDone = {() => navigation.navigate("Login")}
          pages = {[
            {
              backgroundColor: '#fff',
              image: <Image source={require('../assets/picture-landscape.png')} style = {styles.image}/>,
              title: 'Onboarding 1',
              subtitle: 'Hej'
            },
            {
              backgroundColor: '#fff',
              image: <Image source={require('../assets/picture-museum.png')} style = {styles.image}/>,
              title: 'Onboarding 2',
              subtitle: 'Hej'
            },
            {
              backgroundColor: '#fff',
              image: <Image source={require('../assets/picture-restaurant.png')} style = {styles.image}/>,
              title: 'Onboarding 3',
              subtitle: 'Hej'
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
        width: '100%',
        height: '100%'
    }
})