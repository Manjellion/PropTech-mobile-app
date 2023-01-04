import { Text, Image, View } from 'react-native'
import React from 'react'
import styles from './style'

const Cards = (props) => {
  return (
    <View style={styles.cardContainer} key={props.key}>
        <Image source={{ uri: props.img }} style={styles.cardImg} />
        <Text style={styles.cardText}>{props.name}</Text>
    </View>
  )
}

export default Cards