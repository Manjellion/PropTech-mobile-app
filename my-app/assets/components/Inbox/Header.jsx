import { View, Text } from 'react-native'
import React from 'react'
import styles from './styles'

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.header}>Inbox</Text>
      <Text style={styles.subHeader}>Messages</Text>
    </View>
  )
}

export default Header