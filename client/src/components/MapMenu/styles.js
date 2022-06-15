import { StyleSheet } from 'react-native';

const black = '#1E1D1D'

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        flex: 1,
        flexDirection: 'row',
        width: "100%",
        height: 80,
        borderTopRightRadius: 18,
        borderTopLeftRadius: 18,
        backgroundColor: black,
        top: "90.5%",
    },
    shareAndSettings: {
        width: "33%",
        flex: 1,
        justifyContent: 'center',
    },
    buttonsMenu: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default styles;