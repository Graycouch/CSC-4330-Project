import * as React from 'react';
import { View, Text } from 'react-native';
import { useGlobalState, setGlobalState } from '../../../index';

export default function MessageScreen({ navigation }) {
    const [user] = useGlobalState("user");

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#FFFFFF' }}>
            <Text style={{ fontSize: 26, fontWeight: 'bold' }}>
                Message Screen
            </Text>
        </View>
    )
}