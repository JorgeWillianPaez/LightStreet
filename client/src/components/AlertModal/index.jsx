import { View, Text, TouchableOpacity, TextInput, Image } from 'react-native';
import styles from './styles';
import Modal from 'react-native-modal';
import RNPickerSelect from 'react-native-picker-select';

const AlertModal = ({ isModalVisible, setIsModalVisible, rnPickerSelectIcon, setRNPickerSelectIcon }) => {

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
                            <RNPickerSelect Icon={() => {
                                if (rnPickerSelectIcon == "Suspect Person") {
                                    return <Image style={styles.selectTypeImage} source={require("../../assets/SuspectIcon.png")} />
                                } else if (rnPickerSelectIcon == "Assault") {
                                    return <Image style={styles.selectTypeImage} source={require("../../assets/WeaponIcon.png")} />
                                } else if (rnPickerSelectIcon == "Suspect Car") {
                                    return <Image style={styles.selectTypeImage} source={require("../../assets/CarIcon.png")} />
                                } else {
                                    console.log("SELECIONE UMA OPÇÃO");
                                }
                            }} onValueChange={(value) => setRNPickerSelectIcon(value)} items={[
                                { label: "Pessoa Suspeita", value: "Suspect Person" },
                                { label: "Assalto", value: "Assault" },
                                { label: "Carro Suspeito", value: "Suspect Car" }
                            ]} style={{ inputAndroid: { color: "#FFFFFF" }, inputIOS: { color: "#FFFFFF" } }} placeholder={{}} />
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
                        <View style={styles.dateHourContainer}>
                            <View style={[styles.dateHourContent, styles.dateContent]}></View>
                            <View style={[styles.dateHourContent, styles.hourContent]}></View>
                        </View>
                    </View>
                    <View>
                        <Text style={styles.label}>
                            Adicionar imagens
                        </Text>
                        <TouchableOpacity>
                            <Image style={styles.addImage} source={require("../../assets/addImageModal.png")} />
                        </TouchableOpacity>
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