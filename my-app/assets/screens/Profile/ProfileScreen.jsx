import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import styles from '../../components/Profile/styles'

const ProfileScreen = () => {
  return (
    <View style={styles.profileHomeContainer}>
        <FontAwesome5 name='user-circle' size={100} />
        <View style={styles.profileHomeText}>
            <View style={styles.profileHomeUser}> 
                <Text style={styles.profileHomeUsernameText}>Hi, I'm Username</Text>
                <Text style={styles.profileHomeJoin}>Joined in 2022</Text>
            </View>
            <TouchableOpacity style={styles.profileHomeEditBtn} onPress={() => console.log('Edit button pressed')}>
                <Text style={styles.profileHomeEditText}>Edit</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default ProfileScreen