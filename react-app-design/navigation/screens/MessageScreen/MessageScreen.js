import * as React from 'react';
import { useState, useEffect } from 'react';
import { View, Text, Button, Image, TextInput, Pressable, ScrollView, StyleSheet, Dimensions } from 'react-native';
import { useGlobalState, setGlobalState } from '../../../index';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import * as ImagePicker from 'expo-image-picker';

export default function MessageScreen({ navigation }) {
    const [replying, setEditing] = useState(false);
    const [user] = useGlobalState("user");
    const [searchValue] = useGlobalState("searchValue");
    const [username, setUsername] = useState(user.username);

    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;

    const [staticContentURL] = useGlobalState("staticContentURL");
    const imageURL = staticContentURL + '/images/';

    const styles = StyleSheet.create({
        contentContainer: {
            paddingVertical: 50,
            alignItems: 'center',
            flexGrow: 1
        },

        horizontalLine1: {
            height: 1,
            width: windowWidth,
            position: 'absolute',
            backgroundColor: '#E5E5E5',
            top: 10
        },

        horizontalLine2: {
            height: 1,
            width: windowWidth,
            position: 'absolute',
            backgroundColor: '#E5E5E5',
            top: 95
        },

        horizontalLine3: {
            height: 1,
            width: windowWidth,
            position: 'absolute',
            backgroundColor: '#E5E5E5',
            top: 45
        }
    });

    return (
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

                <Pressable>
                    <View style={styles.horizontalLine1} />
                    <View style={{ paddingLeft: 5, top: 20 }}>
                        <Image
                            source={{uri: imageURL + 'abdel.jpg'}}
                            style={{ height: 70, width: 70, borderRadius: 70, borderWidth: 2, borderColor: '#FFFFFF' }}
                        />
                    </View>
                    <View style={{ alignItems: 'flex-start', top: -50, paddingLeft: 90, paddingRight: 10 }}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
                            Abdel Rahman Mansour
                        </Text>
                        <Text style={{ color: 'gray', fontSize: 15, top: -5, paddingRight: 15 }}>
                            Sure! I'd be happy to help you with that.
                            What is a convienent time for you?
                        </Text>
                    </View>
                    <View style={styles.horizontalLine2} />
                </Pressable>
                <Pressable>
                    <View style={{ paddingLeft: 5, top: -30 }}>
                        <Image
                            source={{uri: imageURL + 'nash.jpg'}}
                            style={{ height: 70, width: 70, borderRadius: 70, borderWidth: 2, borderColor: '#FFFFFF' }}
                        />
                    </View>
                    <View style={{ alignItems: 'flex-start', top: -100, paddingLeft: 90, paddingRight: 60 }}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
                            Nash
                        </Text>
                        <Text style={{ color: 'gray', fontSize: 15, top: -5, paddingRight: 15 }}>
                            So I left my calculator at home...
                        </Text>
                    </View>
                    <View style={styles.horizontalLine3} />
                </Pressable>
            </ScrollView>
        </View>
    )
}