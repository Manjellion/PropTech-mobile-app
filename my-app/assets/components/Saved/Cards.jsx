import { View, Text } from 'react-native'
import React from 'react'

const Cards = (props) => {
  return (
    <View>
        <Image source={props.img}/>
        <Text>{props.name}</Text>
    </View>
  )
}

export default Cards