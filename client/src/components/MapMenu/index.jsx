import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./styles";

const MapMenu = () => {
    return (
        <View style={styles.container}>
            <View style={styles.shareAndSettings}>
                <TouchableOpacity style={styles.buttonsMenu} >
                    <Image source={require('../../assets/PeopleIcon.png')} style={{ width: 30, height: 30 }} />
                    <Text style={{ color: '#FFFFFF' }}>Compartilhar</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.shareAndSettings}>
                <TouchableOpacity style={styles.buttonsMenu} >
                    <Image source={require('../../assets/ExclamationIcon.png')} style={{ width: 80, height: 80, bottom: 8 }} />
                    <Text style={{ color: '#FFFFFF', fontWeight: "bold", fontSize: 18, marginBottom: 54 }}>Reportar</Text>
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

export default MapMenu;