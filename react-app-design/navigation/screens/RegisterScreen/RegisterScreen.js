import * as React from 'react';
import { View, Text, Button, Image, TextInput, Pressable } from 'react-native';

export default function RegisterScreen({ navigation }) {
    const handleLogInClick = (e) => {
        e.preventDefault();
        navigation.navigate('Login')
    }

    return (
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Image source={require('../../../assets/logo2.png')} style={{ top: 80 }} />

            <Text style={{ fontSize: 30, fontWeight: 'bold', top: 150 }}>
                Create New Account
            </Text>

            <TextInput placeholder="Username" style={{ backgroundColor: '#E5E5E5', height: 50, width: 320, borderRadius: 20, paddingLeft: 20, fontSize: 15, top: 175 }}>

            </TextInput>

            <TextInput placeholder="Email" style={{ backgroundColor: '#E5E5E5', height: 50, width: 320, borderRadius: 20, paddingLeft: 20, fontSize: 15, top: 200 }}>

            </TextInput>

            <TextInput placeholder="Password" style={{ backgroundColor: '#E5E5E5', height: 50, width: 320, borderRadius: 20, paddingLeft: 20, fontSize: 15, top: 225 }}>

            </TextInput>

            <Pressable backgroundColor={'#5F59F7'} style={{ top: 275, height: 60, width: 320, borderRadius: 40, alignItems: 'center', justifyContent: 'center' }} onPress={handleLogInClick}>
                <Text style={{ color: 'white', fontSize: 18 }}>
                    Create Account
                </Text>
            </Pressable>

            <Pressable backgroundColor={'#5F59F7'} style={{ top: 300, height: 50, width: 150, borderRadius: 40, alignItems: 'center', justifyContent: 'center' }} onPress={handleLogInClick}>
                <Text style={{ color: 'white', fontSize: 18 }}>
                    Back To Login
                </Text>
            </Pressable>
        </View>
    )
}