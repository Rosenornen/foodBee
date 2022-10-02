import React from "react";
import {View, Text, Button, StyleSheet} from "react-native"
import Onboarding from 'react-native-onboarding-swiper';

const OnboardingScreen = ({navigation}) => {
    return(
        <Onboarding
          pages={[
            {
              backgroundColor: '#fff',
              image: <Image source={require('../assets/picture-landscape.png')} />,
              title: 'Onboarding 1',
              subtitle: 'Done with React Native Onboarding Swiper',
            },
            {
              backgroundColor: '#fff',
              image: <Image source={require('../assets/picture-musuem.png')} />,
              title: 'Onboarding 2',
              subtitle: 'Done with React Native Onboarding Swiper',
            },
            {
              backgroundColor: '#fff',
              image: <Image source={require('../assets/picture-restaurant.png')} />,
              title: 'Onboarding 3',
              subtitle: 'Done with React Native Onboarding Swiper',
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
    }
})