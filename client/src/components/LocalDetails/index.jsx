import { TouchableOpacity, View, Text } from "react-native";
import styles from "./styles";

const LocalDetails = ({ setIsLocalDetailsVisible, typeLocalDetails }) => {

    return (
        <View style={styles.container} >
            <View style={styles.header}>
                <TouchableOpacity style={styles.closeModalButton} onPress={() => setIsLocalDetailsVisible(false)} >
                    <Text style={styles.closeModalButtonText}>X</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.content}>
                <View>
                    <Text style={{ color: "#FFFFFF", fontSize: 18 }}>{typeLocalDetails}</Text>
                    <Text style={{ color: "#A4A5A5", fontSize: 14 }}>(Lugares públicos e privados)</Text>
                </View>
                <View>
                    <Text style={{ color: "#FFFFFF", fontSize: 17 }}>Descrição</Text>
                    <Text style={{ color: "#A4A5A5", fontSize: 14 }}>Acabei de ver um homem de roupa azul tentando roubar o celular de uma jovem emfrente ao teatro vermelho...</Text>
                </View>
                <Text style={{ color: "#FFFFFF", fontSize: 14 }}>Anônimo <Text style={{ color: "#A4A5A5", fontSize: 14 }}>14h00 - 30/05/2022</Text></Text>
            </View>
            <View style={styles.footer}>
                <View>
                    <Text style={{ color: "#FFFFFF" }} >Av. Manoel Ribas</Text>
                </View>
                <TouchableOpacity style={styles.regionDetailsButton} >
                    <Text style={styles.regionDetailsButtonText} >Detalhes da região</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default LocalDetails;