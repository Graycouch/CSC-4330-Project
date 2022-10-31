import * as React from 'react';
import { useState, useEffect } from 'react';
import { View, Text, Button, Image, TextInput, Pressable, ScrollView, StyleSheet, Dimensions } from 'react-native';
import { useGlobalState, setGlobalState } from '../../../index';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import * as ImagePicker from 'expo-image-picker';

export default function MessageScreen({ navigation }) {
    const [user] = useGlobalState("user");
    const [searchValue] = useGlobalState("searchValue");
    const [username, setUsername] = useState(user.username);

    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;

    const styles = StyleSheet.create({
        contentContainer: {
            paddingVertical: 50,
            alignItems: 'center',
            flexGrow: 1
        },

        horizontalLine1: {
            height: 1,
            width: windowWidth,
            position: 'center',
            backgroundColor: '#E5E5E5',
            top: 10
        },

        horizontalLine2: {
            height: 1,
            width: windowWidth,
            position: 'center',
            backgroundColor: '#E5E5E5',
            top: -25
        },

        horizontalLine3: {
            height: 1,
            width: windowWidth,
            position: 'center',
            backgroundColor: '#E5E5E5',
            top: -45
        }
    });

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#FFFFFF' }}>
            <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false} contentContainerStyle={styles.contentContainer} style={{ backgroundColor: '#FFFFFF' }}>
                <View style={{ flexDirection: 'row', marginBottom: 10, top: -windowHeight * 0.019 }}>
                    <TextInput placeholder="Find a tutor" value={searchValue} onChangeText={newText => setGlobalState("searchValue", newText)}
                        onSubmitEditing={() => navigation.navigate('Search', { screen: 'Search' })}
                        style={{ backgroundColor: '#F1F1F1', height: 40, width: windowWidth * 0.95, borderRadius: 20, paddingLeft: 40, fontSize: 15 }} />
                    <MaterialCommunityIcons name={"magnify"} color={"#9E9E9E"} size={20} style={{ top: windowHeight * 0.0128, position: 'absolute', paddingLeft: 10 }} />
                </View>

                <Text style={{ fontSize: 35, fontWeight: 'bold' }}>
                    Messages
                </Text>

                <Pressable>
                    <View style={styles.horizontalLine1}/>
                        <View style={{ paddingLeft: 5, top: 20 }}>
                            <Image 
                                source={require('../../../assets/abdel.jpg') } 
                                style={{ height: 70, width: 70, borderRadius: 70, borderWidth: 2, borderColor: '#FFFFFF' }}
                            />
                        </View>
                        <View style={{alignItems: 'left', top: -45, paddingLeft: 80, paddingRight: 10 }}>
                            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
                                Abdel Rahman Mansour
                            </Text>
                            <Text style={{ color: 'gray', fontSize: 15, top: 5, paddingRight: 15 }}>
                                Sure! I'd be happy to help you with that.
                                What is a convienent time for you?
                            </Text>
                        </View>
                    <View style={styles.horizontalLine2}/>
                </Pressable>
                <Pressable>
                        <View style={{ paddingLeft: 5, top: -15 }}>
                            <Image 
                                source={require('../../../assets/nash.jpg') } 
                                style={{ height: 70, width: 70, borderRadius: 70, borderWidth: 2, borderColor: '#FFFFFF' }}
                            />
                        </View>
                        <View style={{alignItems: 'left', top: -80, paddingLeft: 80, paddingRight: 10 }}>
                            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
                                Nash
                            </Text>
                            <Text style={{ color: 'gray', fontSize: 15, top: 5, paddingRight: 15 }}>
                                So I left my calculator at home...
                            </Text>
                        </View>
                    <View style={styles.horizontalLine3}/>
                </Pressable>
            </ScrollView>
        </View>
    )
}