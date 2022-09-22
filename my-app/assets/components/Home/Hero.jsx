import { View, Text, TouchableOpacity } from 'react-native'
import styles from './style'

const Hero = () => {
  return (
    <View style={styles.HeroContainer}>
      <View style={styles.HeroTitleContainer}>
        <Text style={styles.HeroTitleText}>Go</Text>
        <Text style={styles.HeroTitleText}>Near</Text>
      </View>
      <TouchableOpacity style={styles.HeroButton} onPress={() => console.log('Hero Button')}>
        <Text style={styles.HeroButtonText}>Explore nearby stays</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Hero