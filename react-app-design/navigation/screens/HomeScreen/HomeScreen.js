import * as React from 'react';
import { useState, useEffect } from 'react';
import { View, Text, Button, Image, TextInput, Pressable, ScrollView, StyleSheet } from 'react-native';
import { useGlobalState, setGlobalState } from '../../../index';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


import Header from '../../header/header.js';

export default function HomeScreen({ navigation }) {
    const [user] = useGlobalState("user");
    const [searchValue] = useGlobalState("searchValue");


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