import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './style'

const InfoCards = (props) => {
  return (
    <View style={styles.infoCardsContainer}>
        <Image source={props.img} style={styles.infoCardImg} />
        <View style={styles.infoCardHeader}>
            <Text>{props.rating}</Text>
            <Text>{props.reviews} reviews</Text>
        </View>
        <View style={styles.section1}>
            <Text>{props.title}</Text>
            <Text>{props.location}</Text>
        </View>
        <View style={styles.section2}>
            <Text>{props.guest} guests</Text>
            <Text>{props.bedroom} bedrooms</Text>
            <Text>{props.beds} beds</Text>
            <Text>{props.bath} baths</Text>
        </View>
        <View style={styles.section3}>
            <Image source={props.hostImg} style={styles.infoCardHostImg} />
            <View>
                <Text>Meet your Host,</Text>
                <Text>{props.hostName}</Text>
                <Text>Hosting since {props.hostStartYear}</Text>
                <Text>{props.hostRank}</Text>
            </View>
        </View>
        <View style={styles.section4}>
            <Text>Why you'll love it here</Text>
            <Text>{props.houseDesc}</Text>
        </View>
        <TouchableOpacity style={styles.infoCardBtn}>
                <Text>Resrve Now</Text>
        </TouchableOpacity>
    </View>
  )
}

export default InfoCards