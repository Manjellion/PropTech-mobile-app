import { View, Text, Image } from 'react-native'
import React from 'react'
import styles from '../../components/Inbox/styles'

const MessageScreen = () => {
  return (
    <View style={styles.messageScreenContainer}>
      <View style={styles.messageScreenHeader}>
        <Text style={styles.messageScreenHeaderUsername}>Username</Text>
        <Image source={{uri: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'}} style={styles.messageScreenHeaderImg} />
      </View>

    </View>
  )
}

export default MessageScreen