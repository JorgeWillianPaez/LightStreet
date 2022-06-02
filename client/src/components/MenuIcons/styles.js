import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#3C3C3C',
        height: 100,
        width: 300,
        flex: 1,
        flexDirection: 'row',
        position: 'absolute',
        bottom: 60,
        right: 0,
        left: 0,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
    },
    buttons: {
        flex: 1,
        flexDirection: 'column',
        marginBottom: 20,
    }
})

export default styles;