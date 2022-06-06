import { StyleSheet } from 'react-native';

const black = '#1E1D1D'
const gray = '#3C3C3C'

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        width: "100%",
        height: 80,
        borderTopRightRadius: 18,
        borderTopLeftRadius: 18,
        backgroundColor: black,
        top: "90.5%",
    },
    shareAndSettings: {
        flex: 1,
        alignItems: 'center',
    },
    buttonsMenu: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    iconsContainer: {
        position: 'absolute',
        width: '80%',
        height: 60,
        backgroundColor: gray,
        bottom: '100%',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        borderTopRightRadius: 50,
        borderTopLeftRadius: 50,
    },
    iconsButton: {
        position: 'absolute',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        bottom: 30,
        width: "60%",
    },
});

export default styles;