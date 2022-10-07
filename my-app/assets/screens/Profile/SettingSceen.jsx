import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import Header from '../../components/Profile/Header'

import styles from '../../components/Profile/styles'

const Settings = ({ navigation }) => {
  return (
    <ScrollView style={styles.mainProfileContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('ProfileScreen')}>
            <Header />
        </TouchableOpacity>
        <View style={styles.accountSettings}>
            <Text style={styles.accountSettingsHeader}>Account settings</Text>
            <Text style={styles.accountSettingsText}>Personal information</Text>
            <Text style={styles.accountSettingsText}>Payments and payouts</Text>
            <Text style={styles.accountSettingsText}>Translation</Text>
            <Text style={styles.accountSettingsText}>Notifications</Text>
            <Text style={styles.accountSettingsText}>Privacy and sharing</Text>
        </View>
        <View style={styles.hostingSection}>
            <Text style={styles.hostingSectionHeader}>Hosting</Text>
            <Text style={styles.hostingSectionText}>Host</Text>
            <Text style={styles.hostingSectionText}>Host Info</Text>
        </View>
        <View style={styles.supportSection}>
            <Text style={styles.supportSectionHeader}>Support</Text>
            <Text style={styles.supportSectionText}>How it works</Text>
            <Text style={styles.supportSectionText}>Safety Centre</Text>
            <Text style={styles.supportSectionText}>Get help</Text>
            <Text style={styles.supportSectionText}>Give us feedback</Text>
        </View>
        <TouchableOpacity style={styles.settingsSignOutBtn} onPress={() => console.log("Log out button pressed")}>
          <Text style={styles.settingsSignOutBtnText}>Sign Out</Text>
        </TouchableOpacity>
    </ScrollView>
  )
}

export default Settings