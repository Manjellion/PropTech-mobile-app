import { View, Text } from 'react-native'
import React from 'react'
import Cards from './Cards'
import dummyImage from '../../images/dummyImage.jpg'

const CardSection = () => {
  return (
    <View>
        <Cards
            image={dummyImage}
            name='Harlingen, Netherlands'
            level='Professional Host'
            date='20-25 Nov'
            price='1600'
            rating='4.98'
        />
        <Cards
            image={dummyImage}
            name='Harlingen, Netherlands'
            level='Professional Host'
            date='20-25 Nov'
            price='1600'
            rating='4.98'
        />
        <Cards
            image={dummyImage}
            name='Harlingen, Netherlands'
            level='Professional Host'
            date='20-25 Nov'
            price='1600'
            rating='4.98'
        />
    </View>
  )
}

export default CardSection