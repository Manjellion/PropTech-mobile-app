import { ScrollView, TouchableOpacity, View, FlatList, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../../components/Inbox/Header'
import MsgCard from '../../components/Inbox/MsgCard'
import styles from '../../components/Inbox/styles'

import { listUsers, getChatRoom } from '../../../src/graphql/queries'
import { createChatRoom } from '../../../src/graphql/mutations'

import { API, graphqlOperation } from 'aws-amplify'

const InboxScreen = ({ navigation }) => {
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate('MessageScreen')}>
        <Text>
          View Box
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default InboxScreen