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
            marginLeft: 4,
            marginRight: 4
            
        },

        heading : {
            fontSize: 22, 
            fontWeight: 'medium', 
            borderColor: debugBorders ? 'blue' : '#ffffff', 
            borderWidth: debugBorders ? 12 : 0, 
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
                    
                    <Text style={{ fontSize: 26, fontWeight: 'bold', margin: 4, marginTop: 20, marginBottom: 20 }}>
                        Welcome back, {"\n"}{username}!
                    </Text>
                    {/* Upcoming Lessons */}
                    <View style={styles.sectionContainer}>
                        <Text style={styles.heading}>Upcoming Lessons</Text>
                        <CardFactory CardType="UpcomingLesson" users={UpcomingLessons} />
                    </View>

                    {/* My Teachers */}
                    <View style={styles.sectionContainer}>
                        <Text style={styles.heading}>My Teachers</Text>
                        <CardFactory CardType="MyTeachers" users={MyTeachers} />
                    </View>

                    {/* Suggested Teachers */}
                    <View style={styles.sectionContainer}>
                        <Text style={styles.heading}>Suggested Teachers</Text>
                        <CardFactory CardType="SuggestedTeachers" users={SuggestedTeachers} />
                    </View>

                     {/* Scheduled Classes */}
                     <View style={styles.sectionContainer}>
                        <Text style={styles.heading}>Scheduled Classes</Text>
                        <CardFactory CardType="ScheduledClasses" users={SuggestedTeachers} />
                    </View>

                    {/* TODO: These buttons don't have any purpose, in my previuos version I had them navigate to other Pages -Parimal  */}
                    <Button    title='Schedule Classes'
                        color="#5F59F7"
                        onPress={()=> navigation.navigate('Schedule')}
                    />
                    <View style={styles.scheduleClassesButton} />
                    <Button
                        title='Request Classes'
                        color="#5F59F7"
                        onPress={()=> navigation.navigate('Request')}
                    />

                   


                    {/* footer spacing */}
                    
                    <View style={{height: 100}}></View>

                </ScrollView>
            </View>
        </View>
    )
}