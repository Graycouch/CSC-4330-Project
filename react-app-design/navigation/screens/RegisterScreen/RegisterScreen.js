import { useState } from 'react';
import { View, Text, Button, Image, TextInput, Pressable } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function RegisterScreen({ navigation }) {
    const [username, setUsername] = useState(false);
    const [email, setEmail] = useState(false);
    const [password, setPassword] = useState(false);

    const handleLoginClick = (e) => {
        e.preventDefault();
        navigation.navigate('Login')
    }

    return (
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Image source={require('../../../assets/logo2.png')} style={{ top: 80 }} />

            <Text style={{ fontSize: 30, fontWeight: 'bold', top: 150 }}>
                Create New Account
            </Text>

            <View style={{ top: 175, flexDirection: 'row' }}>
                <TextInput placeholder="Username" onChangeText={newText => setUsername(newText)} style={{ backgroundColor: '#F1F1F1', height: 50, width: 320, borderRadius: 15, paddingLeft: 40, fontSize: 15 }} />
                <Ionicons name={"person"} color={"#9E9E9E"} size={24} style={{ top: 12, position: 'absolute', paddingLeft: 10 }} />
            </View>

            <View style={{ top: 200, flexDirection: 'row' }}>
                <TextInput placeholder="Email" onChangeText={newText => setEmail(newText)} style={{ backgroundColor: '#F1F1F1', height: 50, width: 320, borderRadius: 15, paddingLeft: 40, fontSize: 15 }} />
                <MaterialCommunityIcons name={"email"} color={"#9E9E9E"} size={24} style={{ top: 12, position: 'absolute', paddingLeft: 10 }} />
            </View>

            <View style={{ top: 225, flexDirection: 'row' }}>
                <TextInput placeholder="Password" onChangeText={newText => setPassword(newText)} secureTextEntry={true} style={{ backgroundColor: '#F1F1F1', height: 50, width: 320, borderRadius: 15, paddingLeft: 40, fontSize: 15 }} />
                <MaterialCommunityIcons name={"lock"} color={"#9E9E9E"} size={24} style={{ top: 12, position: 'absolute', paddingLeft: 10 }} />
                <MaterialCommunityIcons name={"eye-off"} color={"#9E9E9E"} size={24} style={{ top: 12, position: 'absolute', paddingLeft: 280 }} />
            </View>

            <Pressable backgroundColor={'#5F59F7'} style={{ top: 260, height: 60, width: 320, borderRadius: 40, alignItems: 'center', justifyContent: 'center' }} onPress={handleLoginClick}>
                <Text style={{ color: 'white', fontSize: 18 }}>
                    Create Account
                </Text>
            </Pressable>

            <View style={{ flexDirection: 'row' }}>
                <Text style={{ color: '#A9A9A9', fontSize: 12, top: 285 }}>Already have an account?  </Text>

                <Pressable style={{ top: 285 }} onPress={handleLoginClick}>
                    <Text style={{ color: '#2970FE', fontSize: 12 }}>
                        Login
                    </Text>
                </Pressable>
            </View>
        </View>
    )
}