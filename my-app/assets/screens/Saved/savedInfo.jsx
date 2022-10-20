import { View, Text, Image, ScrollView, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'

import dummyImg from '../../images/dummyImage.jpg'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import styles from '../../components/Saved/style'

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
          <Text style={styles.cardInfoPrice}>For Sale: £400,000</Text>
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
    </ScrollView>
  )
}

export default SavedInfo