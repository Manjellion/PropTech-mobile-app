import { View, Text } from 'react-native'

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

import { HomeScreenNavigator, SaveScreenNavigator, ProfileScreenNavigator } from './StackNavigator'
import AntDesign from 'react-native-vector-icons/AntDesign'

const InboxTemp = () => {
  return(
    <View>
      <Text>InboxTemp</Text>
    </View>
  )
}

export default function App() {
  return (
    <>
      <NavigationContainer>
          <Tab.Navigator 
            initialRouteName='Home'
            screenOptions={{
              tabBarActiveTintColor: '#e91e63'
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
                component={InboxTemp} 
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