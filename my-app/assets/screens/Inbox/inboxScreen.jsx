import { ScrollView, TouchableOpacity, View, FlatList, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../../components/Inbox/Header'
import MsgCard from '../../components/Inbox/MsgCard'
import styles from '../../components/Inbox/styles'

import { listUsers } from '../../../src/graphql/queries'

import { API, graphqlOperation } from 'aws-amplify'

const InboxScreen = ({ navigation }) => {

  const [ item, setItem ] = useState([]);
  const [ itemID, setItemID ] = useState();

  useEffect(() => {
    async function getUsernameFromDynamo() {
      try {
        const getUsername = await API.graphql(
          graphqlOperation(listUsers)
        )
        setItem(getUsername.data.listUsers.items);
        console.log(username);
      } catch(err) {
        console.error('Error:', err);
      }
    };
    getUsernameFromDynamo();
  }, [])  

  const renderTitle = ({ item }) => (
    <TouchableOpacity onPress={() => {
      setItemID(item.id)
      navigation.navigate('MessageScreen', {
        id: itemID
      });
    }}>
      <MsgCard 
        username={item.username}
      />
    </TouchableOpacity>
  )

  return (
    <ScrollView style={styles.mainScreenContainer}>
      <Header />
      <FlatList 
        data={item}
        renderItem={renderTitle}
      />
    </ScrollView>
  )
}

export default InboxScreen