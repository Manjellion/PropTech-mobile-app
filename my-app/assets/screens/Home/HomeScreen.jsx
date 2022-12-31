import { ScrollView, TouchableOpacity, View, Text, Image, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from '../../components/Home/style'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { API, graphqlOperation } from 'aws-amplify'
import { listPosts } from '../../../src/graphql/queries'

const HomeScreen = ({ navigation }) => {

  const [ posts, setPosts] = useState([]);
  const [ itemID, setItemID ] = useState();

  useEffect(() => {
      const fetchPost = async () => {
          try {
              const postsResult = await API.graphql(
                  graphqlOperation(listPosts)
              )

              setPosts(postsResult.data.listPosts.items)
          } catch(err) {
              console.log("Error:", err);
          }
      }

      fetchPost();
  }, [])

  const renderTitle = ({ item }) => (
      <View style={styles.CardBoxContainer}>
        <TouchableOpacity onPress={() => {
          setItemID(item.id);
          navigation.navigate('InfoScreen', {
            id: itemID
          });
        }}
        >
              <Image 
                  style={styles.CardImage}
                  source={{uri: item.image}}
              />
              <View style={styles.CardInfo}>
                <View>
                  <Text>{item.title}</Text>
                  <Text>House by {item.subtitle}</Text>
                  <Text>Beds: {item.bedroom}</Text>
                </View>
                <TouchableOpacity>
                    <AntDesign name='heart' color={'red'} size={26} onPress={
                      () => {
                        
                      }
                    } />
                </TouchableOpacity>
              </View>
        </TouchableOpacity>
      </View>
  );

  return (
    <ScrollView style={{ backgroundColor: '#fff' }}>
      <View style={styles.HeaderContainer}>
        <TouchableOpacity style={styles.SearchButton} onPress={() => navigation.navigate('Search')}>
          <AntDesign name='search1' size={17.5} />
          <Text style={styles.SearchText}>Search</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('SavedScreen')}>
          <AntDesign name='shoppingcart' size={32} />
        </TouchableOpacity>
      </View>
      <View style={styles.HeroContainer}>
        <View style={styles.HeroTitleContainer}>
          <Text style={styles.HeroTitleText}>Go</Text>
          <Text style={styles.HeroTitleText}>Near</Text>
        </View>
        <TouchableOpacity style={styles.HeroButton} onPress={() => navigation.navigate('Post')}>
          <Text style={styles.HeroButtonText}>List your estate</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.CardContainer}>
        <FlatList 
            data={posts}
            renderItem={renderTitle}
        />
    </View>   
    </ScrollView>
  )
}

export default HomeScreen;