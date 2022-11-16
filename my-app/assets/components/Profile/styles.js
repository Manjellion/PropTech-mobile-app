import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    profileContainer: {
        paddingVertical: 50,
        justifyContent: 'center',
        alignSelf: 'flex-start'
    },
    profileUsername: {
        fontSize: 40,
        fontWeight: '500',
        paddingLeft: 5
    },
    profileText: {
        fontSize: 25,
        color: 'grey',
        paddingLeft: 5,
    },
    mainProfileContainer: {
        paddingHorizontal: 30,
        flex: 1,
        backgroundColor: '#fff'
    },
    accountSetting: {
        paddingVertical: 5
    },
    profileHomeContainer: {
        padding: 25
    },
    profileHomeText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    profileHomeUser: {
        paddingVertical: 25
    },
    profileHomeUsernameText: {
        fontSize: 30,
        fontWeight: '500'
    },
    profileHomeJoin: {
        fontSize: 20,
        color: 'grey'
    },
    profileHomeEditBtn: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: '#e91e63',
        borderRadius: 10
    },
    profileHomeEditText: {
        fontSize: 20,
        color: '#fff'
    },
    accountSettings: {
        paddingVertical: 25
    },
    accountSettingsHeader: {
        fontSize: 20,
        fontWeight: '500',
        marginVertical: 10
    },  
    accountSettingsText: {
        fontSize: 15,
        marginVertical: 5,
        fontWeight: '300',
    },
    supportSection: {
        paddingTop: 25,
        paddingBottom: 50
    },
    supportSectionHeader: {
        fontSize: 20,
        fontWeight: '500',
        marginVertical: 10   
    },
    supportSectionText: {
        fontSize: 15,
        marginVertical: 5,
        fontWeight: '300',
    },
    settingsSignOutBtn: {
        padding: 20,
        marginBottom: 50,
        width: '50%',
        backgroundColor: '#e91e63',
        alignSelf: 'center',
        borderRadius: 10
    },
    settingsSignOutBtnText: {
        textAlign: 'center',
        color: '#fff',
        fontWeight: '500',
        fontSize: 15
    }
})

export default styles;