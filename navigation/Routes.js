import React, {useContext, useState, useEffect} from "react";
import {NavigationContainer} from '@react-navigation/native'
import AuthStack from "./authStack";
import AppStack from "./appStack";

const Routes = () => {

    return (
        <NavigationContainer>
            <AuthStack/>
        </NavigationContainer>
    )
}

export default Routes