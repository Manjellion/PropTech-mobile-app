import { View, Text, Image } from 'react-native'
import React from 'react'
import styles from './styles'


const MsgCard = (props) => {
  return (
    <View style={styles.msgCardContainer}>
        <Image 
            source={{
            uri: props.img
            }}
            style={styles.msgCardImg} 
        />
        <View style={styles.msgCardText}>
            <Text style={styles.msgCardUsername}>{props.username}</Text>
            <Text style={styles.msgCardUserMsg}>{props.userMsg}</Text>
        </View>
    </View>
  )
}

export default MsgCard