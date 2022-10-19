import * as React from 'react';
import { View, Text, Button } from 'react-native';

export default function RegisterScreen({ navigation }) {
    const handleLogInClick = (e) => {
        e.preventDefault();
        navigation.navigate('Login')
    }

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 26, fontWeight: 'bold' }}>
                Register Screen
            </Text>
            <View style={{ padding: 20 }}>
                <Button title='Back To Log In' color={'#5F59F7'} onPress={handleLogInClick} />
            </View>
        </View>
    )
}