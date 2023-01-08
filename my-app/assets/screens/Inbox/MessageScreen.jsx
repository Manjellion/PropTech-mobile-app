import { View, Text, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import styles from '../../components/Inbox/styles'
import { getUser } from '../../../src/graphql/queries'
import { listChatRooms } from './queries'
import { API, graphqlOperation } from 'aws-amplify'

const MessageScreen = ({ route }) => {

  const { id } = route.params;

  const [ item, setItem ] = useState([]);

  useEffect(function() {
    const fetchChatRooms = async () => {
      const response = await API.graphql(
        graphqlOperation(listChatRooms)
      );
      console.log(response);
    };

    fetchChatRooms()
  }, [])
  
  return (
    <View style={styles.messageScreenContainer}>
      <View style={styles.messageScreenHeader}>
        <Text style={styles.messageScreenHeaderUsername}>{item}</Text>
        <Text>{item.email}</Text>
      </View>
    </View>
  )
}

export default MessageScreen