import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    headerContainer: {
        padding: 25
    },
    headerTitle: {
        fontSize: 40,
        fontWeight: '500'
    },
    headerText: {
        paddingTop: 30,
    },
    HeaderTextMain: {
        fontSize: 20,
        color: 'grey'
    },
    HeaderTextSub: {
        fontSize: 15,
        color: 'grey',
        paddingVertical: 5
    },
    cardContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 10,
        padding: 25
    },
    cardImg: {
        width: 160,
        height: 160,
        borderRadius: 10
    },
    cardText: {
        marginRight: 100,
        fontWeight: '500'
    },
    cardInfoContainer: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 35,
    },
    cardInfoHeader: {
        fontSize: 40,
        fontWeight: '500',
        paddingVertical: 5
    },
    cardInfoButtonContainer: {
        flexDirection: 'row',
        paddingVertical: 5
    },
    cardInfoImage: {
        height: 300,
        width: 350,
        borderRadius: 10,
        alignSelf: 'center',
    },
    cardInfomation: {
        flexDirection:'row',
        justifyContent: 'space-between',
        paddingVertical: 10
    },
    cardInfoTextTitle: {
        fontSize: 20,
        fontWeight: '500',
        paddingVertical: 1
    },
    cardInfoText: {
        color: 'grey',
        paddingVertical: 1
    },
    infoCardsContainer: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 35
    },
    infoCardImg: {
        height: 300,
        width: '100%'
    },
    infoCardHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 10
    }
})

export default styles;