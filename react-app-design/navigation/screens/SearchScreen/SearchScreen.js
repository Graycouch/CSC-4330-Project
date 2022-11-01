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
    const [searchPageBar, setSearchPageBar] = useState(searchValue);

    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;

    allUsers.sort((a, b) => parseInt(a.zipCode) - parseInt(b.zipCode));

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

    function handleUserBoxClick(currentUser) {
        setboxClicked(true);

        setUsername(currentUser.username);
        setEmail(currentUser.email);
        setRole(currentUser.role);
        setMajor(currentUser.major);
        setCourses(currentUser.courses);
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
                    <View style={{ flexDirection: 'row', marginBottom: windowHeight * 0.0128, top: -windowHeight * 0.019 }}>
                        <TextInput placeholder="Search" value={searchPageBar} onChangeText={newText => setSearchPageBar(newText)}
                            onSubmitEditing={() => setGlobalState("searchValue", searchPageBar)} style={{
                                backgroundColor: '#F1F1F1', height: windowHeight * 0.0512,
                                width: windowWidth * 0.95, borderRadius: windowHeight * 0.0256, paddingLeft: windowWidth * 0.104, fontSize: 15
                            }} />
                        <MaterialCommunityIcons name={"magnify"} color={"#9E9E9E"} size={20} style={{ top: windowHeight * 0.0128, position: 'absolute', paddingLeft: windowWidth * 0.026 }} />
                    </View>

                    <View>
                        <>
                            {allUsers.map((currentUser, index) => (
                                currentUser.role !== user.role && (searchValue !== "" ? (currentUser.major.toLowerCase() === searchValue.toLowerCase()) : (true)) ? (
                                    <Pressable key={currentUser.username} onPress={() => handleUserBoxClick(currentUser)}>
                                        <View style={{
                                            height: windowHeight * 0.2, width: 0.85 * windowWidth, backgroundColor: '#F5F5F5', borderWidth: 1,
                                            borderColor: '#9E9E9E', borderRadius: windowHeight * 0.0256, marginBottom: windowHeight * 0.032
                                        }}>

                                            <Image source={{ uri: currentUser.coverPicture === "" ? publicFolder + "defaultBackground.jpg" : currentUser.coverPicture }}
                                                style={{
                                                    height: windowHeight * 0.064, width: windowWidth * 0.845,
                                                    borderTopLeftRadius: windowHeight * 0.0256, borderTopRightRadius: windowHeight * 0.0256
                                                }} />

                                            <View style={{
                                                top: -windowHeight * 0.0512, height: windowHeight * 0.1024, width: windowHeight * 0.1024,
                                                borderRadius: windowHeight * 0.0512, paddingLeft: windowWidth * 0.039
                                            }}>
                                                <Image source={{ uri: currentUser.profilePicture === "" ? publicFolder + "defaultProfilePicture.png" : currentUser.profilePicture }}
                                                    style={{
                                                        height: windowHeight * 0.1024, width: windowHeight * 0.1024,
                                                        borderRadius: windowHeight * 0.0512, borderWidth: 2, borderColor: '#FFFFFF'
                                                    }} />
                                            </View>

                                            <View style={{ flexDirection: 'row' }}>
                                                <View>
                                                    <Text style={{
                                                        top: -windowHeight * 0.05, fontSize: 15, textAlign: 'left', fontWeight: '500',
                                                        textAlignVertical: 'top', paddingLeft: windowWidth * 0.039
                                                    }}>
                                                        {currentUser.username}
                                                    </Text>

                                                    <Text style={{
                                                        top: -windowHeight * 0.05, fontSize: 12, textAlign: 'left', fontWeight: '400',
                                                        textAlignVertical: 'top', paddingLeft: windowWidth * 0.039
                                                    }}>
                                                        {currentUser.major} {currentUser.role}
                                                    </Text>

                                                    <Text style={{ paddingLeft: windowWidth * 0.042, top: -windowHeight * 0.045 }}>
                                                        {currentUser.courses.map((course) => (
                                                            <Text key={course} style={{
                                                                fontSize: 10, textAlign: 'left', fontWeight: '400', color: 'gray'
                                                            }}>
                                                                {course} {"  "}
                                                            </Text>
                                                        ))}
                                                    </Text>
                                                </View>

                                                <Text style={{
                                                    position: 'absolute', top: -windowHeight * 0.073, right: windowHeight * 0.025,
                                                    fontSize: 15, textAlign: 'left', fontWeight: '400', textAlignVertical: 'top', paddingLeft: windowWidth * 0.039,
                                                    paddingTop: windowHeight * 0.0128, color: '#2970FE'
                                                }}>
                                                    ${currentUser.hourlyRate}/hr
                                                </Text>

                                                <Text style={{
                                                    position: 'absolute', top: -windowHeight * 0.1, right: windowHeight * 0.025,
                                                    fontSize: 12, textAlign: 'left', fontWeight: '400', textAlignVertical: 'top', paddingLeft: windowWidth * 0.039,
                                                    paddingTop: windowHeight * 0.0128, color: 'gray'
                                                }}>
                                                    {currentUser.city}, {currentUser.zipCode}
                                                </Text>
                                            </View>

                                        </View>
                                    </Pressable>
                                ) : (
                                    <View key={currentUser.username} />
                                )
                            )
                            )}
                        </>
                    </View>

                </ScrollView>
            ) : (
                <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false} contentContainerStyle={styles.contentContainer} style={{ backgroundColor: '#FFFFFF' }}>

                    <View style={{ marginBottom: windowHeight * 0.0128, top: -windowHeight * 0.019, height: windowHeight * 0.05 }}>
                        <Text style={{ fontSize: 24, fontWeight: '500' }}>
                            View Profile
                        </Text>

                        <Pressable onPress={handleBackClick}>
                            <MaterialCommunityIcons name={"chevron-left"} color={"#5F59F7"} size={40} style={{ marginLeft: 'auto', marginRight: 'auto', top: -windowHeight * 0.045, left: -windowWidth * 0.42 }} />
                        </Pressable>
                    </View>

                    <View style={{ top: -windowHeight * 0.019 }}>
                        <Image source={{ uri: coverPicture === "" ? publicFolder + "defaultBackground.jpg" : coverPicture }} style={{ height: windowHeight * 0.166, width: windowWidth }} />

                        <View style={{ top: -windowHeight * 0.0768, height: 120, width: 120, borderRadius: 60, paddingLeft: 20 }}>
                            <Image source={{ uri: profilePicture === "" ? publicFolder + "defaultProfilePicture.png" : profilePicture }} style={{
                                height: windowHeight * 0.1536, width: windowHeight * 0.1536, borderRadius: windowHeight * 0.0768, borderWidth: 3, borderColor: '#FFFFFF'
                            }} />
                        </View>

                        <Pressable>
                            <Ionicons name={"chatbubbles"} color={"#5F59F7"} size={24} style={{ marginLeft: 'auto', marginRight: 'auto', top: -windowHeight * 0.128, right: -windowWidth * 0.4167 }} />
                        </Pressable>

                        <Pressable>
                            <Ionicons name={"calendar"} color={"#5F59F7"} size={24} style={{ position: 'absolute', top: -windowHeight * 0.1, right: windowWidth * 0.05 }} />
                        </Pressable>

                        <Text style={{ top: -windowHeight * 0.105, fontSize: 24, textAlign: 'left', fontWeight: '500', textAlignVertical: 'top', paddingLeft: windowWidth * 0.052 }}>
                            {username}
                        </Text>

                        <Text style={{ top: -windowHeight * 0.106, fontSize: 15, textAlign: 'left', textAlignVertical: 'top', paddingLeft: windowWidth * 0.052 }}>
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
                            <Text style={{ fontSize: 15, color: 'grey', paddingLeft: windowWidth * 0.03 }}>
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
                            <Text style={{ textAlign: 'center', lineHeight: windowHeight * 0.029449 }}>
                                {courses.map((course) => (
                                    <Text key={course} style={{
                                        top: -windowHeight * 0.05, fontSize: 12, fontWeight: '400', color: 'gray'
                                    }}>
                                        {course}{"  "}
                                    </Text>
                                ))}
                            </Text>
                        </View>

                        <View style={{ alignItems: 'center', width: '100%', position: 'absolute', top: windowHeight * 0.27 }}>
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
                </ScrollView>
            )}
        </View>
    )
}