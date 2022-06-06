import { View, TouchableOpacity, Image, Text } from 'react-native';
import styles from './styles';

const MenuIcons = ({ setReportButtonEnable }) => {
    return (
        <View style={styles.container}>
            <View style={styles.iconsContainer}>
                <View style={styles.shareAndSettings}>
                    <TouchableOpacity style={styles.iconsButton} >
                        <Image source={require('../../assets/SuspectIcon.png')} style={{ width: 60, height: 60 }} />
                        <Text style={{ color: '#FFFFFF' }}>Pessoa suspeita</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.shareAndSettings}>
                    <TouchableOpacity style={styles.iconsButton} >
                        <Image source={require('../../assets/WeaponIcon.png')} style={{ width: 60, height: 60 }} />
                        <Text style={{ color: '#FFFFFF' }}>Assalto</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.shareAndSettings}>
                    <TouchableOpacity style={styles.iconsButton} >
                        <Image source={require('../../assets/CarIcon.png')} style={{ width: 60, height: 60 }} />
                        <Text style={{ color: '#FFFFFF' }}>Carro suspeito</Text>
                    </TouchableOpacity>
                </View>
                {/* <View style={styles.shareAndSettings}>
                    <TouchableOpacity style={styles.iconsButton} >
                        <Image source={require('../../assets/SettingsIcon.png')} style={{ width: 60, height: 60 }} />
                        <Text style={{ color: '#FFFFFF' }}>Outros</Text>
                    </TouchableOpacity>
                </View> */}
            </View>
            <View style={styles.shareAndSettings}>
                <TouchableOpacity style={styles.buttonsMenu} >
                    <Image source={require('../../assets/PeopleIcon.png')} style={{ width: 30, height: 30 }} />
                    <Text style={{ color: '#FFFFFF' }}>Compartilhar</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.shareAndSettings}>
                <TouchableOpacity style={styles.buttonsMenu} onPress={() => setReportButtonEnable(true)} >
                    <Image source={require('../../assets/BackArrowIcon.png')} style={{ width: 80, height: 80, marginBottom: 40 }} />
                </TouchableOpacity>
            </View>
            <View style={styles.shareAndSettings}>
                <TouchableOpacity style={styles.buttonsMenu} >
                    <Image source={require('../../assets/SettingsIcon.png')} style={{ width: 30, height: 30 }} />
                    <Text style={{ color: '#FFFFFF' }}>Configurações</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default MenuIcons;