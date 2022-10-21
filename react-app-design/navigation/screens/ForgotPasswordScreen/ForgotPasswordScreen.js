import { useState } from 'react';
import { useGlobalState, setGlobalState } from '../../../index';
import { View, Text, Image, TextInput, Pressable } from 'react-native';
import { CheckBox } from '@rneui/themed';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function ForgotPasswordScreen({ navigation }) {
    const handleLoginClick = (e) => {
        e.preventDefault();
        navigation.navigate('Login')
    }

    return (
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Image source={require('../../../assets/logo2.png')} style={{ top: 80 }} />

            <Text style={{ fontSize: 30, fontWeight: 'bold', top: 150 }}>
                Forgot Password
            </Text>

            <View style={{ top: 175, flexDirection: 'row' }}>
                <TextInput placeholder="Password" secureTextEntry={true} style={{ backgroundColor: '#F1F1F1', height: 50, width: 320, borderRadius: 15, paddingLeft: 40, fontSize: 15 }} />
                <MaterialCommunityIcons name={"lock"} color={"#9E9E9E"} size={24} style={{ top: 12, position: 'absolute', paddingLeft: 10 }} />
                <MaterialCommunityIcons name={"eye-off"} color={"#9E9E9E"} size={24} style={{ top: 12, position: 'absolute', paddingLeft: 280 }} />
            </View>

            <Pressable backgroundColor={'#5F59F7'} style={{ top: 200, height: 60, width: 320, borderRadius: 40, alignItems: 'center', justifyContent: 'center' }} onPress={handleLoginClick}>
                <Text style={{ color: 'white', fontSize: 18 }}>
                    Reset Password
                </Text>
            </Pressable>

            <Pressable style={{ top: 225 }} onPress={handleLoginClick}>
                <Text style={{ color: '#2970FE', fontSize: 12 }}>
                    Back To Login
                </Text>
            </Pressable>
        </View>
    )
}