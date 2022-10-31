import { useState, useEffect } from 'react';
import { useGlobalState, setGlobalState } from '../../../index';
import { View, Text, Button, Image, TextInput, Pressable, ScrollView, StyleSheet, Dimensions } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function SearchScreen({ navigation }) {
    const [user] = useGlobalState("user");
    const [allUsers] = useGlobalState("allUsers");
    const [searchValue] = useGlobalState("searchValue");
    const [localhost] = useGlobalState("localhost");
    const publicFolder = `http://${localhost}:8800/images/`;

    const [boxClicked, setboxClicked] = useState(false);
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [role, setRole] = useState("");
    const [major, setMajor] = useState("");
    const [courses, setCourses] = useState([""]);
    const [about, setAbout] = useState("");
    const [city, setCity] = useState("");
    const [university, setUniversity] = useState("");
    const [zipCode, setZipCode] = useState("");
    const [hourlyRate, setHourlyRate] = useState("");
    const [profilePicture, setProfilePicture] = useState("");
    const [coverPicture, setCoverPicture] = useState("");

    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;

    const styles = StyleSheet.create({
        contentContainer: {
            paddingVertical: 50,
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

    function handleUserBoxClick(currentUser) {
        setboxClicked(true);

        setUsername(currentUser.username);
        setEmail(currentUser.email);
        setRole(currentUser.role);
        setMajor(currentUser.major);
        setAbout(currentUser.about);
        setCity(currentUser.city);
        setUniversity(currentUser.university);
        setZipCode(currentUser.zipCode);
        setHourlyRate(currentUser.hourlyRate);
        setProfilePicture(currentUser.profilePicture);
        setCoverPicture(currentUser.coverPicture);
        setUsername(currentUser.username);
    }

    const handleBackClick = (e) => {
        e.preventDefault();
        setboxClicked(false);
    }

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#FFFFFF' }}>
            {!boxClicked ? (
                <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false} contentContainerStyle={styles.contentContainer} style={{ backgroundColor: '#FFFFFF' }}>
                    <View style={{ flexDirection: 'row', marginBottom: 10, top: -windowHeight * 0.019 }}>
                        <TextInput placeholder="Search" value={searchValue} onChangeText={newText => setGlobalState("searchValue", newText)}
                            onSubmitEditing={() => navigation.navigate('Search', { screen: 'Search' })}
                            style={{ backgroundColor: '#F1F1F1', height: 40, width: windowWidth * 0.95, borderRadius: 20, paddingLeft: 40, fontSize: 15 }} />
                        <MaterialCommunityIcons name={"magnify"} color={"#9E9E9E"} size={20} style={{ top: windowHeight * 0.0128, position: 'absolute', paddingLeft: 10 }} />
                    </View>

                    <View>
                        <>
                            {allUsers.map((currentUser, index) => (
                                currentUser.role === user.role ? (
                                    <View key={currentUser.username} />
                                ) : (
                                    <Pressable key={currentUser.username} onPress={() => handleUserBoxClick(currentUser)}>
                                        <View style={{
                                            height: windowHeight / 5, width: 0.85 * windowWidth, backgroundColor: '#F5F5F5', borderWidth: 1,
                                            borderColor: '#9E9E9E', borderRadius: 20, marginBottom: 25
                                        }}>

                                            <Image source={{ uri: currentUser.coverPicture === "" ? publicFolder + "defaultBackground.jpg" : currentUser.coverPicture }} style={{ height: 50, width: windowWidth * 0.845, borderTopLeftRadius: 20, borderTopRightRadius: 20 }} />

                                            <View style={{ top: -40, height: 80, width: 80, borderRadius: 40, paddingLeft: 15 }}>
                                                <Image source={{ uri: currentUser.profilePicture === "" ? publicFolder + "defaultProfilePicture.png" : currentUser.profilePicture }} style={{ height: 80, width: 80, borderRadius: 40, borderWidth: 2, borderColor: '#FFFFFF' }} />
                                            </View>

                                            <View style={{ flexDirection: 'row' }}>
                                                <View>
                                                    <Text style={{ top: -windowHeight * 0.05, fontSize: 15, textAlign: 'left', fontWeight: '500', textAlignVertical: 'top', paddingLeft: 15 }}>
                                                        {currentUser.username}
                                                    </Text>
                                                    {courses.map((course) => (
                                                        <Text key={course} style={{ top: -windowHeight * 0.05, fontSize: 12, textAlign: 'left', fontWeight: '400', textAlignVertical: 'top', paddingLeft: 15, paddingTop: 10, color: 'gray' }}>
                                                            {currentUser.course}
                                                        </Text>
                                                    ))}
                                                </View>

                                                <Text style={{ position: 'absolute', top: -windowHeight * 0.028, right: windowHeight * 0.025, fontSize: 15, textAlign: 'left', fontWeight: '400', textAlignVertical: 'top', paddingLeft: 15, paddingTop: 10, color: '#2970FE' }}>
                                                    ${currentUser.hourlyRate}/hr
                                                </Text>

                                                <Text style={{ position: 'absolute', top: -windowHeight * 0.06, right: windowHeight * 0.025, fontSize: 12, textAlign: 'left', fontWeight: '400', textAlignVertical: 'top', paddingLeft: 15, paddingTop: 10, color: 'gray' }}>
                                                    {currentUser.city}, {currentUser.zipCode}
                                                </Text>
                                            </View>

                                        </View>
                                    </Pressable>
                                )
                            )
                            )}
                        </>
                    </View>

                </ScrollView>
            ) : (
                <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false} contentContainerStyle={styles.contentContainer} style={{ backgroundColor: '#FFFFFF' }}>

                    <View style={{ marginBottom: 10, top: -windowHeight * 0.019, height: 40 }}>
                        <Text style={{ fontSize: 24, fontWeight: '500' }}>
                            View Profile
                        </Text>

                        <Pressable onPress={handleBackClick}>
                            <MaterialCommunityIcons name={"chevron-left"} color={"#5F59F7"} size={40} style={{ marginLeft: 'auto', marginRight: 'auto', top: -windowHeight * 0.045, left: -windowWidth * 0.42 }} />
                        </Pressable>
                    </View>

                    <View style={{ top: -windowHeight * 0.019 }}>
                        <Image source={{ uri: coverPicture === "" ? publicFolder + "defaultBackground.jpg" : coverPicture }} style={{ height: 130, width: windowWidth }} />

                        <View style={{ top: -windowHeight * 0.0768, height: 120, width: 120, borderRadius: 60, paddingLeft: 20 }}>
                            <Image source={{ uri: profilePicture === "" ? publicFolder + "defaultProfilePicture.png" : profilePicture }} style={{ height: 120, width: 120, borderRadius: 60, borderWidth: 3, borderColor: '#FFFFFF' }} />
                        </View>

                        <Pressable>
                            <Ionicons name={"chatbubbles"} color={"#5F59F7"} size={24} style={{ marginLeft: 'auto', marginRight: 'auto', top: -windowHeight * 0.128, right: -windowWidth * 0.4167 }} />
                        </Pressable>

                        <Pressable>
                            <Ionicons name={"calendar"} color={"#5F59F7"} size={24} style={{ position: 'absolute', top: -windowHeight * 0.1, right: windowWidth * 0.05 }} />
                        </Pressable>

                        <Text style={{ top: -windowHeight * 0.105, fontSize: 24, textAlign: 'left', fontWeight: '500', textAlignVertical: 'top', paddingLeft: 20 }}>
                            {username}
                        </Text>

                        <Text style={{ top: -windowHeight * 0.105, fontSize: 15, textAlign: 'left', textAlignVertical: 'top', paddingLeft: 20 }}>
                            {major} {role}
                        </Text>
                    </View>

                    <View style={{ top: -windowHeight * 0.105, flex: 1, flexDirection: 'row', flexWrap: 'wrap' }}>
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
                </ScrollView>
            )}
        </View>
    )
}