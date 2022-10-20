import { useState } from 'react';
import { useGlobalState, setGlobalState } from '../../../index';
import { View, Text, Image, TextInput, Pressable } from 'react-native';

export default function LoginScreen({ navigation }) {
    const handleLogInClick = (e) => {
        e.preventDefault();
        setGlobalState("isLoggedIn", true);
    }

    const handleRegisterClick = (e) => {
        e.preventDefault();
        navigation.navigate('Register');
    }

    return (
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Image source={require('../../../assets/logo2.png')} style={{ top: 80 }} />

            <Text style={{ fontSize: 30, fontWeight: 'bold', top: 150 }}>
                Login to Your Account
            </Text>

            <TextInput placeholder="Email" style={{ backgroundColor: '#E5E5E5', height: 50, width: 320, borderRadius: 15, paddingLeft: 20, fontSize: 15, top: 175 }}>

            </TextInput>

            <TextInput placeholder="Password" style={{ backgroundColor: '#E5E5E5', height: 50, width: 320, borderRadius: 15, paddingLeft: 20, fontSize: 15, top: 200 }}>

            </TextInput>

            <Pressable backgroundColor={'#5F59F7'} style={{ top: 250, height: 60, width: 320, borderRadius: 40, alignItems: 'center', justifyContent: 'center' }} onPress={handleLogInClick}>
                <Text style={{ color: 'white', fontSize: 18 }}>
                    Login
                </Text>
            </Pressable>

            <Pressable backgroundColor={'#5F59F7'} style={{ top: 270, height: 50, width: 100, borderRadius: 40, alignItems: 'center', justifyContent: 'center' }} onPress={handleRegisterClick}>
                <Text style={{ color: 'white', fontSize: 18 }}>
                    Register
                </Text>
            </Pressable>
        </View>
    )
}