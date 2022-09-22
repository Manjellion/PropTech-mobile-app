import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    HeaderContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 10
    },
    Logo: {
        marginHorizontal: 20
    },
    LogoText: {
        fontSize: 17.5
    },
    SearchButton: {
        width: '60%',
        borderRadius: 20,
        padding: 15,
        backgroundColor: 'lightgrey'
    },
    SearchText: {
        textAlign: 'center',
        fontSize: 17.5
    },
    HeroContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'flex-end',
        paddingTop: 75,
        paddingBottom: 75
    },
    HeroTitleText: {
        fontSize: 60,
        fontWeight: '500'
    },
    HeroButton: {
        backgroundColor: '#000',
        padding: 15,
        borderRadius: 5
    },
    HeroButtonText: {
        color: '#fff'
    },
    CardContainer: {
        paddingTop: 50
    },
    CardBoxContainer: {
        paddingLeft: 20,
        paddingRight: 20
    },
    CardImage: {
        height: 225,
        width: '100%',
        borderRadius: 10
    },
    CardSaveBtn: {
        position: 'absolute',
        padding: 20,
        right: 0,
        bottom: 160,
    },
    CardInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 5
    }
})

export default styles;