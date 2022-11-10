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
        homepageContainer: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'stretch',
            justifyContent: 'center',
            marginLeft: 10,
            marginRight: 10,
            marginTop: 100
        },

        // Inner Container for each Section
        sectionContainer: {
            flexDirection: 'column',
            alignContent: 'stretch',
            alignItems: 'stretch',
            justifyContent: "flex-start",
            borderColor: debugBorders ? 'blue' : '#ffffff',
            borderWidth: 2,
            marginTop: 10,
            marginBottom: 10,
            
        },

        heading : {
            fontSize: 22, 
            fontWeight: 'medium', 
            borderColor: debugBorders ? 'blue' : '#ffffff', 
            borderWidth: 12, 
            flexDirection: 'row',
            marginBottom: 20
        },

        flexRow: {
            flexDirection: 'row'
        }


    });

    return (
        <View style={{backgroundColor: '#ffffff'}}>
            {/* Header */}
            <Header navigation={navigation} />

            <View style={styles.homepageContainer}>
                <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false} contentContainerStyle={styles.contentContainer} style={{}}>
                    
                    <Text style={{ fontSize: 26, fontWeight: 'bold', margin: 18, marginTop: 18 }}>
                        Welcome back, {"\n"}{username}!
                    </Text>
                    {/* Upcoming Lessons */}
                    <View style={styles.sectionContainer}>
                        <Text style={styles.heading}>Upcoming Lessons</Text>
                        <View style={{ flexDirection: 'column', marginLeft: 18, marginRight: 18 }}>
                            <CardFactory CardType="UpcomingLesson" users={UpcomingLessons} />
                        </View>
                    </View>

                    {/* My Teachers */}
                    <View style={styles.sectionContainer}>
                        <Text style={styles.heading}>My Teachers</Text>
                        <View style={{ flexDirection: 'column', marginLeft: 18, marginRight: 18 }}>
                            <CardFactory CardType="MyTeachers" users={MyTeachers} />
                        </View>
                    </View>

                    {/* Suggested Teachers */}
                    <View style={styles.sectionContainer}>
                        <Text style={styles.heading}>Suggested Teachers</Text>
                        <View style={{ flexDirection: 'column', marginLeft: 18, marginRight: 18 }}>
                            <CardFactory CardType="SuggestedTeachers" users={SuggestedTeachers} />
                        </View>
                    </View>

                    {/* footer spacing */}
                    <View style={{height: 200}}></View>

                </ScrollView>
            </View>
        </View>
    )
}