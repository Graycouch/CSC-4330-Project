import * as React from 'react';
import { useGlobalState, setGlobalState } from '../../../index';
import { View, Text, Button, Image, TextInput, Pressable } from 'react-native';

export default function ProfileScreen({ navigation }) {
    const [user] = useGlobalState("user");

    const handleLogOutClick = (e) => {
        e.preventDefault();
        setGlobalState("isLoggedIn", false);
    }

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#FFFFFF' }}>
            <Text style={{ fontSize: 26, fontWeight: 'bold' }}>
                {user.username}
            </Text>
            <Text style={{ fontSize: 20 }}>
                {user.email}
            </Text>
            <Pressable backgroundColor={'#5F59F7'} style={{ top: 220, height: 60, width: 320, borderRadius: 40, alignItems: 'center', justifyContent: 'center' }} onPress={handleLogOutClick}>
                <Text style={{ color: 'white', fontSize: 18 }}>
                    Log Out
                </Text>
            </Pressable>
        </View>
    )
}