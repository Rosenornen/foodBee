import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import * as React from "react";


//SettingsScreen
function SettingsScreen() {
    
    
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Settings</Text>
        </View>
    );
}

export default SettingsScreen

//Lokal styling til brug i SettingsScreen
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