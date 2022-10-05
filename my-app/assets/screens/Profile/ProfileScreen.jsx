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
            <TouchableOpacity>
                <Text style={styles.profileHomeEdit}>Edit</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default ProfileScreen