import { View, Text, TouchableOpacity, TextInput, FlatList } from 'react-native'
import styles from '../../components/Home/style'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const Search = () => {

  const [search, setSearch ] = useState('')
  const [FilteredDataSource, setFilteredDataSource] = useState([])
  const [masterDataSource, setMasterDataSource] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
          .then((response) => response.json())
          .then((responseJson) => {
            setFilteredDataSource(responseJson);
            setMasterDataSource(responseJson);
          })
          .catch((error) => {
            console.log(error);
          });
  }, [])

  const searchFilterFunction = (text) => {
    // Check if searched text is not blank
    if(text) {
      // Insert Text is not blank
      // FIlter the masterDataSource
      // Update FilteredDataSource
      const newData = masterDataSource.filter(
        function (item) {
          const itemData = item.title
            ? item.title.toUpperCase()
            : ''.toUpperCase();
          const textData = text.toUpperCase();
          return itemData.indexOf(textData) > -1
        }
      );
      setFilteredDataSource(newData);
      setSearch(text);
    } else {
      // Inserted text is blank
      // Update FilteredDataSource with masterDataSource
      setFilteredDataSource(masterDataSource);
      setSearch(text);
    }
  };

  const ItemView = ({item}) => {
    return (
      // Flat List Item
      <Text onPress={() => getItem(item)}>
        {item.id}
        {'.'}
        {item.title.toUpperCase()}
      </Text>
    )
  }

  const ItemSeparatorView = () => {
    return (
      // Flat List Item Separator
      <View 
        style={{
          height: 1,
          width: '100%',
          backgroundColor: '#c8c8c8',
          margin: 5
        }}
      />
    )
  }

  const getItem = (item) => {
    // Function for click on an item
    alert('Id : ' + item.id + ' Title : ' + item.title);
  };

  return (
    <View style={styles.searchContainer}>
          <TextInput 
            style={styles.textInputStyle}
            value={search} 
            onChangeText={(text) => searchFilterFunction(text)} 
            underlineColorAndroid="transparent"
            placeholder='Search Here'
          />
          <FlatList 
            data={FilteredDataSource}
            keyExtractor={(item, index) => index.toString()}
            ItemSeparatorComponent={ItemSeparatorView}
            renderItem={ItemView}
            style={styles.flatListStyle}
          />
    </View>
  )
}

export default Search