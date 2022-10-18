import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    headerContainer: {
        paddingVertical: 5
    },  
    header: {
        fontSize: 40,
        fontWeight: '500',
        paddingBottom: 15
    },
    subHeader: {
        fontSize: 15,
        fontWeight: '300',
        paddingTop: 15
    },
    msgCardContainer: {
        flexDirection: 'row',
        borderWidth: .5,
        borderRightWidth: 0,
        borderLeftWidth: 0,
        padding: 10
    },
    msgCardImg: {
        width: 100,
        height: 100,
        borderRadius: 50,
        borderWidth: .5
    },
    msgCardText: {
        maxWidth: '75%',
        padding: 15
        
    },
    msgCardUsername: {
        fontSize: 20,
        marginVertical: 10,
        justifyContent: 'flex-start'
    },
    msgCardUserMsg: {
        justifyContent: 'flex-end'
    },
    mainScreenContainer: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 35
    },
    messageScreenContainer: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 35,
        paddingVertical: 10
    },
    messageScreenHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    messageScreenHeaderUsername: {
        fontSize: 20
    },
    messageScreenHeaderImg: {
        height: 100,
        width: 100,
        borderRadius: 50
    }

})

export default styles;