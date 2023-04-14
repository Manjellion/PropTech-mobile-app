import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    /* For Inbox Screen */
    ContainerInbox: {
        flex: 1,
        backgroundColor: '#fff'
    },
    InboxList: {
        paddingHorizontal: 30,
        display: 'flex',
        borderWidth: .75,
        paddingVertical: 15
    },
    InboxItem: {
        flexDirection: 'row',
    },
    InboxItemInfo: {
        paddingTop: 10,
        paddingLeft: 20
    },
    InboxItemInfoName: {
        fontSize: 20,
        fontWeight: '500',
    },
    InboxItemInfoPreMessage: {
        paddingTop: 10,
    },
    /* For Meesage Screen */
    Container: {
        flex: 1,
        backgroundColor: "#fff"
    },
    KeyboardAvoidContainer: {
        flex: 1,
        backgroundColor: "#fff"
    },
    MessagerNameID: {
        fontSize: 25,
        fontWeight: '500',
        paddingLeft: 20,
        borderBottomWidth: .5
    },
    Messages: {
        flex: 1,
    },
    MessageScroller: {
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
        display: "flex",
        flexDirection: "column",
        padding: 16,
        overflow: "scroll",
    },
    Message: {
        alignSelf: "flex-end",
        marginTop: 4,
        paddingVertical: 8,
        paddingHorizontal: 12,
        maxWidth: 240,
        backgroundColor: "#f1f0f0",
        borderRadius: 16,
        fontSize: 14
    },
    UserMessage: {
        alignSelf: "flex-end",
        backgroundColor: "#f19e38",
        color: "#fff"
    },
    ChatBar: {
        height: 150,
        borderTopWidth: 1,
        borderColor: "#ddd",
    },
    ChatBarForm: {
        height: "100%",
        padding: 16
    },
    ChatBarInput: {
        height: 40, 
        width: '100%', 
        backgroundColor: 'lightgrey', 
        paddingLeft: 10, 
    },
    ChatBarSendBtn: {
        padding: 10,
        marginTop: 10,
        backgroundColor: '#e91e63'
    }
})

export default styles;