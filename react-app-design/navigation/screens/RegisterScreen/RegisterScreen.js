import { useState } from 'react';
import { View, Text, Button, Image, TextInput, Pressable, ScrollView, StyleSheet, Dimensions } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useGlobalState, setGlobalState } from '../../../index';
import axios from 'axios';
import localhost from 'react-native-localhost';

export default function RegisterScreen({ navigation }) {
    const [username, setUsername] = useState(false);
    const [email, setEmail] = useState(false);
    const [password, setPassword] = useState(false);

    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;

    const handleCreateAccountClick = (e) => {
        e.preventDefault();

        axios.post(`http://${localhost}:8800/api/auth/register`, {
            username: username,
            email: email,
            password: password
        })
            .then((response) => {
                setGlobalState("user", response.data);
                setGlobalState("isLoggedIn", true);
            }, (error) => {
                console.log(error);
            });
    }

    const handleLoginClick = (e) => {
        e.preventDefault();
        navigation.navigate('Login');
    }

    return (
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Image source={require('../../../assets/logo2.png')} style={{ top: windowHeight * 0.11, height: 120, width: 219 }} />

            <Text style={{ fontSize: 30, fontWeight: 'bold', top: windowHeight * 0.19 }}>
                Create New Account
            </Text>

            <View style={{ top: windowHeight * 0.22, flexDirection: 'row' }}>
                <TextInput placeholder="Username" onChangeText={newText => setUsername(newText)} style={{ backgroundColor: '#F1F1F1', height: 50, width: 320, borderRadius: 15, paddingLeft: 40, fontSize: 15 }} />
                <Ionicons name={"person"} color={"#9E9E9E"} size={24} style={{ top: windowHeight * 0.015, position: 'absolute', paddingLeft: 10 }} />
            </View>

            <View style={{ top: windowHeight * 0.25, flexDirection: 'row' }}>
                <TextInput placeholder="Email" onChangeText={newText => setEmail(newText)} style={{ backgroundColor: '#F1F1F1', height: 50, width: 320, borderRadius: 15, paddingLeft: 40, fontSize: 15 }} />
                <MaterialCommunityIcons name={"email"} color={"#9E9E9E"} size={24} style={{ top: windowHeight * 0.015, position: 'absolute', paddingLeft: 10 }} />
            </View>

            <View style={{ top: windowHeight * 0.28, flexDirection: 'row' }}>
                <TextInput placeholder="Password" onChangeText={newText => setPassword(newText)} secureTextEntry={true} style={{ backgroundColor: '#F1F1F1', height: 50, width: 320, borderRadius: 15, paddingLeft: 40, fontSize: 15 }} />
                <MaterialCommunityIcons name={"lock"} color={"#9E9E9E"} size={24} style={{ top: windowHeight * 0.015, position: 'absolute', paddingLeft: 10 }} />
                <MaterialCommunityIcons name={"eye-off"} color={"#9E9E9E"} size={24} style={{ top: windowHeight * 0.015, position: 'absolute', paddingLeft: 280 }} />
            </View>

            <Pressable backgroundColor={'#5F59F7'} style={{ top: windowHeight * 0.33, height: 60, width: 320, borderRadius: 40, alignItems: 'center', justifyContent: 'center' }} onPress={handleCreateAccountClick}>
                <Text style={{ color: 'white', fontSize: 18 }}>
                    Create Account
                </Text>
            </Pressable>

            <View style={{ flexDirection: 'row' }}>
                <Text style={{ color: '#A9A9A9', fontSize: 12, top: windowHeight * 0.36 }}>Already have an account?  </Text>

                <Pressable style={{ top: windowHeight * 0.36 }} onPress={handleLoginClick}>
                    <Text style={{ color: '#2970FE', fontSize: 12 }}>
                        Login
                    </Text>
                </Pressable>
            </View>
        </View>
    )
}