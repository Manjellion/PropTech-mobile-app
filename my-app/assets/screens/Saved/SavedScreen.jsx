import { ScrollView, TouchableOpacity, View } from 'react-native'
import React from 'react'

import Header from '../../components/Saved/Header'
import dummyImg from '../../images/dummyImage.jpg'
import Cards from '../../components/Saved/Cards'

const SavedScreen = ({ navigation }) => {

  const dummyData = [
    {img: {dummyImg}, name: 'House1'},
    {img: {dummyImg}, name: 'House2'},
    {img: {dummyImg}, name: 'House3'},
    {img: {dummyImg}, name: 'House4'},
    {img: {dummyImg}, name: 'House5'},
    {img: {dummyImg}, name: 'House6'},
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
          <Cards
            key={key}
            img = {cardInfo.img}
            name = {cardInfo.name}
          />
        ))}
      </View>
    }
  }

  return (
    <ScrollView style={{ backgroundColor: '#fff', flex: 1 }}>
      <Header />
        {dummyData.map((cardInfo, key) => (
          <TouchableOpacity onPress={() => navigation.navigate('InfoScreen')} key={key}>
            <Cards 
              img={dummyImg}
              name={cardInfo.name}
            />
          </TouchableOpacity>
        ))}
    </ScrollView>
  )
}

export default SavedScreen