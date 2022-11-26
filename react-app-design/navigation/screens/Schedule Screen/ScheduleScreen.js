import React from 'react';
import Header from '../../header/header.js';
import { View, Text, Button, Image, TextInput, Pressable, ScrollView, StyleSheet, Dimensions } from 'react-native';
import { useState, useEffect } from 'react';
import { useGlobalState, setGlobalState } from '../../../index';
import { CardFactory } from '../../../components/Card/Factory';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';



export default function ScheduleScreen({ navigation }) {
  const [user] = useGlobalState("user");
  const [allUsers] = useGlobalState("allUsers");
  const [searchValue] = useGlobalState("searchValue");
  const TutorSchedule = allUsers.slice(0, 3);

  const debugBorders = false;
  const styles = StyleSheet.create({

    // Overall Container
    schedulePageContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'stretch',
      justifyContent: 'center',
      marginLeft: 10,
      marginRight: 10,
      marginTop: 100
    },

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
    heading: {
      fontSize: 22,
      fontWeight: 'medium',
      borderColor: debugBorders ? 'blue' : '#ffffff',
      borderWidth: debugBorders ? 12 : 0,
      flexDirection: 'row',
      marginBottom: 20
    },

    flexRow: {
      flexDirection: 'row'
    },

  });
  // {Header}
  return (
    <View style={{ backgroundColor: '#ffffff' }}>
      <Header navigation={navigation} />
      <View style={styles.schedulePageContainer}>
        <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false} contentContainerStyle={styles.contentContainer} style={{}}>
          <Text style={{ fontSize: 26, fontWeight: 'bold', margin: 4, marginTop: 20, marginBottom: 20 }}>
            Tutor Schedule {/*{"\n"}{username}*/}
          </Text>
          <View style={styles.sectionContainer}>

            <CardFactory CardType="TutorSchedule" users={TutorSchedule} />
          </View>
        </ScrollView>
      </View>
    </View>


    //how to change role only to tutor or only to student


  )
}