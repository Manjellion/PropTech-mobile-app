import { ScrollView } from 'react-native'
import { Header, Hero, CardSection } from '../../components/Home/export'

const HomeScreen = () => {
  return (
    <ScrollView>
      <Header />
      <Hero />
      <CardSection />
    </ScrollView>
  )
}

export default HomeScreen