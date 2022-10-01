import { View, Text } from 'react-native'
import React from 'react'
import styles from './style'

import dummyImg from '../../images/dummyImage.jpg'
import Cards from './Cards'

const Header = () => {

  const dummyData = [
    {img: {dummyImg}, name: 'Houses'},
    {img: {dummyImg}, name: 'Houses'},
    {img: {dummyImg}, name: 'Houses'},
  ]

  const sectionChange = () => {
    // If no saved data then return this (store the data in an array)
    if (dummyData.length == 0) {
      return <View style={styles.headerText}>
              <Text style={styles.HeaderTextMain}>Create you first wishlist</Text>
              <Text style={styles.HeaderTextSub}>
                  As you search, tap the heart icon to save your 
                  favourite places to stay or things to do to a
                  wishlist
              </Text>
            </View>
  
    } else {
      return <View>
        {dummyData.map((cardInfo, key) => (
          <Cards key={key}
            img = {cardInfo.img}
            name = {cardInfo.name}
          />
        ))}
      </View>
    }
  }

  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerTitle}>Wishlists</Text>
      <View>
        {sectionChange}
      </View>
    </View>
  )
}

export default Header