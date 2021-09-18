import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

//Screens
import WelcomeScreen from "./Welcome"
import ChooseProduct from "./ChooseProduct"
import FeatureList from "./FeaturesList"
import CreditCard from "./CreditCard"

const Stack = createStackNavigator();


const InitialSetupFlow = () => {
    return (
        <Stack.Navigator headerMode="none" >
            <Stack.Screen name="Welcome" component={WelcomeScreen} />
            <Stack.Screen name="ChooseProduct" component={ChooseProduct} />
            <Stack.Screen name="FeatureList" component={FeatureList} />
            <Stack.Screen name="CreditCard" component={CreditCard} />
        </Stack.Navigator>
    )
}

export default InitialSetupFlow