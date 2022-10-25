import { View, Text } from 'react-native'
import React from 'react'
import styles from './style'

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerTitle}>Wishlists</Text>
    </View>
  )
}

export default Header