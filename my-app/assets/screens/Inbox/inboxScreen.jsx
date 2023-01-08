import { ScrollView, TouchableOpacity, View, FlatList, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../../components/Inbox/Header'
import MsgCard from '../../components/Inbox/MsgCard'
import styles from '../../components/Inbox/styles'

import { listUsers, getChatRoom } from '../../../src/graphql/queries'
import { createChatRoom } from '../../../src/graphql/mutations'

import { API, graphqlOperation } from 'aws-amplify'

const InboxScreen = ({ navigation }) => {

  const [ item, setItem ] = useState([]);
  const [ itemID, setItemID ] = useState();
  const [ chatroomID, setCharoomID ] = useState([]);

  useEffect(() => {
    const fetchChatRooms = async () => {
      const response = await API.graphql(
        graphqlOperation(listChatRooms)
      );
      console.log(response);
    };

    fetchChatRooms()
  }, [])  

  const messageLoader = async () => {
    // Create a new Chatroom 
    const newChatroomData = await API.graphql(
      graphqlOperation(createChatRoom, {
        input: {

        }
      })
    )
    console.log(newChatroomData);
    if(!newChatroomData.data.newChatroomData) {
      console.log("Error creating new chatroom");
    }

    const newChatroom = newChatroomData.data.newChatroom;
    // Add the clicked user to the chat
  }

  const renderTitle = ({ item }) => (
    <TouchableOpacity onPress={() => {
      setItemID(item.id)
      messageLoader();
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