import { View, Text, Image, TextInput, ScrollView, KeyboardAvoidingView, Platform, TouchableOpacity} from 'react-native'
import React, { useState, useEffect } from 'react'
import styles from '../../components/Inbox/styles'
import { listMessages } from '../../../src/graphql/queries'
import { createMessage } from '../../../src/graphql/mutations'
import { API, graphqlOperation } from 'aws-amplify'
import { SafeAreaView } from 'react-native-safe-area-context'

const MessageScreen = () => {

  const [messages, setMessages] = useState([]);
  const [text, onChangeText] = useState("");

  useEffect(() => {
    API.graphql(graphqlOperation(listMessages))
    .then((response) => {
      const items = response.data?.listMessages?.items;

      if(items) {
        setMessages(items)
      }
    });
  }, []);

  // Placeholder function for handling the form submission
  const handleSubmit = () => {

    const createText = {
      Text: text,
      chatroomID: 1,
      userID: "James"
    }

    API.graphql(
      graphqlOperation(createMessage, {input: createText})
    )
  };

  return (
    <SafeAreaView style={styles.Container}>
      <KeyboardAvoidingView style={styles.KeyboardAvoidContainer} behavior="padding">
        <Text style={styles.MessagerNameID}>Dave</Text>
        <View style={styles.Messages}>
          <ScrollView style={styles.MessageScroller}>
            {
              messages.map((message) => (
                <Text key={message.id} style={styles.Message}>
                  {message.Text}
                </Text>
              ))
            }
          </ScrollView>
        </View>
        <View style={styles.ChatBar}>
          <View style={styles.ChatBarForm}>
            <TextInput
              type="text"
              name="messageBody"
              placeholder="Type your message here"
              onChangeText={onChangeText}
              value={text}
              style={styles.ChatBarInput}
            />
            <TouchableOpacity style={styles.ChatBarSendBtn} onPress={() => handleSubmit()}>
              <Text>Send</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default MessageScreen