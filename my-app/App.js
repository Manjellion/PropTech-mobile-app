import HomeScreen from './assets/screens/Home/HomeScreen';
import SavedScreen from './assets/screens/Saved/SavedScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
        <Tab.Navigator>
            <Tab.Screen name='Home' component={HomeScreen} />
            <Tab.Screen name='Saved' component={SavedScreen} />
            <Tab.Screen name='Inbox' component={HomeScreen} />
            <Tab.Screen name='Profile' component={SavedScreen} />
        </Tab.Navigator>
    </NavigationContainer>
  );
}