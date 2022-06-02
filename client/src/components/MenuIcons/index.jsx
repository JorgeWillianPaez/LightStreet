import { View, TouchableOpacity, Image, Text } from 'react-native';
import styles from './styles';

const MenuIcons = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.buttons} >
                <Image source={require('../../assets/SuspectIcon.png')} />
                <Text style={{ color: '#FFFFFF' }}>Pessoa suspeita</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttons} >
                <Image source={require('../../assets/WeaponIcon.png')} />
                <Text style={{ color: '#FFFFFF' }}>Assalto</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttons} >
                <Image source={require('../../assets/CarIcon.png')} />
                <Text style={{ color: '#FFFFFF' }}>Carro suspeito</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttons} >
                <Image source={require('../../assets/SuspectIcon.png')} />
                <Text style={{ color: '#FFFFFF' }}>Outros</Text>
            </TouchableOpacity>
        </View>
    )
}

export default MenuIcons;