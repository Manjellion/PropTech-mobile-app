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
        paddingLeft: 5
    },
    mainProfileContainer: {
        paddingHorizontal: 30
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
    profileHomeEdit: {
        fontSize: 20,
    }
})

export default styles;