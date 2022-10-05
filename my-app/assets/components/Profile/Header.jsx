import { View, Text } from 'react-native'
import React from 'react'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import styles from './styles'

const Header = () => {
  return (
    <View style={styles.profileContainer}>
        <FontAwesome5 name='user-circle' size={100} />
        <Text style={styles.profileUsername}>Username</Text>
        <Text style={styles.profileText}>Show Profile</Text>
    </View>
  )
}

export default Header