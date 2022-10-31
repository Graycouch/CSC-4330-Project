import * as React from 'react';
import { View, Text, Button, Image, TextInput, Pressable, ScrollView, StyleSheet, Dimensions } from 'react-native';
import { useState, useEffect } from 'react';
import { useGlobalState, setGlobalState } from '../../../index';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


import Header from '../../header/header.js';

export default function HomeScreen({ navigation }) {
    const [user] = useGlobalState("user");
    const [searchValue] = useGlobalState("searchValue");

    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;

    const [username, setUsername] = useState(user.username);


    const styles = StyleSheet.create({

        // Overall Container
        headerContainer: {
            paddingVertical: 50, //apprently we need this to keep the header in the safe-space
            flex: 1,
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#FFFFFF',
        },

        // Inner Container for each Section
        sectionContainer: {
            flexDirection: 'row',
            alignContent: 'flex-start',
            justifyContent: "flex-start",
            borderColor: 'blue',
            borderWidth: 2,
            width: '100%',
            marginTop: 30,
            marginBottom: 30
        }


    });

    return (
        <View style={styles.headerContainer}>
            <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false} contentContainerStyle={styles.contentContainer} style={{ backgroundColor: '#FFFFFF' }}>
                <View style={{ flexDirection: 'row', marginBottom: 10, top: -15 }}>
                    <TextInput placeholder="Search" value={searchValue} onChangeText={newText => setGlobalState("searchValue", newText)}
                        onSubmitEditing={() => navigation.navigate('Search', { screen: 'Search' })}
                        style={{ backgroundColor: '#F1F1F1', height: 40, width: windowWidth * 0.95, borderRadius: 20, paddingLeft: 40, fontSize: 15 }} />
                    <MaterialCommunityIcons name={"magnify"} color={"#9E9E9E"} size={20} style={{ top: 10, position: 'absolute', paddingLeft: 10 }} />
                </View>

                <Header navigation={navigation} />



                <Text style={{ fontSize: 26, fontWeight: 'bold', margin: 30 }}>
                    Welcome back, {username}!
                </Text>


                {/* Upcoming Lessons */}
                <View style={styles.sectionContainer}>
                    <Text style={{ fontSize: 22, fontWeight: 'medium', borderColor: 'blue', borderWidth: 12 }}>
                        Upcoming Lessons
                    </Text>
                </View>

                {/* My Teachers */}
                <View style={styles.sectionContainer}>
                    <Text style={{ fontSize: 22, fontWeight: 'medium', borderColor: 'blue', borderWidth: 12 }}>
                        My Teachers
                    </Text>
                </View>


                {/* Suggested Teachers */}
                <View style={styles.sectionContainer}>
                    <Text style={{ fontSize: 22, fontWeight: 'medium', borderColor: 'blue', borderWidth: 12 }}>
                        Suggested Teachers
                    </Text>
                </View>

            </ScrollView>
        </View>
    )
}