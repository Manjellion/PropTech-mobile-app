import { Text, Image, View } from 'react-native'
import React from 'react'
import styles from './style'

const Cards = (props) => {
  return (
    <View style={styles.cardContainer}>
        <Image source={props.img} style={styles.cardImg} />
        <Text style={styles.cardText}>{props.name}</Text>
    </View>
  )
}

export default Cards