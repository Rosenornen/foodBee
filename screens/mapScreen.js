import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import * as React from "react";


//MapScreen
function MapScreen() {
    
    
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Map</Text>
        </View>
    );
}

export default MapScreen

//Lokal styling til brug i MapScreen
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