import { View, Text, Image, ScrollView, TouchableOpacity, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import styles from '../../components/Saved/style'
import * as queries from '../../../src/graphql/queries'
import { API } from 'aws-amplify'

const SavedInfo = ({ route }) => {
  
  // initialise a state variable for the textinput in form section and update the variable upon change and being sent to agent
  const [ name, onChangeName ] = useState('Full name')
  const [ email, onChangeEmail ] = useState('Email')
  const [ phone, onChangePhone ] = useState('Phone')
  const [ desc, onChangeDesc ] = useState('I am interest in this property')

  const [ item, setItem ] = useState([])
  
  const { id } = route.params;

  useEffect(function() {
    async function getEstateFunction() {
      try {
        const getData = await API.graphql({
          query: queries.getPost,
          variables: { id: id }
        })
        setItem(getData.data.getPost)
        console.log(getData);
      } catch(e) {
        console.log("Error: ", e);
      }
    }
    getEstateFunction();
  }, [])

  return (
    <ScrollView style={styles.cardInfoContainer}>
      <Text style={styles.cardInfoHeader}>{item.title}</Text>
      <Text style={styles.cardInfoTitle}>House by {item.subtitle}</Text>
      <Image source={{ uri: item.image }} style={styles.cardInfoImage} />
      <View style={styles.cardInfomation}>
        <Text style={styles.cardInfoPropertyInfo}>Listed at: {item.createdAt}</Text>
          <Text style={styles.cardInfoPrice}>For Sale: ${item.price}</Text>
          <Text style={styles.cardInfoPropertyInfo}><FontAwesome5 name='home' size={30} />  Property Type: {item.type}</Text>
          <Text style={styles.cardInfoPropertyInfo}><FontAwesome5 name='car' size={30} />  Garage: {item.garage}</Text>
          <Text style={styles.cardInfoPropertyInfo}><FontAwesome5 name='bed' size={30} />  Bedrooms: {item.bedroom}</Text>
          <Text style={styles.cardInfoDesciprtion}>{item.description}</Text>
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