import { TouchableOpacity, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from '../../components/Inbox/styles'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

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

  const item = [
    {name: 'Dave', preMessage: 'How are you'}
  ]

  const renderTitle = ({ item }) => (
    <TouchableOpacity>
      <Text>
        {item.userID}
      </Text>
    </TouchableOpacity>
  )

  return (
    <View style={styles.ContainerInbox}>
      <View style={styles.InboxList}>
        <TouchableOpacity 
          style={styles.InboxItem}
          onPress={() =>  navigation.navigate('MessageScreen')}
        >
          <FontAwesome5 name='user-circle' size={100} />
          <View style={styles.InboxItemInfo}>
            <Text style={styles.InboxItemInfoName}>
              {item[0].name}
            </Text>
            <Text style={styles.InboxItemInfoPreMessage}>
              {item[0].preMessage}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default InboxScreen