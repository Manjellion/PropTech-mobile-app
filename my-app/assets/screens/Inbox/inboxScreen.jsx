import { ScrollView, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Header from '../../components/Inbox/Header'
import MsgCard from '../../components/Inbox/MsgCard'
import styles from '../../components/Inbox/styles'

const InboxScreen = () => {

  const dummyData = [
    {name: 'Carlos', msg: 'Thanks for reply back I will get to you later', img: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'},
    {name: 'Sam', msg: 'I can lower the price', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'},
    {name: 'Chris', msg: 'Hopefully soon again', img: 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80'},
    {name: 'Paul', msg: 'The room comes with air con and a kitchen', img: 'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'},
    {name: 'Becky', msg: 'No worries thank you!', img: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'},
    {name: 'Kesha', msg: 'Unfortunately I cannot go lower then the set pricings', img: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'},
    {name: 'Tiffany', msg: 'Sounds fantastic, I will get back too you with more info later if ...', img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80'},
  ]

  return (
    <ScrollView style={styles.mainScreenContainer}>
      <Header />
      <View>
        {dummyData.map((info, key) => (
          <TouchableOpacity key={key}>
            <MsgCard 
              img={info.img}
              username={info.name}
              userMsg={info.msg}
            />
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  )
}

export default InboxScreen