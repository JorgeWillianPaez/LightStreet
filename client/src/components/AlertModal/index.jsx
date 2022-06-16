import { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, Image } from 'react-native';
import styles from './styles';
import Modal from 'react-native-modal';
import RNPickerSelect from 'react-native-picker-select';

const AlertModal = ({ isModalVisible, setIsModalVisible, rnPickerSelectIcon, setRNPickerSelectIcon }) => {

    const [isPlaceAlertModalVisible, setIsPlaceAlertModalVisible] = useState(false);
    const [alertAddedModalVisible, setAlertAddedModalVisible] = useState(false);

    const switchModalVisible = () => {
        setIsPlaceAlertModalVisible(true);
        setIsModalVisible(false);
    }

    const switchModalVisible2 = () => {
        setIsPlaceAlertModalVisible(false);
        setAlertAddedModalVisible(true);
    }

    const hideAlertAddedModal = () => {
        setAlertAddedModalVisible(false);
    }

    return (
        <View>
            <Modal isVisible={isModalVisible} >
                <View style={styles.modalContainer}>
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
                            <TextInput multiline={true} numberOfLines={4} style={styles.commentTextArea} placeholder='Comente o que aconteceu' placeholderTextColor="#A4A5A5" ></TextInput>
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
                        <TouchableOpacity style={styles.createModalButton} onPress={switchModalVisible}>
                            <Text style={styles.createModalButtonText}>Criar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
            <Modal isVisible={isPlaceAlertModalVisible}>
                <View style={styles.placeAlertModalContainer}>
                    <TouchableOpacity style={{ position: "relative", width: "90%" }} onPress={() => setIsPlaceAlertModalVisible(false)}>
                        <Text style={styles.chooseOnMapModalCloseText}>X</Text>
                    </TouchableOpacity>
                    <Image source={require("../../assets/HandWithPhoneAlert.png")} />
                    <Text style={{ color: "#FFFFFF", fontWeight: 'bold', fontSize: 20 }}>Onde colocar o alerta?</Text>
                    <TouchableOpacity style={styles.chooseOnMapButton}>
                        <Text style={styles.chooseOnMapButtonText}>Escolher no mapa</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={switchModalVisible2}>
                        <Text style={{ color: "#A4A5A5" }}>Usar localização atual</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
            <Modal isVisible={alertAddedModalVisible}>
                <View style={styles.alertAddedWithSuccessModal}>
                    <Image style={{ marginBottom: 5, marginTop: 20, width: 120, height: 120 }} source={require("../../assets/SuccessAlertAdded.png")} />
                    <Text style={{ color: "#FFFFFF", fontWeight: "bold", fontSize: 20 }}>Alerta colocado com sucesso!</Text>
                    <TouchableOpacity style={styles.chooseOnMapButton} onPress={hideAlertAddedModal}>
                        <Text style={styles.chooseOnMapButtonText}>Voltar</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        </View>
    )
}

export default AlertModal;