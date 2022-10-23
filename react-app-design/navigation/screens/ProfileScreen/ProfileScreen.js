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
        }
    });

    const dropdownData = [
        { label: 'Student', value: '1' },
        { label: 'Tutor', value: '2' }
    ];

    return (
        <View style={{ backgroundColor: '#FFFFFF', flex: 1 }}>
            <ScrollView contentContainerStyle={styles.contentContainer} style={{ backgroundColor: '#FFFFFF' }}>
                <Text style={{ fontSize: 30, fontWeight: 'bold', left: -100 }}>
                    {user.username}
                </Text>

                <Pressable backgroundColor={'#FFFFFF'} style={{
                    right: -130, top: -40, height: 40, width: 100, borderRadius: 40,
                    borderColor: '#5F59F7', borderWidth: 1, alignItems: 'center', justifyContent: 'center'
                }} onPress={handleEditProfileClick}>
                    <Text style={{ color: '#5F59F7', fontSize: 16 }}>
                        {editing ? "Done" : "Edit Profile"}
                    </Text>
                </Pressable>

                <Divider style={{ top: -30, alignSelf: 'stretch', backgroundColor: '#E5E5E5', height: 1 }} />

                <Image source={require('../../../assets/nash.jpg')} style={{ top: -20, height: 120, width: 120, borderRadius: 60 }} />

                <TextInput editable={editing} style={{
                    fontSize: 25, width: 300, borderRadius: 20, textAlign: 'center',
                    fontWeight: 'bold', position: 'absolute', top: 240, color: 'black', borderColor: editing ? '#9E9E9E' : '#FFFFFF',
                    backgroundColor: editing ? '#F1F1F1' : '#FFFFFF', borderWidth: 1
                }}>
                    {user.fullName}
                </TextInput>

                <View style={{ alignItems: 'flex-start', display: 'flex', marginRight: 250, marginTop: 50 }}>
                    <Text style={{ fontSize: 18, paddingBottom: 30 }}>
                        Email:
                    </Text>
                    <TextInput editable={editing} style={{
                        fontSize: 15, width: 220, borderRadius: 20,
                        position: 'absolute', color: 'black', borderColor: '#9E9E9E', backgroundColor: '#F1F1F1', borderWidth: 1, marginLeft: 100, top: -5, textAlign: 'center'
                    }}>
                        <Text style={{ paddingLeft: 20 }}>
                            {user.email}
                        </Text>
                    </TextInput>


                    <Text style={{ fontSize: 18, paddingBottom: 30 }}>
                        Role:
                    </Text>
                    <TextInput editable={editing} style={{
                        fontSize: 15, width: 220, borderRadius: 20,
                        position: 'absolute', color: 'black', backgroundColor: '#F1F1F1', borderColor: '#9E9E9E', borderWidth: 1, marginLeft: 100, top: 50, textAlign: 'center'
                    }}>
                        {user.role}
                    </TextInput>



                    <Text style={{ fontSize: 18, paddingBottom: 30 }}>
                        Major:
                    </Text>
                    <TextInput editable={editing} style={{
                        fontSize: 15, width: 220, borderRadius: 20,
                        position: 'absolute', color: 'black', backgroundColor: '#F1F1F1', borderColor: '#9E9E9E', borderWidth: 1, marginLeft: 100, top: 105, textAlign: 'center'
                    }}>
                        {user.major}
                    </TextInput>



                    <Text style={{ fontSize: 18, paddingBottom: 30 }}>
                        Courses:
                    </Text>
                    <TextInput editable={editing} style={{
                        fontSize: 15, width: 220, borderRadius: 20,
                        position: 'absolute', color: 'black', backgroundColor: '#F1F1F1', borderColor: '#9E9E9E', borderWidth: 1, marginLeft: 100, top: 160, textAlign: 'center'
                    }}>
                        {user.courses[0]}
                    </TextInput>



                    <Text style={{ fontSize: 18 }}>
                        About:
                    </Text>
                    <TextInput multiline={true} editable={editing} style={{
                        fontSize: 15, width: 320, borderRadius: 20, paddingTop: 5,
                        position: 'absolute', color: 'black', backgroundColor: '#F1F1F1', borderColor: '#9E9E9E', borderWidth: 1, top: 250, textAlign: 'center', textAlignVertical: "top", height: 150
                    }}>
                        {user.about}
                    </TextInput>
                </View>



                {/* <Pressable backgroundColor={'#5F59F7'} style={{ top: 90, height: 60, width: 320, borderRadius: 40, alignItems: 'center', justifyContent: 'center' }} onPress={handleLogOutClick}>
                    <Text style={{ color: 'white', fontSize: 18 }}>
                        Log Out
                    </Text>
                </Pressable> */}
            </ScrollView>
        </View>
    )
}