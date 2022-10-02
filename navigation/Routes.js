// Importering af dependencies
import React from "react";
import {NavigationContainer} from '@react-navigation/native'
import AuthStack from "./authStack";

const Routes = () => {

    return (
        <NavigationContainer>
            <AuthStack/>
        </NavigationContainer>
    )
}

export default Routes