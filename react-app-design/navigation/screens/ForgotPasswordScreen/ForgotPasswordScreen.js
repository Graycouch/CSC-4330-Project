import { useState } from 'react';
import { useGlobalState, setGlobalState } from '../../../index';
import { View, Text, Button, Image, TextInput, Pressable, ScrollView, StyleSheet, Dimensions } from 'react-native';
import { CheckBox } from '@rneui/themed';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function ForgotPasswordScreen({ navigation }) {
    const handleLoginClick = (e) => {
        e.preventDefault();
        navigation.navigate('Login')
    }

    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;

    return (
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Image source={require('../../../assets/logo2.png')} style={{ top: windowHeight * 0.11, height: 120, width: 219 }} />

            <Text style={{ fontSize: 30, fontWeight: 'bold', top: windowHeight * 0.19 }}>
                Forgot Password
            </Text>

            <View style={{ top: windowHeight * 0.22, flexDirection: 'row' }}>
                <TextInput placeholder="Password" secureTextEntry={true} style={{ backgroundColor: '#F1F1F1', height: 50, width: 320, borderRadius: 15, paddingLeft: 40, fontSize: 15 }} />
                <MaterialCommunityIcons name={"lock"} color={"#9E9E9E"} size={24} style={{ top: windowHeight * 0.015, position: 'absolute', paddingLeft: 10 }} />
                <MaterialCommunityIcons name={"eye-off"} color={"#9E9E9E"} size={24} style={{ top: windowHeight * 0.015, position: 'absolute', paddingLeft: 280 }} />
            </View>

            <Pressable backgroundColor={'#5F59F7'} style={{ top: windowHeight * 0.25, height: 60, width: 320, borderRadius: 40, alignItems: 'center', justifyContent: 'center' }} onPress={handleLoginClick}>
                <Text style={{ color: 'white', fontSize: 18 }}>
                    Reset Password
                </Text>
            </Pressable>

            <Pressable style={{ top: windowHeight * 0.28 }} onPress={handleLoginClick}>
                <Text style={{ color: '#2970FE', fontSize: 12 }}>
                    Back To Login
                </Text>
            </Pressable>
        </View>
    )
}