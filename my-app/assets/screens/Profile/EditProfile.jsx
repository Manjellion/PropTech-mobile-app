import { View, Text, TextInput } from 'react-native'
import React from 'react'
import styles from '../../components/Profile/styles'

const EditProfile = () => {
    return (
        <View style={styles.EditContainer}>
            <Text>Edit your Name here</Text>
            <View style={styles.EditProfileNameContainer}>
                <Text>Name: </Text>
                <TextInput 
                    style={styles.EditProfileName} 
                    placeholder='Name'
                />
            </View>
            <Text>Enter Email here</Text>
            <View style={styles.EditProfileNameContainer}>
                <Text>Email: </Text>
                <TextInput 
                    style={styles.EditProfileName} 
                    placeholder='Email'
                />
            </View>
        </View>
    )
}

export default EditProfile