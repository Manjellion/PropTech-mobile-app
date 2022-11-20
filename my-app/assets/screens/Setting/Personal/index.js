import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Auth } from 'aws-amplify'

const index = () => {

  const [ name, setName ] = useState();
  const [ email, setEmail ] = useState();
  const [ emailStatus, setEmailStatus ] = useState();

  useEffect(() => {
    async function getAuthInfo() {
      let user = await Auth.currentUserInfo();
      const { attributes } = user;
      const userName = user.username;
      const userEmail = user.attributes.email;
      const userEmailStatus = user.attributes.email_verified;
      const stringStatus = JSON.stringify(userEmailStatus);
      
      setName(userName);
      setEmail(userEmail);
      setEmailStatus(stringStatus);
    }
    getAuthInfo();

  }, [])

  return (
    <View>
      <Text>Name: {name}</Text>
      <Text>Email: {email}</Text>
      <Text>Verified Email: {emailStatus}</Text>
    </View>
  )
}

export default index