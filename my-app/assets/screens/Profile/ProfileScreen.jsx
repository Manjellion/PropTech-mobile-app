import { View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import styles from '../../components/Profile/styles'

import { Auth } from 'aws-amplify'

const ProfileScreen = () => {

  const [nameOfUser, setNameOfUser] = useState();
  const [emailOfUser, setEmailOfUser] = useState();

  useEffect(() => {
    async function getUserAttr() {
      let user = await Auth.currentAuthenticatedUser();
      const { attributes } = user;
      const userName = user.username;
      const email = user.attributes.email
      setNameOfUser(userName);
      setEmailOfUser(email)
    }
    getUserAttr();
  }, []);

  return (
    <View style={styles.profileHomeContainer}>
        <FontAwesome5 name='user-circle' size={100} />
        <View style={styles.profileHomeText}>
            <View style={styles.profileHomeUser}> 
                <Text style={styles.profileHomeUsernameText}>Hi, I'm {nameOfUser}</Text>
                <Text style={styles.profileHomeJoin}>{emailOfUser}</Text>
            </View>
            <TouchableOpacity style={styles.profileHomeEditBtn} onPress={() => console.log('Edit button pressed')}>
                <Text style={styles.profileHomeEditText}>Edit</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default ProfileScreen