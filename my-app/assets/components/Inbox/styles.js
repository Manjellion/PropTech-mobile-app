import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: "#fff"
    },
    KeyboardAvoidContainer: {
        flex: 1,
        backgroundColor: "#fff"
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
        overflow: "scroll"
    },
    Message: {
        alignSelf: "flex-start",
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
        backgroundColor: '#fff', 
        paddingLeft: 10, 
        justifySelf: 'flex-end', 
        color: '#fff'
    }
})

export default styles;