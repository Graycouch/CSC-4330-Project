import {useState} from 'react';
import { useGlobalState, setGlobalState } from '../../../index';
import { View, Text, Button } from 'react-native';

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
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 26, fontWeight: 'bold' }}>
                Login Screen
            </Text>
            <View style={{padding: 20}}>
                <Button title='Log In' color={'#5F59F7'} onPress={handleLogInClick} />
            </View>
            <View>
                <Button title='Register' color={'#5F59F7'} onPress={handleRegisterClick} />
            </View>
        </View>
    )
}