import { useState } from 'react';
import { useGlobalState, setGlobalState } from '../../../index';
import { View, Text, Image, TextInput, Pressable } from 'react-native';
import { CheckBox } from '@rneui/themed';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function LoginScreen({ navigation }) {
    const [checked, setchecked] = useState(false);
    const [email, setEmail] = useState(false);
    const [password, setPassword] = useState(false);

    const handleLogInClick = (e) => {
        e.preventDefault();
        setGlobalState("isLoggedIn", true);
    }

    const handleRegisterClick = (e) => {
        e.preventDefault();
        navigation.navigate('Register');
    }

    const handleForgotPasswordClick = (e) => {
        e.preventDefault();
        navigation.navigate('ForgotPassword');
    }

    return (
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Image source={require('../../../assets/logo2.png')} style={{ top: 80 }} />

            <Text style={{ fontSize: 30, fontWeight: 'bold', top: 150 }}>
                Login to Your Account
            </Text>

            <View style={{ top: 175, flexDirection: 'row' }}>
                <TextInput placeholder="Email" onChangeText={newText => setEmail(newText)} textContentType={'emailAddress'} style={{ backgroundColor: '#F1F1F1', height: 50, width: 320, borderRadius: 15, paddingLeft: 40, fontSize: 15 }} />
                <MaterialCommunityIcons name={"email"} color={"#9E9E9E"} size={24} style={{ top: 12, position: 'absolute', paddingLeft: 10 }} />
            </View>

            <View style={{ top: 200, flexDirection: 'row' }}>
                <TextInput placeholder="Password" onChangeText={newText => setPassword(newText)} textContentType={'password'} secureTextEntry={true} style={{ backgroundColor: '#F1F1F1', height: 50, width: 320, borderRadius: 15, paddingLeft: 40, fontSize: 15 }} />
                <MaterialCommunityIcons name={"lock"} color={"#9E9E9E"} size={24} style={{ top: 12, position: 'absolute', paddingLeft: 10 }} />
                <MaterialCommunityIcons name={"eye-off"} color={"#9E9E9E"} size={24} style={{ top: 12, position: 'absolute', paddingLeft: 280 }} />
            </View>

            <View style={{ top: 210 }}>
                <CheckBox title={"Remember Me"} checked={checked} onPress={() => setchecked(!checked)} checkedColor='#5F59F7' uncheckedColor='#5F59F7' />
            </View>

            <Pressable backgroundColor={'#5F59F7'} style={{ top: 220, height: 60, width: 320, borderRadius: 40, alignItems: 'center', justifyContent: 'center' }} onPress={handleLogInClick}>
                <Text style={{ color: 'white', fontSize: 18 }}>
                    Login
                </Text>
            </Pressable>

            <Pressable style={{ top: 245 }} onPress={handleForgotPasswordClick}>
                <Text style={{ color: '#2970FE', fontSize: 12 }}>
                    Forgot Password?
                </Text>
            </Pressable>

            <View style={{ flexDirection: 'row' }}>
                <Text style={{ color: '#A9A9A9', fontSize: 12, top: 265 }}>Don’t have an account?  </Text>

                <Pressable style={{ top: 265 }} onPress={handleRegisterClick}>
                    <Text style={{ color: '#2970FE', fontSize: 12 }}>
                        Sign up
                    </Text>
                </Pressable>
            </View>
        </View>
    )
}