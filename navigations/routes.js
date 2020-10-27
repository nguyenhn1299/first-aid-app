// Setting up Router and Scenes 
import React, {useState, useEffect} from 'react';
import {AppLoading} from 'expo';

import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import { navTitleStyle } from "../styles/theme";
import {Home, SituationList} from '../src/screens';



const Routes = () => {
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        setTimeout(()=>setIsReady(true), 1000);
    })

    if (!isReady) return <AppLoading/>

    const Stack = createStackNavigator()

    return (
        <NavigationContainer>
            <Stack.Navigator navTitleStyle={navTitleStyle}>
                <Stack.Screen name="Home" component={Home.Home} options={Home.navigationOptions}/>
                <Stack.Screen name="SituationList" component={SituationList} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes;