import { View, Text, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import styles from '../../components/Inbox/styles'
import { getUser } from '../../../src/graphql/queries'
import { API } from 'aws-amplify'

const MessageScreen = ({ route }) => {

  const { id } = route.params;

  const [ item, setItem ] = useState([]);

  useEffect(function() {
    async function getEstateFunction() {
      try {
        const getData = await API.graphql({
          query: getUser,
          variables: { id: id }
        })
        setItem(getData.data.getUser)
        console.log(item.username);
      } catch(e) {
        console.log("Error: ", e);
      }
    }
    getEstateFunction();
  }, [])
  
  return (
    <View style={styles.messageScreenContainer}>
      <View style={styles.messageScreenHeader}>
        <Text style={styles.messageScreenHeaderUsername}>{item.username}</Text>
        <Text>{item.email}</Text>
      </View>
    </View>
  )
}

export default MessageScreen