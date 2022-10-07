import { View, Text, Image, ScrollView, Button } from 'react-native'
import React from 'react'
import dummyImg from '../../images/dummyImage.jpg'
import AntDesign from 'react-native-vector-icons/AntDesign'
import styles from '../../components/Saved/style'

const SavedInfo = () => {
  return (
    <ScrollView style={styles.cardInfoContainer}>
      <Text style={styles.cardInfoHeader}>Houses</Text>
      <View style={styles.cardInfoButtonContainer}>
        <Button title="Dates" style={styles.cardInfoButton}/>
        <Button title="Guest" style={styles.cardInfoButton}/>
      </View>
      <Image source={dummyImg} style={styles.cardInfoImage} />
      <View style={styles.cardInfomation}>
        <View style={styles.cardInfoTextContainer}>
          <Text style={styles.cardInfoTextTitle}>Entire House in Location</Text>
          <Text style={styles.cardInfoText}>Lorem Speech since 1918 custom</Text>
          <Text style={styles.cardInfoText}>4 beds</Text>
          <Text style={styles.cardInfoTextTitle}>£198 night</Text>
        </View>
        <Text style={styles.cardInfoRating}><AntDesign name='star' color={'darkyellow'} size={17.5}/>4.98 (73)</Text>
      </View>
    </ScrollView>
  )
}

export default SavedInfo