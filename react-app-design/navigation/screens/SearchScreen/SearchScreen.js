import * as React from 'react';
import { View, Text, Button, Image, TextInput, Pressable, ScrollView, StyleSheet, Dimensions } from 'react-native';
import { useGlobalState, setGlobalState } from '../../../index';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function SearchScreen({ navigation }) {
    const [user] = useGlobalState("user");
    const [allUsers] = useGlobalState("allUsers");
    const [searchValue] = useGlobalState("searchValue");
    const [localhost] = useGlobalState("localhost");
    const publicFolder = `http://${localhost}:8800/images/`;

    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;

    const styles = StyleSheet.create({
        contentContainer: {
            paddingVertical: 50,
            alignItems: 'center',
            flexGrow: 1
        }
    });

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#FFFFFF' }}>
            <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false} contentContainerStyle={styles.contentContainer} style={{ backgroundColor: '#FFFFFF' }}>
                <View style={{ flexDirection: 'row', marginBottom: 10, top: -windowHeight * 0.019 }}>
                    <TextInput placeholder="Search" value={searchValue} onChangeText={newText => setGlobalState("searchValue", newText)}
                        onSubmitEditing={() => navigation.navigate('Search', { screen: 'Search' })}
                        style={{ backgroundColor: '#F1F1F1', height: 40, width: windowWidth * 0.95, borderRadius: 20, paddingLeft: 40, fontSize: 15 }} />
                    <MaterialCommunityIcons name={"magnify"} color={"#9E9E9E"} size={20} style={{ top: windowHeight * 0.0128, position: 'absolute', paddingLeft: 10 }} />
                </View>

                <View>
                    <>
                        {allUsers.map(({ role, username, courses, city, zipCode, hourlyRate, profilePicture, coverPicture }) => (
                            role === user.role ? (
                                <View key={username} />
                            ) : (
                                <Pressable key={username} onPress={() => console.log("Hello")}>
                                    <View style={{
                                        height: windowHeight / 5, width: 0.85 * windowWidth, backgroundColor: '#F5F5F5', borderWidth: 1,
                                        borderColor: '#9E9E9E', borderRadius: 20, marginBottom: 25
                                    }}>

                                        <Image source={{ uri: coverPicture === "" ? publicFolder + "defaultBackground.jpg" : coverPicture }} style={{ height: 50, width: windowWidth * 0.845, borderTopLeftRadius: 20, borderTopRightRadius: 20 }} />

                                        <View style={{ top: -40, height: 80, width: 80, borderRadius: 40, paddingLeft: 15 }}>
                                            <Image source={{ uri: profilePicture === "" ? publicFolder + "defaultProfilePicture.png" : profilePicture }} style={{ height: 80, width: 80, borderRadius: 40, borderWidth: 2, borderColor: '#FFFFFF' }} />
                                        </View>

                                        <View style={{ flexDirection: 'row' }}>
                                            <View>
                                                <Text style={{ top: -windowHeight * 0.05, fontSize: 15, textAlign: 'left', fontWeight: '500', textAlignVertical: 'top', paddingLeft: 15 }}>
                                                    {username}
                                                </Text>
                                                {courses.map((course) => (
                                                    <Text key={course} style={{ top: -windowHeight * 0.05, fontSize: 12, textAlign: 'left', fontWeight: '400', textAlignVertical: 'top', paddingLeft: 15, paddingTop: 10, color: 'gray' }}>
                                                        {course}
                                                    </Text>
                                                ))}
                                            </View>

                                            <Text style={{ position: 'absolute', top: -windowHeight * 0.028, right: windowHeight * 0.025, fontSize: 15, textAlign: 'left', fontWeight: '400', textAlignVertical: 'top', paddingLeft: 15, paddingTop: 10, color: '#2970FE' }}>
                                                ${hourlyRate}/hr
                                            </Text>

                                            <Text style={{ position: 'absolute', top: -windowHeight * 0.06, right: windowHeight * 0.025, fontSize: 12, textAlign: 'left', fontWeight: '400', textAlignVertical: 'top', paddingLeft: 15, paddingTop: 10, color: 'gray' }}>
                                                {city}, {zipCode}
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
        </View>
    )
}