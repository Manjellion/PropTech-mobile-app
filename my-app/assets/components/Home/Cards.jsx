import { View, Text, TouchableOpacity, Image } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import styles from './style'
import React from 'react'

const Cards = (props) => {

  return (
    <View style={styles.CardContainer}>
        <TouchableOpacity style={styles.CardBoxContainer}>
            <Image source={props.image} style={styles.CardImage}/>
            <TouchableOpacity>
                <Text style={styles.CardSaveBtn} onPress={() => console.log('Saved Item')}>
                    <AntDesign name='heart' color={'red'} size={30} onPress={() => log} />
                </Text>
            </TouchableOpacity>
            <View style={styles.CardInfo}>
                <View>
                    <Text>{props.name}</Text>
                    <Text>{props.level}</Text>
                    <Text>{props.date}</Text>
                    <Text>£{props.price}</Text>
                </View>
                <Text><AntDesign name='star' color={'darkyellow'} size={17.5}/> {props.rating}</Text>
            </View>
        </TouchableOpacity>
    </View>
  )
}

export default Cards