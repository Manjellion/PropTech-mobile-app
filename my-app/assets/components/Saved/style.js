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
    cardContainerOnScreen: {
        paddingVertical: 20
    },
    cardContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 10,
        paddingHorizontal: 10,
    },
    cardDeleteButtonContainer: {
        paddingLeft: 10,
        width: '40%'
    },
    cardDeleteButtonText: {
        padding: 10,
        backgroundColor: '#e91e63',
        color: '#fff',
        textAlign: 'center',
        fontSize: 14,
        fontWeight: '500'
    },
    cardImg: {
        width: 160,
        height: 160,
        borderRadius: 10
    },
    cardText: {
        marginRight: 25,
        fontWeight: '500',
        fontSize: 15,
        backgroundColor: '#000',
        padding: 20,
        position: 'absolute',
        right: -30,
        color: '#fff'
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
    }    
})

export default styles;