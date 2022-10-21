import * as React from 'react';
import { View, Text } from 'react-native';

export default function MessageScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#FFFFFF' }}>
            <Text style={{ fontSize: 26, fontWeight: 'bold' }}>
                Message Screen
            </Text>
        </View>
    )
}