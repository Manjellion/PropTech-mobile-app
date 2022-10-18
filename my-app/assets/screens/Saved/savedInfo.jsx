<<<<<<< HEAD
import { View, Text, Image, ScrollView, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
=======
import { View, Text, Image, ScrollView, Button, TouchableOpacity } from 'react-native'
import React from 'react'
>>>>>>> d2e381b44e3c8d533bfa708f3a029c7c441dfe8f
import dummyImg from '../../images/dummyImage.jpg'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import styles from '../../components/Saved/style'

<<<<<<< HEAD
const SavedInfo = () => {
  
  // initialise a state variable for the textinput in form section and update the variable upon change and being sent to agent
  const [ name, onChangeName ] = useState('Full name')
  const [ email, onChangeEmail ] = useState('Email')
  const [ phone, onChangePhone ] = useState('Phone')
  const [ desc, onChangeDesc ] = useState('I am interest in this property')

  // dummyData is sub for the frontend without server to act as a rest API
  const dummyData = {
    propertyType: 'family', 
    GarageNum: '2', 
    numOfBedrooms: '4'
  }

  return (
    <ScrollView style={styles.cardInfoContainer}>
      <Text style={styles.cardInfoHeader}>Houses</Text>
      <Text style={styles.cardInfoTitle}>House by Owner</Text>
      <Image source={dummyImg} style={styles.cardInfoImage} />
      <View style={styles.cardInfomation}>
          <Text style={styles.cardInfoPrice}>For Sale: $400,000</Text>
          <Text style={styles.cardInfoPropertyInfo}><FontAwesome5 name='home' size={30} />  Property Type: {dummyData.propertyType}</Text>
          <Text style={styles.cardInfoPropertyInfo}><FontAwesome5 name='car' size={30} />  Garage: {dummyData.GarageNum}</Text>
          <Text style={styles.cardInfoPropertyInfo}><FontAwesome5 name='bed' size={30} />  Bedrooms: {dummyData.numOfBedrooms}</Text>
          <Text style={styles.cardInfoDesciprtion}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum, aliquid autem error voluptas quaerat aliquam culpa fugiat dignissimos molestias, explicabo molestiae quam repellat minus rem recusandae aperiam repellendus iste quidem!</Text>
      </View>
      <View style={styles.cardInfoContact}>
        <TouchableOpacity style={styles.cardInfoContactMsgBtn}>
          <Text style={styles.cardInfoContactMsgBtnText}>Message them now</Text>
        </TouchableOpacity>
        <Text>or</Text>
        <View style={styles.cardInfoContactForm}>
          <Text style={styles.cardInfoContactFormTitle}>Ask a question</Text>
          <TextInput onChange={onChangeName} value={name} style={styles.textInput} />
          <TextInput onChange={onChangeEmail} value={email} style={styles.textInput} />
          <TextInput onChange={onChangePhone} value={phone} style={styles.textInput} />
          <TextInput onChange={onChangeDesc} value={desc} style={styles.textInputDesc} />
          <View style={styles.cardInfoContactFormBtnSection}>
            <TouchableOpacity style={styles.cardInfoContactFormBtn}>
              <Text style={styles.cardInfoContactFormBtnText}>Email Agent</Text>
            </TouchableOpacity>
            <Text>or</Text>
            <TouchableOpacity style={styles.cardInfoContactFormBtn}>
              <Text style={styles.cardInfoContactFormBtnText}>Call Now</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
=======
const SavedInfo = ({ navigation }) => {
  return (
    <ScrollView style={styles.cardInfoContainer}>
      <TouchableOpacity onPress={() => navigation.navigate('Info')}>
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
      </TouchableOpacity>
>>>>>>> d2e381b44e3c8d533bfa708f3a029c7c441dfe8f
    </ScrollView>
  )
}

export default SavedInfo