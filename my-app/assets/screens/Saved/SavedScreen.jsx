import { ScrollView, Image, View, Text, FlatList, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'

import Header from '../../components/Saved/Header'
import Cards from '../../components/Saved/Cards'

import { listSaveds } from '../../../src/graphql/queries'
import { API, graphqlOperation } from 'aws-amplify'

const SavedScreen = () => {

  const [ saved, setSaved ] = useState([]);

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

  const renderTitle = ({ item }) => (
    <TouchableOpacity onPress={() => console.log(item.id)}>
      <Cards 
        img={item.image}
        name={item.title}
      />
    </TouchableOpacity>
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