import React from 'react'

import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();

import HomeScreen from './assets/screens/Home/HomeScreen';

import SavedScreen from './assets/screens/Saved/SavedScreen';
import SavedInfo from './assets/screens/Saved/savedInfo';

import SettingsScreen from './assets/screens/Profile/SettingSceen';
import ProfilesScreen from './assets/screens/Profile/ProfileScreen'

const HomeScreenNavigator = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen 
                name="HomeScreen"
                component={HomeScreen}
            />
            <Stack.Screen 
                name="InfoScreen"
                component={SavedInfo}
            />
        </Stack.Navigator>
    )
}
export {HomeScreenNavigator}

const SaveScreenNavigator = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen 
                name="SavedScreen"
                component={SavedScreen}
            />
            <Stack.Screen 
                name="InfoScreen"
                component={SavedInfo}
            />
        </Stack.Navigator>
    )
}
export {SaveScreenNavigator}

const ProfileScreenNavigator = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen 
                name="SettingScreen"
                component={SettingsScreen}
            />
            <Stack.Screen 
                name="ProfileScreen"
                component={ProfilesScreen}
            />
        </Stack.Navigator>
    )
}
export {ProfileScreenNavigator}
