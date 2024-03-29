import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Provider } from 'react-redux';
import store from './src/store';
import Toast from 'react-native-toast-message';

import LoginForm from './src/pages/LoginForm';
import Home from './src/pages/Home';
import SignInForm from './src/pages/SignInForm';
import Settings from './src/pages/Settings';

export default function App() {

    const Stack = createNativeStackNavigator()

    return (
        <Provider store={store}>
            <StatusBar style='auto' />
            <NavigationContainer>
                <Stack.Navigator screenOptions={{
                    headerShown: false,
                }}>
                    <Stack.Screen name='LoginPage' component={LoginForm} />
                    {/* <Stack.Screen name='SignInPage' component={SignInForm} /> */}
                    <Stack.Screen name='HomePage' component={Home} />
                    <Stack.Screen name='SettingsPage' component={Settings} />
                </Stack.Navigator>
                <Toast />
            </NavigationContainer>
        </Provider>
    );
}
