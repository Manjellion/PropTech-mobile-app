import { ScrollView, TouchableOpacity, View, Text } from 'react-native'
import { Hero } from '../../components/Home/export'
import Cards from '../../components/Home/Cards'
import dummyImg from '../../images/dummyImage.jpg'
import styles from '../../components/Home/style'
import AntDesign from 'react-native-vector-icons/AntDesign'

const HomeScreen = ({ navigation }) => {

  const dummyData = [
    {img: {dummyImg}, name: 'House1', level: 'Professional Host'},
    {img: {dummyImg}, name: 'House1', level: 'Professional Host'},
    {img: {dummyImg}, name: 'House1', level: 'Professional Host'},
    {img: {dummyImg}, name: 'House1', level: 'Professional Host'},
    {img: {dummyImg}, name: 'House1', level: 'Professional Host'},
    {img: {dummyImg}, name: 'House1', level: 'Professional Host'},
  ]

  return (
    <ScrollView style={{ backgroundColor: '#fff' }}>
    <View style={styles.HeaderContainer}>
      <TouchableOpacity style={styles.SearchButton} onPress={() => navigation.navigate('Search')}>
        <AntDesign name='search1' size={17.5} />
        <Text style={styles.SearchText}>Search</Text>
    </TouchableOpacity>
    </View>
      <Hero />
        {dummyData.map((cardInfo, key) => (
          <TouchableOpacity onPress={() => navigation.navigate('InfoScreen')} style={{ padding: 20 }} key={key}>
            <Cards
              image={dummyImg}
              name={cardInfo.name}
              level={cardInfo.level}
            />
          </TouchableOpacity> 
        ))}
    </ScrollView>
  )
}

export default HomeScreen