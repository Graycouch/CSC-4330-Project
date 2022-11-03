import * as React from 'react';
import { View, Text, Button, Image, TextInput, Pressable, ScrollView, StyleSheet, Dimensions } from 'react-native';
import { useState, useEffect } from 'react';
import { useGlobalState, setGlobalState } from '../../../index';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


import Header from '../../header/header.js';
import { CardFactory } from '../../../components/Card/Factory';

export default function HomeScreen({ navigation }) {
    const [user] = useGlobalState("user");
    const [allUsers] = useGlobalState("allUsers");
    const [searchValue] = useGlobalState("searchValue");

    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;

    const [username, setUsername] = useState(user.username);

    const [staticContentURL] = useGlobalState("staticContentURL");
    const imageURL = staticContentURL + '/images/';

    // Temporary Hardcoding for Mid-term Demo
    const UpcomingLessons = [...allUsers.slice(0,1), ...allUsers.slice(0,1)];
    const MyTeachers = allUsers.slice(0,1);
    const SuggestedTeachers = allUsers.slice(2,5);



    // DEBUG
    const debugBorders = false;

    const styles = StyleSheet.create({

        // Overall Container
        headerContainer: {
            paddingTop: 50, //apprently we need this to keep the header in the safe-space
            flex: 1,
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#f9f9f9',
        },

        // Inner Container for each Section
        sectionContainer: {
            flexDirection: 'column',
            alignContent: 'flex-start',
            justifyContent: "flex-start",
            borderColor: debugBorders ? 'blue' : '#f9f9f9',
            borderWidth: 2,
            width: '100%',
            marginTop: 30,
            marginBottom: 30,
            
        },

        heading : {
            fontSize: 22, 
            fontWeight: 'medium', 
            borderColor: debugBorders ? 'blue' : '#f9f9f9', 
            borderWidth: 12, 
            flexDirection: 'row',
            marginBottom: 20
        },

        flexRow: {
            flexDirection: 'row'
        }


    });

    return (
        <View style={styles.headerContainer}>
            <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false} contentContainerStyle={styles.contentContainer} style={{}}>
                
                {/* Header */}
                <Header navigation={navigation} />
                
                
                <Text style={{ fontSize: 26, fontWeight: 'bold', margin: 30 }}>
                    Welcome back, {username}!
                </Text>


                {/* Upcoming Lessons */}
                <View style={styles.sectionContainer}>
                    <Text style={styles.heading}>
                        Upcoming Lessons
                    </Text>

                    <View style={{ flexDirection: 'column' }}>
                        <>


                        <CardFactory CardType="UpcomingLesson" users={UpcomingLessons} />


                       










                            {/* {UpcomingLessons.map((currentUser, index) => (
                                currentUser.role !== user.role && (searchValue !== "" ? (currentUser.major.toLowerCase() === searchValue.toLowerCase()) : (true)) ? (
                                    <Pressable key={index} onPress={() => handleUserBoxClick(currentUser)}>
                                        <View style={{
                                            height: 200, width: '100%', backgroundColor: "rgba(245,245,245, 0.4)", borderWidth: 1,
                                            borderColor: '#9E9E9E', borderRadius: windowHeight * 0.0256, marginBottom: windowHeight * 0.032
                                        }}>

                                            <Image source={{ uri: currentUser.coverPicture === "" ? imageURL + "defaultBackground.jpg" : imageURL + 'banner_LSUtemp.jpeg' }}
                                                style={{
                                                    height: windowHeight * 0.12, width: '100%',
                                                    borderTopLeftRadius: windowHeight * 0.0256, borderTopRightRadius: windowHeight * 0.0256
                                                }} />

                                            <View style={{
                                                top: -windowHeight * 0.0512, height: windowHeight * 0.1024, width: windowHeight * 0.1024,
                                                borderRadius: windowHeight * 0.0512, paddingLeft: windowWidth * 0.039
                                            }}>
                                                <Image source={{ uri: currentUser.profilePicture !== "" ? imageURL + "defaultProfilePicture.png" : currentUser.profilePicture }}
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
                                    <View key={index} />
                                )
                            )
                            )} */}
                        </>
                    </View>

                </View>

                {/* My Teachers */}
                <View style={styles.sectionContainer}>
                    <Text style={styles.heading}>
                        My Teachers
                    </Text>
                    <View style={{ flexDirection: 'column' }}>
                        <>
                            {MyTeachers.map((currentUser, index) => (
                                currentUser.role !== user.role && (searchValue !== "" ? (currentUser.major.toLowerCase() === searchValue.toLowerCase()) : (true)) ? (
                                    <Pressable key={index} onPress={() => handleUserBoxClick(currentUser)}>
                                        <View style={{
                                            height: 200, width: '100%', backgroundColor: '#F5F5F5', borderWidth: 1,
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
                </View>


                {/* Suggested Teachers */}
                <View style={styles.sectionContainer}>
                    <Text style={styles.heading}>
                        Suggested Teachers
                    </Text>
                    <View style={{ flexDirection: 'column' }}>
                        <>
                            {SuggestedTeachers.map((currentUser, index) => (
                                currentUser.role !== user.role && (searchValue !== "" ? (currentUser.major.toLowerCase() === searchValue.toLowerCase()) : (true)) ? (
                                    <Pressable key={index} onPress={() => handleUserBoxClick(currentUser)}>
                                        <View style={{
                                            height: 200, width: '100%', backgroundColor: '#F5F5F5', borderWidth: 1,
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
                </View>

            </ScrollView>
        </View>
    )
}