import { useState, useEffect } from 'react';
import { useGlobalState, setGlobalState } from '../../../index';
import { View, Text, Button, Image, TextInput, Pressable, ScrollView, StyleSheet, Dimensions } from 'react-native';
import axios from 'axios';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import * as ImagePicker from 'expo-image-picker';

export default function ProfileScreen({ navigation }) {
    const [user] = useGlobalState("user");
    const [localhost] = useGlobalState("localhost");
    const [searchValue] = useGlobalState("searchValue");
    const publicFolder = `http://${localhost}:8800/images/`;

    const [editing, setEditing] = useState(false);
    const [username, setUsername] = useState(user.username);
    const [email, setEmail] = useState(user.email);
    const [role, setRole] = useState(user.role);
    const [major, setMajor] = useState(user.major);
    const [courses, setCourses] = useState(user.courses);
    const [about, setAbout] = useState(user.about);
    const [city, setCity] = useState(user.city);
    const [university, setUniversity] = useState(user.university);
    const [zipCode, setZipCode] = useState(user.zipCode);
    const [hourlyRate, setHourlyRate] = useState(user.hourlyRate);
    const [profilePicture, setProfilePicture] = useState(user.profilePicture);
    const [coverPicture, setCoverPicture] = useState(user.coverPicture);

    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;

    const handleLogOutClick = (e) => {
        e.preventDefault();
        setGlobalState("isLoggedIn", false);
    }

    const handleEditProfileClick = (e) => {
        e.preventDefault();
        setEditing(true);
    }

    const handleChooseProfilePicture = async () => {
        let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (permissionResult.granted === false) {
            alert("Permission to access camera roll is required!");
            return;
        }
        let pickerResult = await ImagePicker.launchImageLibraryAsync();

        setProfilePicture(pickerResult.uri);
    }

    const handleChooseCoverPicture = async () => {
        let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (permissionResult.granted === false) {
            alert("Permission to access camera roll is required!");
            return;
        }
        let pickerResult = await ImagePicker.launchImageLibraryAsync();

        setCoverPicture(pickerResult.uri);
    }

    const handleDoneClick = (e) => {
        e.preventDefault();

        try {
            axios.put(`http://${localhost}:8800/api/users/${user._id}`, {
                userId: user._id,
                username: username,
                email: email,
                role: role,
                major: major,
                courses: courses,
                city: city,
                zipCode: zipCode,
                university: university,
                hourlyRate: hourlyRate,
                about: about,
                coverPicture: coverPicture,
                profilePicture: profilePicture
            });
        } catch (err) {
            console.log(err);
        }

        setEditing(false);
    }

    const styles = StyleSheet.create({
        contentContainer: {
            paddingVertical: windowHeight * 0.064,
            alignItems: 'center',
            flexGrow: 1
        },
        verticalLine: {
            height: windowHeight * 0.256,
            width: 1,
            position: 'absolute',
            top: windowHeight * 0.448,
            backgroundColor: '#E5E5E5',
        },
        horizontalLine1: {
            height: 1,
            width: windowWidth,
            position: 'absolute',
            backgroundColor: '#E5E5E5',
            top: windowHeight * 0.448
        },
        horizontalLine2: {
            height: 1,
            width: windowWidth,
            position: 'absolute',
            backgroundColor: '#E5E5E5',
            top: windowHeight * 0.576
        },
        horizontalLine3: {
            height: 1,
            width: windowWidth,
            position: 'absolute',
            backgroundColor: '#E5E5E5',
            top: windowHeight * 0.704
        },
        horizontalLine4: {
            height: 1,
            width: windowWidth,
            position: 'absolute',
            backgroundColor: '#E5E5E5',
            top: windowHeight * 0.896
        }
    });

    return (
        <View style={{ backgroundColor: '#FFFFFF', flex: 1 }}>
            {editing ? (
                <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false} contentContainerStyle={styles.contentContainer} style={{ backgroundColor: '#FFFFFF' }}>
                    <View style={{ marginBottom: windowHeight * 0.0128, top: -windowHeight * 0.019, height: windowHeight * 0.0512 }}>
                        <Text style={{ fontSize: 24, fontWeight: '500' }}>
                            Edit Profile
                        </Text>
                    </View>

                    <View style={{ top: -windowHeight * 0.019 }}>
                        <Pressable onPress={handleChooseCoverPicture}>
                            <Image source={{ uri: coverPicture === "" ? publicFolder + "defaultBackground.jpg" : coverPicture }} style={{ height: windowHeight * 0.166, width: windowWidth }} />
                        </Pressable>

                        <View style={{
                            top: -windowHeight * 0.0768, height: windowHeight * 0.1536, width: windowHeight * 0.1536,
                            borderRadius: windowHeight * 0.0768, paddingLeft: windowWidth * 0.052
                        }}>
                            <Pressable onPress={handleChooseProfilePicture}>
                                <Image source={{ uri: profilePicture === "" ? publicFolder + "defaultProfilePicture.png" : profilePicture }} style=
                                    {{ height: windowHeight * 0.1536, width: windowHeight * 0.1536, borderRadius: windowHeight * 0.0768, borderWidth: 3, borderColor: '#FFFFFF' }} />
                            </Pressable>
                        </View>

                        <Pressable onPress={handleDoneClick}>
                            <MaterialCommunityIcons name={"check"} color={"#5F59F7"} size={24} style={{ marginLeft: 'auto', marginRight: 'auto', top: -windowHeight * 0.128, right: -windowWidth * 0.417 }} />
                        </Pressable>

                        <Text style={{ top: -windowHeight * 0.102, fontSize: 24, textAlign: 'left', fontWeight: '500', textAlignVertical: 'top', paddingLeft: windowWidth * 0.052 }}>
                            {username}
                        </Text>

                        <Text style={{ top: -windowHeight * 0.102, fontSize: 15, textAlign: 'left', textAlignVertical: 'top', paddingLeft: windowWidth * 0.052 }}>
                            {major} {role}
                        </Text>
                    </View>

                    <View style={{ top: -windowHeight * 0.102, alignItems: 'flex-start', display: 'flex', marginRight: windowWidth * 0.651 }}>

                        <View style={{ paddingTop: windowHeight * 0.0128 }}>
                            <Text style={{ fontSize: 18 }}>
                                Username:
                            </Text>
                            <TextInput onChangeText={text => setUsername(text)} style={{
                                fontSize: 15, width: windowWidth * 0.5989, borderRadius: windowHeight * 0.0256,
                                position: 'absolute', color: 'black', borderColor: '#9E9E9E', backgroundColor: '#F1F1F1',
                                borderWidth: 1, marginTop: windowHeight * 0.0128, marginLeft: windowWidth * 0.26,
                                paddingLeft: windowWidth * 0.026, paddingRight: windowWidth * 0.026
                            }}>
                                <Text style={{ paddingLeft: windowWidth * 0.052 }}>
                                    {username}
                                </Text>
                            </TextInput>
                        </View>

                        <View style={{ paddingTop: windowHeight * 0.0384 }}>
                            <Text style={{ fontSize: 18 }}>
                                Email:
                            </Text>
                            <TextInput onChangeText={text => setEmail(text)} style={{
                                fontSize: 15, width: windowWidth * 0.5989, borderRadius: windowHeight * 0.0256,
                                position: 'absolute', color: 'black', borderColor: '#9E9E9E', backgroundColor: '#F1F1F1', borderWidth: 1,
                                marginTop: windowHeight * 0.0384, marginLeft: windowWidth * 0.26, paddingLeft: windowWidth * 0.026, paddingRight: windowWidth * 0.026
                            }}>
                                <Text style={{ paddingLeft: windowWidth * 0.052 }}>
                                    {email}
                                </Text>
                            </TextInput>
                        </View>

                        <View style={{ paddingTop: windowHeight * 0.0384 }}>
                            <Text style={{ fontSize: 18 }}>
                                Major:
                            </Text>
                            <TextInput onChangeText={text => setMajor(text)} style={{
                                fontSize: 15, width: windowWidth * 0.5989, borderRadius: windowHeight * 0.0256,
                                position: 'absolute', color: 'black', borderColor: '#9E9E9E', backgroundColor: '#F1F1F1', borderWidth: 1,
                                marginTop: windowHeight * 0.0384, marginLeft: windowWidth * 0.26, paddingLeft: windowWidth * 0.026, paddingRight: windowWidth * 0.026
                            }}>
                                {major}
                            </TextInput>
                        </View>

                        <View style={{ paddingTop: windowHeight * 0.0384 }}>
                            <Text style={{ fontSize: 18 }}>
                                Role:
                            </Text>
                            <TextInput onChangeText={text => setRole(text)} style={{
                                fontSize: 15, width: windowWidth * 0.5989, borderRadius: windowHeight * 0.0256,
                                position: 'absolute', color: 'black', borderColor: '#9E9E9E', backgroundColor: '#F1F1F1', borderWidth: 1,
                                marginTop: windowHeight * 0.0384, marginLeft: windowWidth * 0.26, paddingLeft: windowWidth * 0.026, paddingRight: windowWidth * 0.026
                            }}>
                                {role}
                            </TextInput>
                        </View>

                        <View style={{ paddingTop: windowHeight * 0.0384 }}>
                            <Text style={{ fontSize: 18 }}>
                                University:
                            </Text>
                            <TextInput onChangeText={text => setUniversity(text)} style={{
                                fontSize: 15, width: windowWidth * 0.5989, borderRadius: windowHeight * 0.0256,
                                position: 'absolute', color: 'black', borderColor: '#9E9E9E', backgroundColor: '#F1F1F1', borderWidth: 1,
                                marginTop: windowHeight * 0.0384, marginLeft: windowWidth * 0.26, paddingLeft: windowWidth * 0.026, paddingRight: windowWidth * 0.026
                            }}>
                                {university}
                            </TextInput>
                        </View>

                        <View style={{ paddingTop: windowHeight * 0.0384 }}>
                            <Text style={{ fontSize: 18 }}>
                                Location:
                            </Text>
                            <TextInput onChangeText={text => setCity(text)} style={{
                                fontSize: 15, width: windowWidth * 0.5989, borderRadius: windowHeight * 0.0256,
                                position: 'absolute', color: 'black', borderColor: '#9E9E9E', backgroundColor: '#F1F1F1', borderWidth: 1,
                                marginTop: windowHeight * 0.0384, marginLeft: windowWidth * 0.26, paddingLeft: windowWidth * 0.026, paddingRight: windowWidth * 0.026
                            }}>
                                {city}
                            </TextInput>
                        </View>

                        <View style={{ paddingTop: windowHeight * 0.0384 }}>
                            <Text style={{ fontSize: 18 }}>
                                Zip Code:
                            </Text>
                            <TextInput onChangeText={text => setZipCode(text)} style={{
                                fontSize: 15, width: windowWidth * 0.5989, borderRadius: windowHeight * 0.0256,
                                position: 'absolute', color: 'black', borderColor: '#9E9E9E', backgroundColor: '#F1F1F1', borderWidth: 1,
                                marginTop: windowHeight * 0.0384, marginLeft: windowWidth * 0.26, paddingLeft: windowWidth * 0.026, paddingRight: windowWidth * 0.026
                            }}>
                                {zipCode}
                            </TextInput>
                        </View>

                        <View style={{ paddingTop: windowHeight * 0.0384 }}>
                            <Text style={{ fontSize: 18 }}>
                                Courses:
                            </Text>
                            <TextInput onChangeText={text => setCourses(text)} style={{
                                fontSize: 15, width: windowWidth * 0.5989, borderRadius: windowHeight * 0.0256,
                                position: 'absolute', color: 'black', borderColor: '#9E9E9E', backgroundColor: '#F1F1F1', borderWidth: 1,
                                marginTop: windowHeight * 0.0384, marginLeft: windowWidth * 0.26, paddingLeft: windowWidth * 0.026, paddingRight: windowWidth * 0.026
                            }}>
                                {courses}
                            </TextInput>
                        </View>

                        <View style={{ paddingTop: windowHeight * 0.0384 }}>
                            <Text style={{ fontSize: 18 }}>
                                Rate:
                            </Text>
                            <TextInput onChangeText={text => setHourlyRate(text)} style={{
                                fontSize: 15, width: windowWidth * 0.5989, borderRadius: windowHeight * 0.0256,
                                position: 'absolute', color: 'black', borderColor: '#9E9E9E', backgroundColor: '#F1F1F1', borderWidth: 1,
                                marginTop: windowHeight * 0.0384, marginLeft: windowWidth * 0.26, paddingLeft: windowWidth * 0.026, paddingRight: windowWidth * 0.026
                            }}>
                                {hourlyRate}
                            </TextInput>
                        </View>

                        <View style={{ paddingTop: windowHeight * 0.0384 }}>
                            <Text style={{ fontSize: 18 }}>
                                About:
                            </Text>
                            <TextInput multiline={true} onChangeText={text => setAbout(text)} style={{
                                fontSize: 15, width: windowWidth * 0.5989, borderRadius: windowHeight * 0.0256,
                                position: 'absolute', color: 'black', borderColor: '#9E9E9E', backgroundColor: '#F1F1F1', borderWidth: 1,
                                marginTop: windowHeight * 0.0384, marginLeft: windowWidth * 0.26, paddingLeft: windowWidth * 0.026, paddingRight: windowWidth * 0.026,
                                textAlignVertical: "top", height: windowHeight * 0.256
                            }}>
                                {about}
                            </TextInput>
                        </View>
                    </View>

                    <View style={{ padding: windowHeight * 0.128 }} />
                </ScrollView>
            ) : (
                <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false} contentContainerStyle={styles.contentContainer} style={{ backgroundColor: '#FFFFFF' }}>

                    <View style={{ flexDirection: 'row', marginBottom: windowHeight * 0.0128, top: -windowHeight * 0.019 }}>
                        <TextInput placeholder="Search" value={searchValue} onChangeText={newText => setGlobalState("searchValue", newText)}
                            onSubmitEditing={() => navigation.navigate('Search', { screen: 'Search' })}
                            style={{ backgroundColor: '#F1F1F1', height: windowHeight * 0.0512, width: windowWidth * 0.95, borderRadius: windowHeight * 0.0256, paddingLeft: windowWidth * 0.104, fontSize: 15 }} />
                        <MaterialCommunityIcons name={"magnify"} color={"#9E9E9E"} size={20} style={{ top: windowHeight * 0.0128, position: 'absolute', paddingLeft: windowWidth * 0.026 }} />
                    </View>

                    <View style={{ top: -windowHeight * 0.019 }}>
                        <Image source={{ uri: coverPicture === "" ? publicFolder + "defaultBackground.jpg" : coverPicture }} style={{ height: windowHeight * 0.166, width: windowWidth }} />

                        <View style={{
                            top: -windowHeight * 0.0768, height: windowHeight * 0.1536, width: windowHeight * 0.1536,
                            borderRadius: windowHeight * 0.0768, paddingLeft: windowWidth * 0.052
                        }}>
                            <Image source={{ uri: profilePicture === "" ? publicFolder + "defaultProfilePicture.png" : profilePicture }} style=
                                {{ height: windowHeight * 0.1536, width: windowHeight * 0.1536, borderRadius: windowHeight * 0.0768, borderWidth: 3, borderColor: '#FFFFFF' }} />
                        </View>

                        <Pressable onPress={handleEditProfileClick}>
                            <MaterialCommunityIcons name={"pencil-outline"} color={"#5F59F7"} size={24} style={{ marginLeft: 'auto', marginRight: 'auto', top: -windowHeight * 0.128, right: -windowWidth * 0.4167 }} />
                        </Pressable>

                        <Text style={{ top: -windowHeight * 0.105, fontSize: 24, textAlign: 'left', fontWeight: '500', textAlignVertical: 'top', paddingLeft: windowWidth * 0.052 }}>
                            {username}
                        </Text>

                        <Text style={{ top: -windowHeight * 0.105, fontSize: 15, textAlign: 'left', textAlignVertical: 'top', paddingLeft: windowWidth * 0.052 }}>
                            {major} {role}
                        </Text>
                    </View>

                    <View style={{ top: -windowHeight * 0.105, flex: 1, flexDirection: 'row', flexWrap: 'wrap' }}>
                        <View style={{ alignItems: 'center', width: '50%', paddingTop: windowHeight * 0.0384 }}>
                            <View style={{ flexDirection: 'row' }}>
                                <MaterialCommunityIcons name={"email"} color={"#5F59F7"} size={20} style={{ paddingRight: windowWidth * 0.013 }} />
                                <Text style={{ fontSize: 15, fontWeight: 'bold', color: '#5F59F7' }}>
                                    Email Address:
                                </Text>
                            </View>
                            <Text style={{ fontSize: 15, color: 'grey' }}>
                                {email}
                            </Text>
                        </View>

                        <View style={{ alignItems: 'center', width: '50%', paddingTop: windowHeight * 0.0384 }}>
                            <View style={{ flexDirection: 'row' }}>
                                <MaterialCommunityIcons name={"school"} color={"#5F59F7"} size={20} style={{ paddingRight: windowWidth * 0.013 }} />
                                <Text style={{ fontSize: 15, fontWeight: 'bold', color: '#5F59F7' }}>
                                    University:
                                </Text>
                            </View>
                            <Text style={{ fontSize: 15, color: 'grey' }}>
                                {university}
                            </Text>
                        </View>

                        <View style={{ alignItems: 'center', width: '50%', paddingTop: windowHeight * 0.0768 }}>
                            <View style={{ flexDirection: 'row' }}>
                                <MaterialCommunityIcons name={"map-marker"} color={"#5F59F7"} size={20} style={{ paddingRight: windowWidth * 0.013 }} />
                                <Text style={{ fontSize: 15, fontWeight: 'bold', color: '#5F59F7' }}>
                                    Location:
                                </Text>
                            </View>
                            <Text style={{ fontSize: 15, color: 'grey' }}>
                                {city}
                            </Text>
                        </View>

                        <View style={{ alignItems: 'center', width: '50%', paddingTop: windowHeight * 0.0768 }}>
                            <View style={{ flexDirection: 'row' }}>
                                <MaterialCommunityIcons name={"book-open-variant"} color={"#5F59F7"} size={20} style={{ paddingRight: windowWidth * 0.013 }} />
                                <Text style={{ fontSize: 15, fontWeight: 'bold', color: '#5F59F7' }}>
                                    Courses:
                                </Text>
                            </View>
                            <Text style={{ fontSize: 15, color: 'grey' }}>
                                {courses}
                            </Text>
                        </View>

                        <View style={{ alignItems: 'center', width: '100%', paddingTop: windowHeight * 0.0512 }}>
                            <View style={{ flexDirection: 'row' }}>
                                <MaterialCommunityIcons name={"lead-pencil"} color={"#5F59F7"} size={20} style={{ paddingRight: windowWidth * 0.013 }} />
                                <Text style={{ fontSize: 15, fontWeight: 'bold', color: '#5F59F7' }}>
                                    About:
                                </Text>
                            </View>
                            <Text style={{ fontSize: 15, textAlign: 'center', color: 'grey', paddingLeft: windowWidth * 0.026, paddingRight: windowWidth * 0.026 }}>
                                {about}
                            </Text>
                        </View>
                    </View>

                    <View style={styles.horizontalLine1} />
                    <View style={styles.horizontalLine2} />
                    <View style={styles.horizontalLine3} />
                    <View style={styles.horizontalLine4} />
                    <View style={styles.verticalLine} />

                    <View style={{ padding: windowHeight * 0.128 }}></View>

                    <Pressable backgroundColor={'#5F59F7'} style={{
                        top: windowHeight * 0.922, height: windowHeight * 0.0768, width: windowWidth * 0.833,
                        borderRadius: windowHeight * 0.0512, alignItems: 'center', justifyContent: 'center', position: 'absolute'
                    }} onPress={handleLogOutClick}>
                        <Text style={{ color: 'white', fontSize: 18 }}>
                            Log Out
                        </Text>
                    </Pressable>

                </ScrollView>
            )
            }
        </View>
    )
}