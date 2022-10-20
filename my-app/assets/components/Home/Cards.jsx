import { View, Text, TouchableOpacity, Image } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import styles from './style'
import React from 'react'

const Cards = (props) => {

  return (
    <View style={styles.CardContainer} key={props.key}>
        <View style={styles.CardBoxContainer}>
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
                </View>
            </View>
        </View>
    </View>
  )
}

export default Cards