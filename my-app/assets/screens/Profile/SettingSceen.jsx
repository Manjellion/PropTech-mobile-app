import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import Header from '../../components/Profile/Header'

import styles from '../../components/Profile/styles'

import { Auth } from 'aws-amplify'

const Settings = ({ navigation }) => {

  async function signOut() {
    try {
      await Auth.signOut();
    } catch(err) {
      console.log("Error: ", err);
    }
  }

  return (
    <ScrollView style={styles.mainProfileContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('ProfileScreen')}>
            <Header />
        </TouchableOpacity>
        <View style={styles.accountSettings}>
            <Text style={styles.accountSettingsHeader}>Account settings</Text>
            <Text style={styles.accountSettingsText}>Personal information</Text>
            <Text style={styles.accountSettingsText}>Notifications</Text>
            <Text style={styles.accountSettingsText}>Privacy and sharing</Text>
        </View>
        <View style={styles.supportSection}>
            <Text style={styles.supportSectionHeader}>Support</Text>
            <Text style={styles.supportSectionText}>How it works</Text>
            <Text style={styles.supportSectionText}>Get help</Text>
            <Text style={styles.supportSectionText}>Give us feedback</Text>
        </View>
        <TouchableOpacity style={styles.settingsSignOutBtn} onPress={() => signOut()}>
          <Text style={styles.settingsSignOutBtnText}>Sign Out</Text>
        </TouchableOpacity>
    </ScrollView>
  )
}

export default Settings