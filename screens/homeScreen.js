import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import * as React from "react";


//HomeScreen
function HomeScreen() {
    
    
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Welcome</Text>
        </View>
    );
}

export default HomeScreen

//Lokal styling til brug i HomeScreen
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 20,
    },
});