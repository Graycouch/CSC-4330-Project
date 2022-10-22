import * as React from 'react';
import { useGlobalState, setGlobalState } from '../../../index';
import { View, Text, Button } from 'react-native';

export default function ProfileScreen({ navigation }) {
    const [user] = useGlobalState("user");

    const handleLogOutClick = (e) => {
        e.preventDefault();
        setGlobalState("isLoggedIn", false);
    }

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#FFFFFF' }}>
            <Text style={{ fontSize: 26, fontWeight: 'bold' }}>
                Profile Screen
            </Text>
            <View style={{ padding: 20 }}>
                <Button title='Log Out' color={'#5F59F7'} onPress={handleLogOutClick} />
            </View>
        </View>
    )
}