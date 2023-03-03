import { ScrollView, TouchableOpacity, View, FlatList, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../../components/Inbox/Header'
import MsgCard from '../../components/Inbox/MsgCard'
import styles from '../../components/Inbox/styles'

import { listMessages} from '../../../src/graphql/queries'

import { API, graphqlOperation } from 'aws-amplify'

const InboxScreen = ({ navigation }) => {

  const [user, setUser] = useState([]);

  useEffect(() => {
     const fetchMessage = async () => {
      try {
        const getMessage = API.graphql(
          graphqlOperation(listMessages)
        )
        setUser(getMessage.data.listMessages.items)
      } catch(e) {
        console.log(e);
      }
     }

     fetchMessage()
  }, [])

  const renderTitle = ({ item }) => (
    <TouchableOpacity>
      <Text>
        {item.userID}
      </Text>
    </TouchableOpacity>
  )

  return (
    <TouchableOpacity onPress={() =>   navigation.navigate('MessageScreen')}>
    <Text>
      Dave
    </Text>
  </TouchableOpacity>
  )
}

export default InboxScreen