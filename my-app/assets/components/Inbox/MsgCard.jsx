import { View, Text, Image } from 'react-native'
import React from 'react'
import styles from './styles'


const MsgCard = (props) => {
  return (
    <View style={styles.msgCardContainer}>
        <View style={styles.msgCardText}>
            <Text style={styles.msgCardUsername}>{props.username}</Text>
        </View>
    </View>
  )
}

export default MsgCard