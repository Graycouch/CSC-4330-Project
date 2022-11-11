import * as React from 'react';
import { useState, useEffect } from 'react';
import { View, Text, Button, Image, TextInput, Pressable, ScrollView, StyleSheet, Dimensions } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { useGlobalState, setGlobalState } from '../../../index';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import axios from 'axios';

export default function MessageScreen({ navigation }) {
    const [user] = useGlobalState("user");
    const [allUsers] = useGlobalState("allUsers");
    const [searchValue] = useGlobalState("searchValue");
    const [localhost] = useGlobalState("localhost");
    const [conversations] = useGlobalState("conversations");

    const [chatUser, setChatUser] = useState(null);
    const [replying, setReplying] = useState(false);
    const [conversationUsers, setConversationUsers] = useState([]);

    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;

    const [staticContentURL] = useGlobalState("staticContentURL");
    const imageURL = staticContentURL + '/images/';

    useEffect(() => {
        axios.get(`http://${localhost}:8800/api/conversations/${user._id}`, {
        })
            .then((response) => {
                setGlobalState("conversations", response.data);
            }, (error) => {
                console.log(error);
            });
    }, [])

    useEffect(() => {
        if (conversations.length !== 0) {
            setConversationUsers([]);
            conversations.map((conversation) => (
                setConversationUsers(conversationUsers => [...conversationUsers, allUsers.find(currentUser => currentUser._id === conversation.members[1])])
            ))
        }
    }, [conversations])

    function handleMessageBoxClick(chatUser) {
        setReplying(true);
        setChatUser(chatUser);
    }

    const handleBackButtonClick = (e) => {
        e.preventDefault();
        setReplying(false);
    }

    const styles = StyleSheet.create({
        contentContainer: {
            paddingVertical: windowHeight * 0.064,
            alignItems: 'center',
            flexGrow: 1
        },

        horizontalLine1: {
            height: 1,
            width: windowWidth,
            position: 'absolute',
            backgroundColor: '#E5E5E5',
            top: 150
        },

        horizontalLine2: {
            height: 1,
            width: windowWidth,
            position: 'absolute',
            backgroundColor: '#E5E5E5',
            top: 238
        },

        horizontalLine3: {
            height: 1,
            width: windowWidth,
            position: 'absolute',
            backgroundColor: '#E5E5E5',
            top: 323
        },

        replyPageHorizontalLine1: {
            height: 1,
            width: windowWidth,
            position: 'absolute',
            backgroundColor: '#E5E5E5',
            top: 105
        }
    });

    return (
        <View style={{ backgroundColor: '#FFFFFF', flex: 1 }}>
            {replying ? (
                <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false} contentContainerStyle={styles.contentContainer} style={{ backgroundColor: '#FFFFFF' }}>
                    <View style={{ marginBottom: windowHeight * 0.0128, top: windowHeight * 0.005, height: windowHeight * 0.0512, flexDirection: 'row', left: -windowWidth * 0.13 }}>

                        <View style={{
                            height: windowHeight * 0.06144, width: windowHeight * 0.06144,
                            borderRadius: windowHeight * 0.03072, top: -windowHeight * 0.01, marginRight: windowWidth * 0.02
                        }}>
                            <Image source={{ uri: chatUser.profilePicture === "" ? publicFolder + "defaultProfilePicture.png" : chatUser.profilePicture }}
                                style={{
                                    height: windowHeight * 0.06144, width: windowHeight * 0.06144,
                                    borderRadius: windowHeight * 0.03072
                                }} />
                        </View>

                        <Text style={{ fontSize: 25, fontWeight: '500' }}>
                            {chatUser.username}
                        </Text>
                    </View>

                    <View style={styles.replyPageHorizontalLine1} />

                    <Pressable onPress={handleBackButtonClick}>
                        <MaterialCommunityIcons name={"chevron-left"} color={"#5F59F7"} size={40} style={{ marginLeft: 'auto', marginRight: 'auto', top: -windowHeight * 0.065, left: -windowWidth * 0.42 }} />
                    </Pressable>

                    <View style={{ top: windowHeight * 0.65 }}>
                        <TextInput placeholder="Send Message" style={{
                            backgroundColor: '#F1F1F1', height: windowHeight * 0.0512, width: windowWidth * 0.8,
                            borderRadius: windowHeight * 0.0256, paddingLeft: windowWidth * 0.05, fontSize: 15, left: -windowWidth * 0.07
                        }} />
                        <Pressable backgroundColor={'#5F59F7'} style={{
                            top: -windowHeight * 0.05, left: windowWidth * 0.76, height: windowHeight * 0.0512, width: windowHeight * 0.0512,
                            borderRadius: windowHeight * 0.0512
                        }}>
                            <MaterialCommunityIcons name={"chevron-right"} color={"white"} size={40} />
                        </Pressable>
                    </View>


                    {/* <View style={{ top: -90, right: -40 }}>
                        <Text style={{ backgroundColor: '#5F59F7', height: 78, width: 290, borderRadius: windowHeight * 0.0256, paddingLeft: 15, paddingVertical: 5, fontSize: 18, color: 'white' }}>
                            I need help learning data structures. Would you be able to tutor me?
                        </Text>
                    </View>
                    <View style={{ top: -70, left: -40 }}>
                        <Text style={{ backgroundColor: 'gray', height: 78, width: 290, borderRadius: windowHeight * 0.0256, paddingLeft: 15, paddingRight: 5, paddingVertical: 5, fontSize: 18, color: 'white' }}>
                            Sure! I'd be happy to help you with that. What is a convenient time for you?
                        </Text>
                    </View> */}
                </ScrollView>

            ) : (
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#FFFFFF' }}>
                    <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false} contentContainerStyle={styles.contentContainer} style={{ backgroundColor: '#FFFFFF' }}>

                        <View style={{ flexDirection: 'row', marginBottom: windowHeight * 0.0128, top: -windowHeight * 0.019 }}>
                            <TextInput placeholder="Search" value={searchValue} onChangeText={newText => setGlobalState("searchValue", newText)}
                                onSubmitEditing={() => navigation.navigate('Search', { screen: 'Search' })}
                                style={{ backgroundColor: '#F1F1F1', height: windowHeight * 0.0512, width: windowWidth * 0.95, borderRadius: windowHeight * 0.0256, paddingLeft: windowWidth * 0.104, fontSize: 15 }} />
                            <MaterialCommunityIcons name={"magnify"} color={"#9E9E9E"} size={20} style={{ top: windowHeight * 0.0128, position: 'absolute', paddingLeft: windowWidth * 0.026 }} />
                        </View>

                        <Text style={{ fontSize: 30, fontWeight: 'bold', top: -15 }}>
                            Messages
                        </Text>

                        <View>
                            <>
                                {conversationUsers.map((currentUser, index) => (
                                    <Pressable key={index} onPress={() => handleMessageBoxClick(currentUser)}>
                                        <View style={{
                                            height: windowHeight * 0.15, width: windowWidth, backgroundColor: '#FFFFFF', borderWidth: 0.5,
                                            borderColor: '#9E9E9E'
                                        }}>

                                            <View style={{
                                                top: windowHeight * 0.02, height: windowHeight * 0.1024, width: windowHeight * 0.1024,
                                                borderRadius: windowHeight * 0.0512, paddingLeft: windowWidth * 0.039
                                            }}>
                                                <Image source={{ uri: currentUser.profilePicture === "" ? publicFolder + "defaultProfilePicture.png" : currentUser.profilePicture }}
                                                    style={{
                                                        height: windowHeight * 0.1024, width: windowHeight * 0.1024,
                                                        borderRadius: windowHeight * 0.0512
                                                    }} />
                                            </View>

                                            <View style={{ alignItems: 'flex-start', top: -windowHeight * 0.0896, paddingLeft: windowWidth * 0.286, paddingRight: windowWidth * 0.026 }}>
                                                <Text style={{ fontSize: 20, fontWeight: 'bold', paddingBottom: windowHeight * 0.0064 }}>
                                                    {currentUser.username}
                                                </Text>
                                                <Text style={{ color: 'gray', fontSize: 15 }}>
                                                    Sure! I'd be happy to help you with that.
                                                    What is a convenient time for you?
                                                </Text>
                                            </View>

                                        </View>
                                    </Pressable>
                                ))}
                            </>
                        </View>
                    </ScrollView>
                </View>
            )}
        </View>
    )
}