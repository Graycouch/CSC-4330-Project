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

    const [galleryPermission, setGalleryPermission] = useState(null);

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
        let image = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images
        });

        if (image.cancelled) {
            return;
        }

        console.log(image);
    }

    const handleChooseCoverPicture = async () => {
        let image = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images
        });

        if (image.cancelled) {
            return;
        }

        console.log(image);
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
                about: about
            });
        } catch (err) {
            console.log(err);
        }

        setEditing(false);
    }

    const styles = StyleSheet.create({
        contentContainer: {
            paddingVertical: 50,
            alignItems: 'center',
            flexGrow: 1
        },
        verticalLine: {
            height: 200,
            width: 1,
            position: 'absolute',
            top: 350,
            backgroundColor: '#E5E5E5',
        },
        horizontalLine1: {
            height: 1,
            width: windowWidth,
            position: 'absolute',
            backgroundColor: '#E5E5E5',
            top: 350
        },
        horizontalLine2: {
            height: 1,
            width: windowWidth,
            position: 'absolute',
            backgroundColor: '#E5E5E5',
            top: 450
        },
        horizontalLine3: {
            height: 1,
            width: windowWidth,
            position: 'absolute',
            backgroundColor: '#E5E5E5',
            top: 550
        },
        horizontalLine4: {
            height: 1,
            width: windowWidth,
            position: 'absolute',
            backgroundColor: '#E5E5E5',
            top: 700
        }
    });

    return (
        <View style={{ backgroundColor: '#FFFFFF', flex: 1 }}>
            {editing ? (
                <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false} contentContainerStyle={styles.contentContainer} style={{ backgroundColor: '#FFFFFF' }}>
                    <View style={{ marginBottom: 10, top: -15, height: 40 }}>
                        <Text style={{ fontSize: 24, fontWeight: '500' }}>
                            Edit Profile
                        </Text>
                    </View>

                    <View style={{ top: -15 }}>
                        <Pressable onPress={handleChooseCoverPicture}>
                            <Image source={{ uri: publicFolder + coverPicture }} style={{ height: 130, width: windowWidth }} />
                        </Pressable>

                        <View style={{ top: -60, height: 120, width: 120, borderRadius: 60, paddingLeft: 20 }}>
                            <Pressable onPress={handleChooseProfilePicture}>
                                <Image source={{ uri: publicFolder + "abdel.jpg" }} style={{ height: 120, width: 120, borderRadius: 60, borderWidth: 3, borderColor: '#FFFFFF' }} />
                            </Pressable>
                        </View>

                        <Pressable onPress={handleDoneClick}>
                            <MaterialCommunityIcons name={"check"} color={"#5F59F7"} size={24} style={{ marginLeft: 'auto', marginRight: 'auto', top: -100, right: -160 }} />
                        </Pressable>

                        <Text style={{ top: -80, fontSize: 24, textAlign: 'left', fontWeight: '500', textAlignVertical: 'top', paddingLeft: 20 }}>
                            {username}
                        </Text>

                        <Text style={{ top: -80, fontSize: 15, textAlign: 'left', textAlignVertical: 'top', paddingLeft: 20 }}>
                            {major} {role}
                        </Text>
                    </View>

                    <View style={{ top: -80, alignItems: 'flex-start', display: 'flex', marginRight: 250 }}>

                        <View style={{ paddingTop: 10 }}>
                            <Text style={{ fontSize: 18 }}>
                                Username:
                            </Text>
                            <TextInput onChangeText={text => setUsername(text)} style={{
                                fontSize: 15, width: 230, borderRadius: 20,
                                position: 'absolute', color: 'black', borderColor: '#9E9E9E', backgroundColor: '#F1F1F1', borderWidth: 1, marginTop: 10, marginLeft: 100, paddingLeft: 10, paddingRight: 10
                            }}>
                                <Text style={{ paddingLeft: 20 }}>
                                    {username}
                                </Text>
                            </TextInput>
                        </View>

                        <View style={{ paddingTop: 30 }}>
                            <Text style={{ fontSize: 18 }}>
                                Email:
                            </Text>
                            <TextInput onChangeText={text => setEmail(text)} style={{
                                fontSize: 15, width: 230, borderRadius: 20,
                                position: 'absolute', color: 'black', borderColor: '#9E9E9E', backgroundColor: '#F1F1F1', borderWidth: 1, marginTop: 30, marginLeft: 100, paddingLeft: 10, paddingRight: 10
                            }}>
                                <Text style={{ paddingLeft: 20 }}>
                                    {email}
                                </Text>
                            </TextInput>
                        </View>

                        <View style={{ paddingTop: 30 }}>
                            <Text style={{ fontSize: 18 }}>
                                Major:
                            </Text>
                            <TextInput onChangeText={text => setMajor(text)} style={{
                                fontSize: 15, width: 230, borderRadius: 20,
                                position: 'absolute', color: 'black', backgroundColor: '#F1F1F1', borderColor: '#9E9E9E', borderWidth: 1, marginTop: 30, marginLeft: 100, paddingLeft: 10, paddingRight: 10
                            }}>
                                {major}
                            </TextInput>
                        </View>

                        <View style={{ paddingTop: 30 }}>
                            <Text style={{ fontSize: 18 }}>
                                Role:
                            </Text>
                            <TextInput onChangeText={text => setRole(text)} style={{
                                fontSize: 15, width: 230, borderRadius: 20,
                                position: 'absolute', color: 'black', backgroundColor: '#F1F1F1', borderColor: '#9E9E9E', borderWidth: 1, marginTop: 30, marginLeft: 100, paddingLeft: 10, paddingRight: 10
                            }}>
                                {role}
                            </TextInput>
                        </View>

                        <View style={{ paddingTop: 30 }}>
                            <Text style={{ fontSize: 18 }}>
                                University:
                            </Text>
                            <TextInput onChangeText={text => setUniversity(text)} style={{
                                fontSize: 15, width: 230, borderRadius: 20,
                                position: 'absolute', color: 'black', backgroundColor: '#F1F1F1', borderColor: '#9E9E9E', borderWidth: 1, marginTop: 30, marginLeft: 100, paddingLeft: 10, paddingRight: 10
                            }}>
                                {university}
                            </TextInput>
                        </View>

                        <View style={{ paddingTop: 30 }}>
                            <Text style={{ fontSize: 18 }}>
                                Location:
                            </Text>
                            <TextInput onChangeText={text => setCity(text)} style={{
                                fontSize: 15, width: 230, borderRadius: 20,
                                position: 'absolute', color: 'black', backgroundColor: '#F1F1F1', borderColor: '#9E9E9E', borderWidth: 1, marginTop: 30, marginLeft: 100, paddingLeft: 10, paddingRight: 10
                            }}>
                                {city}
                            </TextInput>
                        </View>

                        <View style={{ paddingTop: 30 }}>
                            <Text style={{ fontSize: 18 }}>
                                Zip Code:
                            </Text>
                            <TextInput onChangeText={text => setZipCode(text)} style={{
                                fontSize: 15, width: 230, borderRadius: 20,
                                position: 'absolute', color: 'black', backgroundColor: '#F1F1F1', borderColor: '#9E9E9E', borderWidth: 1, marginTop: 30, marginLeft: 100, paddingLeft: 10, paddingRight: 10
                            }}>
                                {zipCode}
                            </TextInput>
                        </View>

                        <View style={{ paddingTop: 30 }}>
                            <Text style={{ fontSize: 18 }}>
                                Courses:
                            </Text>
                            <TextInput onChangeText={text => setCourses(text)} style={{
                                fontSize: 15, width: 230, borderRadius: 20,
                                position: 'absolute', color: 'black', backgroundColor: '#F1F1F1', borderColor: '#9E9E9E', borderWidth: 1, marginTop: 30, marginLeft: 100, paddingLeft: 10, paddingRight: 10
                            }}>
                                {courses}
                            </TextInput>
                        </View>

                        {role === "Tutor" ? (
                            <View style={{ paddingTop: 30 }}>
                                <Text style={{ fontSize: 18 }}>
                                    Rate:
                                </Text>
                                <TextInput onChangeText={text => setHourlyRate(text)} style={{
                                    fontSize: 15, width: 230, borderRadius: 20,
                                    position: 'absolute', color: 'black', backgroundColor: '#F1F1F1', borderColor: '#9E9E9E', borderWidth: 1, marginTop: 30, marginLeft: 100, paddingLeft: 10, paddingRight: 10
                                }}>
                                    ${hourlyRate}/hr
                                </TextInput>
                            </View>
                        ) : (
                            <View />
                        )}

                        <View style={{ paddingTop: 30 }}>
                            <Text style={{ fontSize: 18 }}>
                                About:
                            </Text>
                            <TextInput multiline={true} onChangeText={text => setAbout(text)} style={{
                                fontSize: 15, width: 230, borderRadius: 20, paddingTop: 5,
                                position: 'absolute', color: 'black', backgroundColor: '#F1F1F1', borderColor: '#9E9E9E', borderWidth: 1, marginTop: 30, marginLeft: 100, paddingLeft: 10, paddingRight: 10
                                , textAlignVertical: "top", height: 200
                            }}>
                                {about}
                            </TextInput>
                        </View>
                    </View>

                    <View style={{ padding: 100 }}></View>
                </ScrollView>
            ) : (
                <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false} contentContainerStyle={styles.contentContainer} style={{ backgroundColor: '#FFFFFF' }}>

                    <View style={{ flexDirection: 'row', marginBottom: 10, top: -15 }}>
                        <TextInput placeholder="Search" value={searchValue} onChangeText={newText => setGlobalState("searchValue", newText)}
                            onSubmitEditing={() => navigation.navigate('Search', { screen: 'Search' })}
                            style={{ backgroundColor: '#F1F1F1', height: 40, width: 350, borderRadius: 10, paddingLeft: 40, fontSize: 15 }} />
                        <MaterialCommunityIcons name={"magnify"} color={"#9E9E9E"} size={20} style={{ top: 10, position: 'absolute', paddingLeft: 10 }} />
                    </View>

                    <View style={{ top: -15 }}>
                        <Image source={{ uri: publicFolder + coverPicture }} style={{ height: 130, width: windowWidth }} />

                        <View style={{ top: -60, height: 120, width: 120, borderRadius: 60, paddingLeft: 20 }}>
                            <Image source={{ uri: publicFolder + "abdel.jpg" }} style={{ height: 120, width: 120, borderRadius: 60, borderWidth: 3, borderColor: '#FFFFFF' }} />
                        </View>

                        <Pressable onPress={handleEditProfileClick}>
                            <MaterialCommunityIcons name={"pencil-outline"} color={"#5F59F7"} size={24} style={{ marginLeft: 'auto', marginRight: 'auto', top: -100, right: -160 }} />
                        </Pressable>

                        <Text style={{ top: -80, fontSize: 24, textAlign: 'left', fontWeight: '500', textAlignVertical: 'top', paddingLeft: 20 }}>
                            {username}
                        </Text>

                        <Text style={{ top: -80, fontSize: 15, textAlign: 'left', textAlignVertical: 'top', paddingLeft: 20 }}>
                            {major} {role}
                        </Text>
                    </View>

                    <View style={{ top: -80, flex: 1, flexDirection: 'row', flexWrap: 'wrap' }}>
                        <View style={{ alignItems: 'center', width: '50%', paddingTop: 30 }}>
                            <View style={{ flexDirection: 'row' }}>
                                <MaterialCommunityIcons name={"email"} color={"#5F59F7"} size={20} style={{ paddingRight: 5 }} />
                                <Text style={{ fontSize: 15, fontWeight: 'bold', color: '#5F59F7' }}>
                                    Email Address:
                                </Text>
                            </View>
                            <Text style={{ fontSize: 15, color: 'grey' }}>
                                {email}
                            </Text>
                        </View>

                        <View style={{ alignItems: 'center', width: '50%', paddingTop: 30 }}>
                            <View style={{ flexDirection: 'row' }}>
                                <MaterialCommunityIcons name={"school"} color={"#5F59F7"} size={20} style={{ paddingRight: 5 }} />
                                <Text style={{ fontSize: 15, fontWeight: 'bold', color: '#5F59F7' }}>
                                    University:
                                </Text>
                            </View>
                            <Text style={{ fontSize: 15, color: 'grey' }}>
                                {university}
                            </Text>
                        </View>

                        <View style={{ alignItems: 'center', width: '50%', paddingTop: 60 }}>
                            <View style={{ flexDirection: 'row' }}>
                                <MaterialCommunityIcons name={"map-marker"} color={"#5F59F7"} size={20} style={{ paddingRight: 5 }} />
                                <Text style={{ fontSize: 15, fontWeight: 'bold', color: '#5F59F7' }}>
                                    Location:
                                </Text>
                            </View>
                            <Text style={{ fontSize: 15, color: 'grey' }}>
                                {city}
                            </Text>
                        </View>

                        <View style={{ alignItems: 'center', width: '50%', paddingTop: 60 }}>
                            <View style={{ flexDirection: 'row' }}>
                                <MaterialCommunityIcons name={"book-open-variant"} color={"#5F59F7"} size={20} style={{ paddingRight: 5 }} />
                                <Text style={{ fontSize: 15, fontWeight: 'bold', color: '#5F59F7' }}>
                                    Courses:
                                </Text>
                            </View>
                            <Text style={{ fontSize: 15, color: 'grey' }}>
                                {courses}
                            </Text>
                        </View>

                        <View style={{ alignItems: 'center', width: '100%', paddingTop: 40 }}>
                            <View style={{ flexDirection: 'row' }}>
                                <MaterialCommunityIcons name={"lead-pencil"} color={"#5F59F7"} size={20} style={{ paddingRight: 5 }} />
                                <Text style={{ fontSize: 15, fontWeight: 'bold', color: '#5F59F7' }}>
                                    About:
                                </Text>
                            </View>
                            <Text style={{ fontSize: 15, textAlign: 'center', color: 'grey', paddingLeft: 10, paddingRight: 10 }}>
                                {about}
                            </Text>
                        </View>
                    </View>

                    <View style={styles.horizontalLine1} />
                    <View style={styles.horizontalLine2} />
                    <View style={styles.horizontalLine3} />
                    <View style={styles.horizontalLine4} />
                    <View style={styles.verticalLine} />

                    <View style={{ padding: 100 }}></View>

                    <Pressable backgroundColor={'#5F59F7'} style={{ top: 720, height: 60, width: 320, borderRadius: 40, alignItems: 'center', justifyContent: 'center', position: 'absolute' }} onPress={handleLogOutClick}>
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