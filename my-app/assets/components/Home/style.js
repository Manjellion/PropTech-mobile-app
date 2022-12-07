import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    HeaderContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 10,
    },
    SearchButton: {
        width: '60%',
        borderRadius: 20,
        padding: 15,
        backgroundColor: 'lightgrey',
        flexDirection: 'row',
        alignItems: 'center'
    },
    searchContainer: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    SearchText: {
        textAlign: 'center',
        fontSize: 17.5,
        marginLeft: 5,
    },
    textInputStyle: {
        width: '75%',
        borderRadius: 10,
        padding: 15,
        backgroundColor: 'lightgrey',
    },
    flatListStyle: {
        paddingHorizontal: 30,
        paddingTop: 10
    },  
    HeroContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'flex-end',
        paddingTop: 25,
        paddingBottom: 25
    },
    HeroTitleText: {
        fontSize: 60,
        fontWeight: '500'
    },
    HeroButton: {
        backgroundColor: '#000',
        padding: 15,
        borderRadius: 5,
        marginVertical: 10
    },
    HeroButtonText: {
        color: '#fff'
    },
    CardContainer: {
        paddingVertical: 5
    },
    CardBoxContainer: {
        paddingHorizontal: 20,
        paddingVertical: 10
    },
    CardImage: {
        height: 200,
        width: 300,
        borderRadius: 10,
        alignSelf: 'center'
    },
    CardSaveBtn: {
        position: 'absolute',
        padding: 10,
        right: 10,
        bottom: 160,
        backgroundColor: 'white',
    },
    CardInfo: {
        paddingLeft: 40
    },
    PostContainer: {
        flex: 1,
        justifyContent: 'flex-start',
        alignContent: 'center',
        backgroundColor: '#fff',
    },
    PostTitle: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: '500'
    },
    InputContainer: {
        alignSelf: 'center',
    },
    InputText: {
        marginVertical: 10,
        borderWidth: 1,
        padding: 2.5
    },
    PostButton: {
        padding: 20,
        backgroundColor: '#000',
        width: '30%',
        alignSelf: 'center',
        borderRadius: 10
    },
    PostButtonText: {
        color: '#fff',
        textAlign: 'center'
    }
})

export default styles;