import { View, Text, TouchableOpacity, Input, Image } from "react-native";
import styles from "./styles";

const Settings = ({ navigation: { goBack, navigate } }) => {
    return (
        <View style={styles.container}>
            <View style={{ position: "relative", width: "100%" }}>
                <TouchableOpacity style={{ position: "absolute", left: 20, top: 82, zIndex: 1 }} onPress={() => goBack()}>
                    <Image source={require("../../assets/ButtonBackSettings.png")} />
                </TouchableOpacity>
                <Text style={styles.title}>Configurações</Text>
            </View>
            <TouchableOpacity style={styles.profileButtonContainer}>
                <View style={styles.profileButtonContent}>
                    <View style={styles.personIconContainer}>
                        <Image style={{ width: 30, height: 30 }} source={require("../../assets/PersonSettingsIcon.png")} />
                    </View>
                    <View style={{ display: "flex", flexDirection: "column", marginLeft: 20 }}>
                        <Text style={{ color: "#FFFFFF", fontSize: 18 }}>Nelson Oliveira</Text>
                        <Text style={{ color: "#999999" }}>nelson_oliv@gmail.com</Text>
                    </View>
                </View>
                <View>
                    <Image source={require("../../assets/ButtonSettings.png")} />
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonContainer}>
                <View style={styles.buttonContent} >
                    <Image source={require("../../assets/FavoriteSettingsIcon.png")} />
                    <Text style={styles.buttonsText}>Favoritos</Text>
                </View>
                <View style={styles.buttonArrowContainer} >
                    <Image style={styles.buttonArrowImage} source={require("../../assets/ButtonSettings.png")} />
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonContainer}>
                <View style={styles.buttonContent} >
                    <Image source={require("../../assets/BellSettingsIcon.png")} />
                    <Text style={styles.buttonsText}>Notificações</Text>
                </View>
                <View style={styles.buttonArrowContainer} >
                    <Image style={styles.buttonArrowImage} source={require("../../assets/ButtonSettings.png")} />
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonContainer}>
                <View style={styles.buttonContent} >
                    <Image source={require("../../assets/SoundSettingsIcon.png")} />
                    <Text style={styles.buttonsText}>Sons</Text>
                </View>
                <View style={styles.buttonArrowContainer} >
                    <Image style={styles.buttonArrowImage} source={require("../../assets/ButtonSettings.png")} />
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonContainer}>
                <View style={styles.buttonContent} >
                    <Image source={require("../../assets/FavoriteSettingsIcon.png")} />
                    <Text style={styles.buttonsText}>Sobre</Text>
                </View>
                <View style={styles.buttonArrowContainer} >
                    <Image style={styles.buttonArrowImage} source={require("../../assets/ButtonSettings.png")} />
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonContainer} onPress={() => navigate("LoginPage")}>
                <View style={styles.buttonContent} >
                    <Image source={require("../../assets/LogoutSettingsIcon.png")} />
                    <Text style={styles.buttonsText}>Sair</Text>
                </View>
                <View style={styles.buttonArrowContainer} >
                    <Image style={styles.buttonArrowImage} source={require("../../assets/ButtonSettings.png")} />
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default Settings;