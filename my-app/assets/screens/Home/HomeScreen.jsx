import { ScrollView, TouchableOpacity } from 'react-native'
import { Header, Hero } from '../../components/Home/export'
import Cards from '../../components/Home/Cards'
import dummyImg from '../../images/dummyImage.jpg'

const HomeScreen = ({ navigation }) => {

  const dummyData = [
    {img: {dummyImg}, name: 'House1', level: 'Professional Host', date: '20-25 Nov', price: '1600', rating: '4.98'},
    {img: {dummyImg}, name: 'House1', level: 'Professional Host', date: '20-25 Nov', price: '1600', rating: '4.98'},
    {img: {dummyImg}, name: 'House1', level: 'Professional Host', date: '20-25 Nov', price: '1600', rating: '4.98'},
    {img: {dummyImg}, name: 'House1', level: 'Professional Host', date: '20-25 Nov', price: '1600', rating: '4.98'},
    {img: {dummyImg}, name: 'House1', level: 'Professional Host', date: '20-25 Nov', price: '1600', rating: '4.98'},
    {img: {dummyImg}, name: 'House1', level: 'Professional Host', date: '20-25 Nov', price: '1600', rating: '4.98'},
  ]

  return (
    <ScrollView style={{ backgroundColor: '#fff' }}>
      <Header />
      <Hero />
        {dummyData.map((cardInfo, key) => (
          <TouchableOpacity onPress={() => navigation.navigate('InfoScreen')} style={{ padding: 20 }}>
            <Cards
              image={dummyImg}
              name={cardInfo.name}
              level={cardInfo.level}
              date={cardInfo.date}
              price={cardInfo.price}
              rating={cardInfo.rating}
            />
          </TouchableOpacity> 
        ))}
    </ScrollView>
  )
}

export default HomeScreen