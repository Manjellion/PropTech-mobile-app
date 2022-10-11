import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import InfoCards from '../../components/Saved/InfoCards'

const Info = () => {

  const dummyData = [
    {img:'https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80', rating: '4.98', reviews: '12', title: 'House1', location: 'Entire House in Location', guest: "4", bedroom: '3', beds: '3', bath: '2', hostImg: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80', hostName: 'Chelsea', hostStartYear: '2016', hostRank: 'Superhost', houseDesc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam ducimus atque dolor soluta necessitatibus aperiam rem ipsam assumenda quo distinctio, corporis ratione! Reprehenderit mollitia ipsa corrupti natus doloremque odit? Ratione.'}
  ]

  return (
    <ScrollView>
      {dummyData.map((data, key) => (
        <InfoCards 
          key={key}
          img={data.img}
          rating={data.rating}
          title={data.title}
          location={data.location}
          guest={data.guest}
          bedroom={data.bedroom}
          beds={data.beds}
          bath={data.bath}
          hostImg={data.hostImg}
          hostName={data.hostName}
          hostStartYear={data.hostStartYear}
          hostRank={data.hostRank}
          houseDesc={data.houseDesc}
        />
      ))}
    </ScrollView>
  )
}

export default Info