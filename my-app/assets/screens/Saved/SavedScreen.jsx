import { ScrollView, Image, View, Text, FlatList, TouchableOpacity, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'

import Header from '../../components/Saved/Header'
import Cards from '../../components/Saved/Cards'
import styles from '../../components/Saved/style'

import { listSaveds } from '../../../src/graphql/queries'
import { deleteSaved } from '../../../src/graphql/mutations'
import { API, graphqlOperation } from 'aws-amplify'

const SavedScreen = ({ navigation }) => {

  const [ saved, setSaved ] = useState([]);
  const [ itemID, setItemID ] = useState([]); 
  const [ infoItemID, setInfoItemID ] = useState();

  useEffect(function() {
    const fetchSavedItems = async () => {
      try {
        const savedItems = await API.graphql(
          graphqlOperation(listSaveds)
        )
        setSaved(savedItems.data.listSaveds.items);
        console.log(savedItems.data.listSaveds.items);
      } catch(err) {
        console.error("Error:", err);
      }
    };
    fetchSavedItems()
  }, []);

  const deleteDataInfo = {
    id: itemID.id
  }

  async function deleteItem() {
    try {
      await API.graphql({
        query: deleteSaved,
        variables: { input: deleteDataInfo }
      });
      console.log("Item successfully deleted");
      Alert.alert('Item deleted, please refresh')
    } catch(err) {
      console.error("Error:", err);
    }
  }

  const renderTitle = ({ item }) => (
    <View style={styles.cardContainerOnScreen}>
      <TouchableOpacity onPress={() => {
        setInfoItemID(item.id)
        navigation.navigate('InfoScreen', {
          savedID: infoItemID
        });
      }}>
        <Cards 
          img={item.image}
          name={item.title}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.cardDeleteButtonContainer} onPress={function() {
        setItemID(item);
        console.log(itemID);
        deleteItem();
      }}>
            <Text style={styles.cardDeleteButtonText}>Delete</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <ScrollView style={{ backgroundColor: '#fff', flex: 1 }}>
      <Header />
      <FlatList 
        data={saved}
        renderItem={renderTitle}
      />
    </ScrollView>
  )
}

export default SavedScreen