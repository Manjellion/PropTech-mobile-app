import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import styles from './styles'
import AntDesign from 'react-native-vector-icons/AntDesign'

import { Auth } from 'aws-amplify'

const Header = () => {

  const [nameOfUser, setNameOfUser] = useState(null);

  useEffect(() => {
    async function getUserAttr() {
      let user = await Auth.currentAuthenticatedUser();
      const { attributes } = user;
      const userName = user.username;
      setNameOfUser(userName);
    }
    getUserAttr();
  }, []);

  return (
    <View style={styles.profileContainer}>
        <FontAwesome5 name='user-circle' size={100} />
        <Text style={styles.profileUsername}>{nameOfUser}</Text>
        <Text style={styles.profileText}>Show Profile <AntDesign name={"arrowright"} size={25}/></Text>
    </View>
  )
}

export default Header