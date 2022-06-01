import { StyleSheet } from "react-native";

const yellow = '#EBDF2D';
const white = '#FFFFFF';
const black = '#1E1D1D';

const styles = StyleSheet.create({
    pageContainer: {
        backgroundColor: black,
        height: '100%',
    },
    mainContainer: {
        flex: 1,
        width: '100%',
        height: '100%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 200,
        textAlign: 'center',
    },
    textTittleLight: {
        color: yellow,
        fontSize: 30,
    },
    textTittleStreet: {
        color: white,
        fontSize: 30,
    },
    slogan: {
        color: '#A0A0A0',
        fontSize: 13,
        textAlign: 'center'
    },
    formLogin: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        marginTop: 60,
    },
    inputLogin: {
        backgroundColor: white,
        height: 50,
        width: 320,
        fontSize: 18,
        borderRadius: 8,
        padding: 10,
    },
    inputLoginUserEmail: {
        marginBottom: 18,
    },
    buttonsContainer: {
        flex: 1,
        flexDirection: "row",
        width: 320,
        justifyContent: 'space-between',
        marginTop: 40,
    },
    buttonSignIn: {
        backgroundColor: black,
        color: white,
        width: '45%',
        borderColor: yellow,
        borderWidth: 1,
        borderRadius: 6,
    },
    buttonLogin: {
        backgroundColor: yellow,
        width: '45%',
        borderRadius: 6,
    },
    textButtonSignIn: {
        color: white,
        fontWeight: "bold",
        textAlign: 'center',
        textAlignVertical: 'center',
        height: 50
    },
    textButtonLogin: {
        fontWeight: "bold",
        textAlign: 'center',
        textAlignVertical: 'center',
        height: 50,
    }
})

export default styles;