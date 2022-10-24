import { useState } from 'react';
import { useGlobalState, setGlobalState } from '../../../index';
import { View, Text, Button, Image, TextInput, Pressable, ScrollView, StyleSheet } from 'react-native';
import { Divider } from '@rneui/themed';
import { Dropdown } from 'react-native-element-dropdown';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function ProfileScreen({ navigation }) {
    const [user] = useGlobalState("user");
    const [editing, setEditing] = useState(false)

    const handleLogOutClick = (e) => {
        e.preventDefault();
        setGlobalState("isLoggedIn", false);
    }

    const handleEditProfileClick = (e) => {
        e.preventDefault();
        setEditing(!editing);
    }

    const styles = StyleSheet.create({
        contentContainer: {
            paddingVertical: 50,
            alignItems: 'center',
            flexGrow: 1
        },
        verticleLine: {
            height: 200,
            top: 50,
            width: 1,
            backgroundColor: '#E5E5E5',
        }
    });

    const dropdownData = [
        { label: 'Student', value: '1' },
        { label: 'Tutor', value: '2' }
    ];

    return (
        <View style={{ backgroundColor: '#FFFFFF', flex: 1 }}>
            {editing ? (
                <ScrollView contentContainerStyle={styles.contentContainer} style={{ backgroundColor: '#FFFFFF' }}>
                    <Text style={{ fontSize: 30, fontWeight: '500', left: -100 }}>
                        {user.username}
                    </Text>

                    <Pressable backgroundColor={'#FFFFFF'} style={{
                        right: -130, top: -40, height: 40, width: 100, borderRadius: 40,
                        borderColor: "#5F59F7", borderWidth: 1, alignItems: 'center', justifyContent: 'center'
                    }} onPress={handleEditProfileClick}>
                        <Text style={{ color: '#5F59F7', fontSize: 16 }}>
                            Done
                        </Text>
                    </Pressable>

                    <Divider style={{ top: -30, alignSelf: 'stretch', backgroundColor: '#E5E5E5', height: 1 }} />

                    <Image source={require('../../../assets/nash.jpg')} style={{ top: -20, height: 120, width: 120, borderRadius: 60 }} />

                    <View style={{ alignItems: 'flex-start', display: 'flex', marginRight: 250 }}>

                        <Text style={{ fontSize: 18, paddingBottom: 30 }}>
                            Full Name:
                        </Text>
                        <TextInput style={{
                            fontSize: 15, width: 230, borderRadius: 20,
                            position: 'absolute', color: 'black', borderColor: '#9E9E9E', backgroundColor: '#F1F1F1', borderWidth: 1, marginLeft: 100, top: -5, paddingLeft: 10, paddingRight: 10
                        }}>
                            <Text style={{ paddingLeft: 20 }}>
                                {user.fullName}
                            </Text>
                        </TextInput>


                        <Text style={{ fontSize: 18, paddingBottom: 30 }}>
                            Email:
                        </Text>
                        <TextInput style={{
                            fontSize: 15, width: 230, borderRadius: 20,
                            position: 'absolute', color: 'black', borderColor: '#9E9E9E', backgroundColor: '#F1F1F1', borderWidth: 1, marginLeft: 100, top: 50, paddingLeft: 10, paddingRight: 10
                        }}>
                            <Text style={{ paddingLeft: 20 }}>
                                {user.email}
                            </Text>
                        </TextInput>


                        <Text style={{ fontSize: 18, paddingBottom: 30 }}>
                            Role:
                        </Text>
                        <TextInput style={{
                            fontSize: 15, width: 230, borderRadius: 20,
                            position: 'absolute', color: 'black', backgroundColor: '#F1F1F1', borderColor: '#9E9E9E', borderWidth: 1, marginLeft: 100, top: 105, paddingLeft: 10, paddingRight: 10
                        }}>
                            {user.role}
                        </TextInput>


                        <Text style={{ fontSize: 18, paddingBottom: 30 }}>
                            Major:
                        </Text>
                        <TextInput style={{
                            fontSize: 15, width: 230, borderRadius: 20,
                            position: 'absolute', color: 'black', backgroundColor: '#F1F1F1', borderColor: '#9E9E9E', borderWidth: 1, marginLeft: 100, top: 160, paddingLeft: 10, paddingRight: 10
                        }}>
                            {user.major}
                        </TextInput>


                        <Text style={{ fontSize: 18, paddingBottom: 30 }}>
                            Courses:
                        </Text>
                        <TextInput style={{
                            fontSize: 15, width: 230, borderRadius: 20,
                            position: 'absolute', color: 'black', backgroundColor: '#F1F1F1', borderColor: '#9E9E9E', borderWidth: 1, marginLeft: 100, top: 215, paddingLeft: 10, paddingRight: 10
                        }}>
                            {user.courses[0]}
                        </TextInput>


                        <Text style={{ fontSize: 18 }}>
                            About:
                        </Text>
                        <TextInput multiline={true} style={{
                            fontSize: 15, width: 230, borderRadius: 20, paddingTop: 5,
                            position: 'absolute', color: 'black', backgroundColor: '#F1F1F1', borderColor: '#9E9E9E', borderWidth: 1, marginLeft: 100, top: 270, paddingLeft: 10, paddingRight: 10
                            , textAlignVertical: "top", height: 150
                        }}>
                            {user.about}
                        </TextInput>
                    </View>

                </ScrollView>
            ) : (
                <ScrollView contentContainerStyle={styles.contentContainer} style={{ backgroundColor: '#FFFFFF' }}>

                    <Text style={{ fontSize: 30, fontWeight: '500', left: -100 }}>
                        {user.username}
                    </Text>

                    <Pressable backgroundColor={'#FFFFFF'} style={{
                        right: -130, top: -40, height: 40, width: 100, borderRadius: 40, backgroundColor: '#5F59F7',
                        alignItems: 'center', justifyContent: 'center'
                    }} onPress={handleEditProfileClick}>
                        <Text style={{ color: 'white', fontSize: 16 }}>
                            Edit Profile
                        </Text>
                    </Pressable>

                    <Divider style={{ top: -30, alignSelf: 'stretch', backgroundColor: '#E5E5E5', height: 1 }} />

                    <Image source={require('../../../assets/nash.jpg')} style={{ top: -20, height: 120, width: 120, borderRadius: 60 }} />

                    <Text style={{
                        fontSize: 25, width: 300, borderRadius: 20, textAlign: 'center',
                        fontWeight: '500', position: 'absolute', top: 240
                    }}>
                        {user.fullName}
                    </Text>

                    <Divider style={{ top: 50, alignSelf: 'stretch' }} />
                    <Divider style={{ top: 150, alignSelf: 'stretch' }} />
                    <Divider style={{ top: 250, alignSelf: 'stretch' }} />
                    <View style={styles.verticleLine}></View>

                    <Text style={{ fontSize: 15, paddingBottom: 20, top: -130, left: -120, fontWeight: 'bold', color: '#5F59F7' }}>
                        Email Address:
                    </Text>
                    <Text style={{ fontSize: 15, top: -140, left: -110, color: 'grey' }}>
                        {user.email}
                    </Text>


                    <Text style={{ fontSize: 15, paddingBottom: 20, top: -192, left: 50, fontWeight: 'bold', color: '#5F59F7' }}>
                        User Role:
                    </Text>
                    <Text style={{ fontSize: 15, top: -202, left: 70, color: 'grey' }}>
                        {user.role}
                    </Text>


                    <Text style={{ fontSize: 15, paddingBottom: 20, top: -155, left: -110, fontWeight: 'bold', color: '#5F59F7' }}>
                        University Major:
                    </Text>
                    <Text style={{ fontSize: 15, top: -165, left: -110, color: 'grey' }}>
                        {user.major}
                    </Text>


                    <Text style={{ fontSize: 15, paddingBottom: 20, top: -217, left: 85, fontWeight: 'bold', color: '#5F59F7' }}>
                        University Courses:
                    </Text>
                    <Text style={{ fontSize: 15, top: -227, left: 55, color: 'grey' }}>
                        {user.courses}
                    </Text>

                    <Text style={{ fontSize: 20, paddingBottom: 20, top: -180, fontWeight: 'bold', color: '#5F59F7' }}>
                        About
                    </Text>
                    <Text style={{ fontSize: 15, top: -190, textAlign: 'center', color: 'grey' }}>
                        {user.about}
                    </Text>

                    <Pressable backgroundColor={'#5F59F7'} style={{ top: -50, height: 60, width: 320, borderRadius: 40, alignItems: 'center', justifyContent: 'center' }} onPress={handleLogOutClick}>
                        <Text style={{ color: 'white', fontSize: 18 }}>
                            Log Out
                        </Text>
                    </Pressable>

                </ScrollView>
            )}
        </View>
    )
}