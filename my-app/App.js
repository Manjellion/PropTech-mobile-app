import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

import { HomeScreenNavigator, SaveScreenNavigator, InboxScreenNavigator ,ProfileScreenNavigator } from './StackNavigator'
import AntDesign from 'react-native-vector-icons/AntDesign'

import { Amplify }  from 'aws-amplify'
import awsconfig from './src/aws-exports'
Amplify.configure(awsconfig)

import { withAuthenticator } from 'aws-amplify-react-native'

function App() {
  return (
    <>
      <NavigationContainer>
          <Tab.Navigator 
            initialRouteName='Home'
            screenOptions={{
              tabBarActiveTintColor: '#e91e63',
              tabBarShowLabel: false,
              headerShown: false
            }}
          >
              <Tab.Screen 
                name='Home' 
                component={HomeScreenNavigator} 
                options={{
                  tabBarLabel: 'Home',
                  tabBarIcon: ({ color, size }) => (
                    <AntDesign name={'search1'} color={color} size={size} />
                  ),
                }}  
              />
              <Tab.Screen 
                name='Saved' 
                component={SaveScreenNavigator} 
                options={{
                  tabBarLabel: 'Saved',
                  tabBarIcon: ({ color, size }) => (
                    <AntDesign name={'hearto'} color={color} size={size} />
                  ),
                }}  
              />
              <Tab.Screen 
                name='Inbox' 
                component={InboxScreenNavigator} 
                options={{
                  tabBarLabel: 'Inbox',
                  tabBarIcon: ({ color, size }) => (
                    <AntDesign name={'message1'} color={color} size={size} />
                  ),
                }}  
              />
              <Tab.Screen 
                name='Profile' 
                component={ProfileScreenNavigator} 
                options={{
                  tabBarLabel: 'Profile',
                  tabBarIcon: ({ color, size }) => (
                    <AntDesign name={'user'} color={color} size={size} />
                  ),
                }}  
              />
          </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}

export default withAuthenticator(App);