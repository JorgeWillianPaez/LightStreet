import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    pageContainer: {
        backgroundColor: '#404040',
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
        marginTop: 150,
        textAlign: 'center',
    },
    textTittleLight: {
        color: '#FFFF00',
        fontSize: 50,
    },
    textTittleStreet: {
        color: '#FFFFFF',
        fontSize: 50,
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
        color: '#FFFFFF',
        height: 50,
        width: 300,
        fontSize: 18,
        borderColor: '#FFFFFF',
        borderWidth: 1,
        borderRadius: 4,
        padding: 10,
        marginBottom: 12
    },
    buttonLogin: {
        backgroundColor: '#FFFF00',
        borderRadius: 4,
        width: 300,
        marginTop: 12,
        padding: 10,
    },
})

export default styles;