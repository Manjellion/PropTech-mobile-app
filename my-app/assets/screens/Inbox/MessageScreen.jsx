import { View, Text, Image, TextInput, ScrollView, KeyboardAvoidingView, Platform} from 'react-native'
import React, { useState, useEffect } from 'react'
import styles from '../../components/Inbox/styles'
import { getUser } from '../../../src/graphql/queries'
import { listMessages } from '../../../src/graphql/queries'
import { API, graphqlOperation } from 'aws-amplify'
import { SafeAreaView } from 'react-native-safe-area-context'

const MessageScreen = () => {

  const [messages, setMessages] = useState([]);

  useEffect(() => {
    API.graphql(graphqlOperation(listMessages))
    .then((response) => {
      const items = response.data?.listMessages?.items;

      if(items) {
        setMessages(items)
      }
    });
  }, []);

  // Placeholder function for handling changes to our chat bar
  const handleChange = () => {};

  // Placeholder function for handling the form submission
  const handleSubmit = () => {};
  
  return (
    <SafeAreaView style={styles.Container}>
      <KeyboardAvoidingView style={styles.KeyboardAvoidContainer} behavior="padding">
        <View style={styles.Messages}>
          <ScrollView style={styles.MessageScroller}>
            {
              messages.map((message) => (
                <Text key={message.id}>
                  {message.Text}
                </Text>
              ))
            }
          </ScrollView>
        </View>
        <View style={styles.ChatBar}>
          <View style={styles.ChatBarForm} onSubmit={handleSubmit}>
            <TextInput
              type="text"
              name="messageBody"
              placeholder="Type your message here"
              onChange={handleChange}
              value={''}
              style={styles.ChatBarInput}
            />
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default MessageScreen