// Importering af dependencies
import React from "react";
import {NavigationContainer} from '@react-navigation/native'
import AuthStack from "./authStack";

// Oprettelse af Routes
const Routes = () => {

    return (
        <NavigationContainer>
            <AuthStack/>
        </NavigationContainer>
    )
}

// Eksportering af Routes navigation
export default Routes