import styles from "./styles";
import { ScrollView, View, Text, TextInput, TouchableOpacity } from "react-native"
import Toast from "react-native-toast-message";
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createUser } from "../../store/modules/userSlice";
import { Formik } from "formik";

const SignInForm = ({ navigation }) => {

    const [typedUserEmail, setTypedUserEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const dispatch = useDispatch();

    const handleSignIn = () => {

        if (password == "" || confirmPassword == "" || typedUserEmail == "") {
            return Toast.show({
                type: "error",
                text1: "Verifique se não há campos em branco!",
            })
        } else {
            if (password != confirmPassword) {
                return Toast.show({
                    type: "error",
                    text1: "Senhas não conferem!",
                })
            }
        }

        const newUser = {
            email: typedUserEmail,
            password: password,
        }

        dispatch(createUser(newUser));
        Toast.show({
            type: "success",
            text1: "Conta criada com sucesso!",
            text2: "Faça seu login",
        });
        navigation.navigate('LoginPage');
    }

    return (
        <ScrollView style={styles.pageContainer}>
            <View style={styles.mainContainer}>
                <View style={styles.title}>
                    <Text style={styles.textTittleLight}>Bem</Text>
                    <Text style={styles.textTittleStreet}> vindo(a)!</Text>
                </View>
                {/* <Formik
                    initialValues={{ username: '', password: '', confirmPassword: '' }}
                    onSubmit={(values) => console.log(values)}
                >
                    {(props) => ( */}
                <View style={styles.formLogin}>
                    <View style={{ width: 300 }}>
                        <Text style={{ color: '#FFFFFF', marginBottom: 6 }}>Nome de usuário ou e-mail:</Text>
                    </View>
                    <TextInput style={[styles.inputLogin, styles.inputLoginUserEmail]} onChangeText={text => setTypedUserEmail(text)} />

                    <View style={{ width: 300 }}>
                        <Text style={{ color: '#FFFFFF', marginBottom: 6 }}>Senha:</Text>
                    </View>
                    <TextInput style={styles.inputLogin} secureTextEntry onChangeText={text => setPassword(text)} />

                    <View style={{ width: 300 }}>
                        <Text style={{ color: '#FFFFFF', marginBottom: 6 }}>Confirmação de senha:</Text>
                    </View>
                    <TextInput style={styles.inputLogin} secureTextEntry onChangeText={text => setConfirmPassword(text)} />

                    <TouchableOpacity style={styles.buttonLogin} onPress={handleSignIn}>
                        <Text style={{ textAlign: 'center' }}>CADASTRAR</Text>
                    </TouchableOpacity>
                </View>
                {/* )}
                </Formik> */}

                <TouchableOpacity style={styles.buttonLogin} onPress={() => navigation.navigate('LoginPage')}>
                    <Text style={{ textAlign: 'center' }}>JÁ POSSUO UMA CONTA</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

export default SignInForm;