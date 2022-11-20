import React from 'react'

import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();

import HomeScreen from './assets/screens/Home/HomeScreen';
import Search from './assets/screens/Home/Search';

import SavedScreen from './assets/screens/Saved/SavedScreen';
import SavedInfo from './assets/screens/Saved/SavedInfo';

import InboxScreen from './assets/screens/Inbox/InboxScreen';
import MessageScreen from './assets/screens/Inbox/MessageScreen';

import SettingsScreen from './assets/screens/Profile/SettingSceen';
import ProfilesScreen from './assets/screens/Profile/ProfileScreen'
import { NotificationScreen, PersonalInfoScreen, PrivacyInfoScreen } from './assets/screens/Setting/export'

const HomeScreenNavigator = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen 
                name="HomeScreen"
                component={HomeScreen}
            />
            <Stack.Screen 
                name='Search'
                component={Search}
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

const InboxScreenNavigator = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen 
                name="InboxScreen"
                component={InboxScreen}
            />
            <Stack.Screen 
                name="MessageScreen"
                component={MessageScreen}
            />
        </Stack.Navigator>
    )
}
export{InboxScreenNavigator}

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
            <Stack.Screen 
                name="Personal information"
                component={PersonalInfoScreen}
            />
            <Stack.Screen 
                name="Notifications"
                component={NotificationScreen}
            />
            <Stack.Screen 
                name="Privacy and Settings"
                component={PrivacyInfoScreen}
            />
        </Stack.Navigator>
    )
}
export {ProfileScreenNavigator}
