import styles from "./styles";
import { ScrollView, View, Text, TextInput, TouchableOpacity, PermissionsAndroid, Image } from 'react-native';
import Toast from 'react-native-toast-message'
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from '@react-navigation/native';

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

        // for (let i = 0; i < users.length; i++) {
        //     const currentUser = users[i];
        //     if (currentUser.email == typedInputEmail) {
        //         if (currentUser.password == typedPassword) {
        //             Toast.show({
        //                 type: "success",
        //                 text1: "Login realizado com sucesso!",
        //             })

        //             return navigation.navigate('HomePage');
        //         } else {
        //             return Toast.show({
        //                 type: "error",
        //                 text1: "Senha inválida!",
        //             })
        //         }
        //     }
        // }
        // Toast.show({
        //     type: "error",
        //     text1: "E-mail não existe!",
        // })
        return navigation.navigate('HomePage');
    }

    return (
        <ScrollView style={styles.pageContainer}>
            <View>
                <Image source={require('../../assets/AppMainIcon.png')} style={{ width: 110, height: 110, alignSelf: 'center', marginTop: 100 }} />
                <View style={styles.title}>
                    <Text style={styles.textTittleStreet}>Entrar no </Text>
                    <Text style={styles.textTittleLight}>LightStreet</Text>
                </View>
                <Text style={styles.slogan} >Sua segurança vem em primeiro lugar</Text>

                <View style={styles.formLogin}>

                    <TextInput placeholder="E-mail" style={[styles.inputLogin, styles.inputLoginUserEmail]} onChangeText={text => setTypedInputEmail(text)} />
                    <View>
                        <TextInput placeholder="Senha" style={styles.inputLogin} secureTextEntry onChangeText={text => setTypedPassword(text)} />
                    </View>

                    <View style={styles.buttonsContainer}>
                        <TouchableOpacity style={styles.buttonSignIn} onPress={() => navigation.navigate('SignInPage')}>
                            <Text style={styles.textButtonSignIn}>Criar conta</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.buttonLogin} onPress={handleLogin}>
                            <Text style={styles.textButtonLogin}>Entrar</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ flex: 1, flexDirection: 'row', marginTop: 210 }}>
                        <Text style={{ color: '#FFFFFF' }}>Esqueceu sua senha? </Text>
                        {/* <Link to={} style={{ color: '#EBDF2D' }}>Clique aqui</Link> */}
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

export default LoginForm;