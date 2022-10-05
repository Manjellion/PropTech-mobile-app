import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Header from '../../components/Profile/Header'

import styles from '../../components/Profile/styles'

const Settings = ({ navigation }) => {
  return (
    <View style={styles.mainProfileContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('ProfileScreen')}>
            <Header />
        </TouchableOpacity>
        <View>
            <Text>Account settings</Text>
            <Text>Account settings</Text>
            <Text>Account settings</Text>
            <Text>Account settings</Text>
            <Text>Account settings</Text>
            <Text>Account settings</Text>
            <Text>Account settings</Text>
            <Text>Account settings</Text>
            <Text>Account settings</Text>
        </View>
    </View>
  )
}

export default Settings