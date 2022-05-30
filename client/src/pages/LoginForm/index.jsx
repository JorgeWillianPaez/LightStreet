import styles from "./styles";
import { ScrollView, View, Text, TextInput, TouchableOpacity, PermissionsAndroid } from 'react-native';
import Toast from 'react-native-toast-message'
import { useState } from 'react';
import { useSelector } from 'react-redux';

const LoginForm = ({ navigation }) => {

    const [typedInputEmail, setTypedInputEmail] = useState("");
    const [typedPassword, setTypedPassword] = useState("");

    const users = useSelector(state => state.users);

    const askForPermission = async () => {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
                {
                    title: "Acesso de localização",
                    message: "LightStreet precisa do acesso da sua localização para seu funcionamento.",
                    buttonNegative: "Não permitir",
                    buttonPositive: "Permitir",
                }
            );
            if (granted == 'denied') {
                return navigation.navigate('LoginPage');
            } else {
                Toast.show({
                    type: "success",
                    text1: "Acesso de localização permitido"
                })
            }
        } catch (err) {
            console.log(err);
        }
    }

    const handleLogin = () => {

        for (let i = 0; i < users.length; i++) {
            const currentUser = users[i];
            if (currentUser.email == typedInputEmail) {
                if (currentUser.password == typedPassword) {
                    Toast.show({
                        type: "success",
                        text1: "Login realizado com sucesso!",
                    })

                    return navigation.navigate('HomePage');
                } else {
                    return Toast.show({
                        type: "error",
                        text1: "Senha inválida!",
                    })
                }
            }
        }
        Toast.show({
            type: "error",
            text1: "E-mail não existe!",
        })

    }

    return (
        <ScrollView style={styles.pageContainer}>
            <View style={styles.contentContainer}>
                <View style={styles.title}>
                    <Text style={styles.textTittleLight}>Light</Text>
                    <Text style={styles.textTittleStreet}>Street</Text>
                </View>
                <View style={styles.formLogin}>

                    <View style={{ width: 300 }}>
                        <Text style={{ color: '#FFFFFF', marginBottom: 6 }} >Nome de usuário ou e-mail:</Text>
                    </View>
                    <TextInput style={[styles.inputLogin, styles.inputLoginUserEmail]} onChangeText={text => setTypedInputEmail(text)} />

                    <View style={{ width: 300 }}>
                        <Text style={{ color: '#FFFFFF', marginBottom: 6 }}>Senha:</Text>
                    </View>
                    <TextInput style={styles.inputLogin} secureTextEntry onChangeText={text => setTypedPassword(text)} />

                    <TouchableOpacity style={styles.buttonLogin} onPress={handleLogin}>
                        <Text style={{ textAlign: 'center' }}>LOGIN</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.buttonLogin} onPress={() => navigation.navigate('SignInPage')}>
                        <Text style={{ textAlign: 'center' }} >CRIAR CONTA</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}

export default LoginForm;