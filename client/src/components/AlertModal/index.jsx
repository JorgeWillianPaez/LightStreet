import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import styles from './styles';
import Modal from 'react-native-modal';
import RNPickerSelect from 'react-native-picker-select';

const AlertModal = ({ isModalVisible, setIsModalVisible }) => {
    return (
        <View style={styles.container}>
            <Modal isVisible={isModalVisible} style={styles.modalContainer}>
                <View style={styles.modalHeaderContainer}>
                    <Text style={styles.header}>Adicionar Alerta</Text>
                    <TouchableOpacity style={styles.closeModalButton} onPress={() => setIsModalVisible(false)}>
                        <Text style={styles.closeModalButtonText}>X</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.contentContainer}>
                    <View>
                        <Text style={styles.label}>Tipo <Text style={styles.important}>*</Text></Text>
                        <View style={styles.selectTypeContainer}>
                            <RNPickerSelect Icon={"../assets/SuspectIcon.png"} onValueChange={(value) => console.log(value)} items={[
                                { label: "Pessoa Suspeita", value: "Suspect Person" },
                                { label: "Assalto", value: "Assault" },
                                { label: "Carro Suspeito", value: "Suspect Car" }
                            ]} style={styles.selectTypeText} />
                        </View>
                    </View>
                    <View>
                        <Text style={styles.label}>Descrição <Text style={styles.important}>*</Text></Text>
                        <TextInput style={styles.commentTextArea} placeholder='Comente o que aconteceu' placeholderTextColor="#A4A5A5" ></TextInput>
                    </View>
                    <View>
                        <Text style={styles.label}>
                            Data e Horário aproximado <Text style={styles.important}>*</Text>
                        </Text>
                    </View>
                    <View>
                        <Text style={styles.label}>
                            Adicionar imagens
                        </Text>
                    </View>
                    <TouchableOpacity style={styles.createModalButton}>
                        <Text style={styles.createModalButtonText}>Criar</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        </View>
    )
}

export default AlertModal;