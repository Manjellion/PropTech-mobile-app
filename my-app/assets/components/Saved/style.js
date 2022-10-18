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
    cardInfoTitle: {
        fontSize: 15,
        paddingVertical: 5
    },
    cardInfoImage: {
        height: 350,
        width: 350,
        borderRadius: 15,
        alignSelf: 'center',
    },
    cardInfomation: {
        paddingVertical: 10,
    },
    cardInfoPrice: {
        paddingVertical: 10
    },
    cardInfoPropertyInfo: {
        paddingVertical: 10,
    },
<<<<<<< HEAD
    cardInfoDesciprtion: {
        paddingVertical: 10
    },
    cardInfoContact: {
        alignItems: 'center',
        paddingVertical: 30
    },
    cardInfoContactMsgBtn: {
        padding: 10,
        backgroundColor: '#e91e63',
        borderRadius: 5,
        marginBottom: 10
    },
    cardInfoContactMsgBtnText: {
        color: '#fff'
    },
    cardInfoContactForm: {
        borderWidth: .5,
        width: '100%',
        padding: 5
    },
    cardInfoContactFormTitle: {
        textAlign: 'center',
        paddingVertical: 10
    },
    textInput: {
        borderWidth: 1,
        padding: 5,
        width: '80%',
        marginVertical: 5,
        alignSelf: 'center'
    },
    textInputDesc: {
        borderWidth: 1,
        paddingHorizontal: 5,
        paddingVertical: 40,
        width: '80%',
        marginVertical: 5,
        alignSelf: 'center'
    },
    cardInfoContactFormBtnSection: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        paddingVertical: 20,
        alignItems: 'center'
    },
    cardInfoContactFormBtn: {
        padding: 10,
        backgroundColor: '#e91e63',
        borderRadius: 5,
        marginBottom: 10,
    },
    cardInfoContactFormBtnText: {
        color: '#fff'
=======
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
>>>>>>> d2e381b44e3c8d533bfa708f3a029c7c441dfe8f
    }
})

export default styles;