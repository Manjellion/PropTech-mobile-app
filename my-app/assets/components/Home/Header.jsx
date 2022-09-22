import { View, Text, TouchableOpacity } from 'react-native'
import styles from './style'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'

const Header = () => {

  const SearchResponse = () => {
    console.log('Search');
  }

  return (
    <View style={styles.HeaderContainer}>
      <View style={styles.Logo}>
        <Text style={styles.LogoText}>Logo</Text>
      </View>
        <TouchableOpacity style={styles.SearchButton} onPress={SearchResponse}>
          <Text style={styles.SearchText}><AntDesign name='search1' size={17.5}/> Where are you going?</Text>
        </TouchableOpacity>
    </View>
  )
}

export default Header