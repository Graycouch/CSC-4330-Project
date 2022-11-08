import * as React from 'react';
import { useState, useEffect } from 'react';
import { View, Text, Button, Image, TextInput, Pressable, ScrollView, StyleSheet, Dimensions } from 'react-native';
import { useGlobalState, setGlobalState } from '../../../index';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import * as ImagePicker from 'expo-image-picker';

export default function MessageScreen({ navigation }) {
    const [replying, setReplying] = useState(false);
    const [user] = useGlobalState("user");
    const [searchValue] = useGlobalState("searchValue");
    const [username, setUsername] = useState(user.username);

    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;

    const [staticContentURL] = useGlobalState("staticContentURL");
    const imageURL = staticContentURL + '/images/';

    const handleReplyToMessageClick = (e) => {
            e.preventDefault();
            setReplying(true);
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
            backgroundColor: '#5A5A5A',
            top: 105
        },

        replyPageHorizontalLine2: {
            height: 1,
            width: windowWidth,
            position: 'absolute',
            backgroundColor: '#5A5A5A',
            top: 660
        }
    });

    return (
        <View style={{ backgroundColor: '#FFFFFF', flex: 1 }}>
        {replying ? (
              <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false} contentContainerStyle={styles.contentContainer} style={{ backgroundColor: '#FFFFFF' }}>
                  <View style={{ marginBottom: windowHeight * 0.0128, top: windowHeight * 0.005, height: windowHeight * 0.0512 }}>
                       <Text style={{ fontSize: 21, fontWeight: '500' }}>
                             Abdel Mansour
                       </Text>
                  </View>
                  <View style={styles.replyPageHorizontalLine1} />

                  <View style={styles.replyPageHorizontalLine2} />


                  <Pressable onPress={handleBackButtonClick}>
                       <MaterialCommunityIcons name={"chevron-left"} color={"#5F59F7"} size={40} style={{ marginLeft: 'auto', marginRight: 'auto', top: -windowHeight * 0.065, left: -windowWidth * 0.42 }} />
                  </Pressable>

                  <View style={{ flexDirection: 'row', marginBottom: windowHeight * 0.0128, top: windowHeight * 0.67 }}>
                       <TextInput placeholder="Reply" style={{ backgroundColor: '#F1F1F1', height: windowHeight * 0.0512, width: windowWidth * 0.95, borderRadius: windowHeight * 0.0256, paddingLeft: windowWidth * 0.05, fontSize: 15 }} />
                  </View>

                  {/* Start messages sent (currently hardcoded) */}
                  <View style={{ top: -70, right: -40 }}>
                       <Text style={{ backgroundColor: '#5F59F7', height: 78, width: 290, borderRadius: windowHeight * 0.0256, paddingLeft: 15, paddingVertical: 5, fontSize: 18, color: 'white' }}>
                            I need help learning data structures. Would you be able to tutor me?
                       </Text>
                  </View>
                  <View style={{ top: -50, left: -40 }}>
                       <Text style={{ backgroundColor: 'gray', height: 78, width: 290, borderRadius: windowHeight * 0.0256, paddingLeft: 15, paddingRight: 5, paddingVertical: 5, fontSize: 18, color: 'white' }}>
                            Sure! I'd be happy to help you with that. What is a convenient time for you?
                       </Text>
                  </View>
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

                <View style={styles.horizontalLine1} />
                <Pressable onPress = {handleReplyToMessageClick}>
                    <View style={{ paddingLeft: 5, top: 20 }}>
                        <Image
                            source={{uri: imageURL + 'abdel.jpg'}}
                            style={{ height: 70, width: 70, borderRadius: 70, borderWidth: 2, borderColor: '#FFFFFF' }}
                        />
                    </View>
                    <View style={{ alignItems: 'flex-start', top: -50, paddingLeft: 90, paddingRight: 10 }}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
                            Abdel Mansour
                        </Text>
                        <Text style={{ color: 'gray', fontSize: 15, top: -5, paddingRight: 20 }}>
                            Sure! I'd be happy to help you with that.
                            What is a convenient time for you?
                        </Text>
                    </View>
                </Pressable>
                <View style={styles.horizontalLine2} />

                <Pressable>
                    <View style={{ paddingLeft: 5, top: -50 }}>
                        <Image
                            source={{uri: imageURL + 'defaultProfilePicture.png'}}
                            style={{ height: 70, width: 70, borderRadius: 70, borderWidth: 2, borderColor: '#FFFFFF' }}
                        />
                    </View>
                    <View style={{ alignItems: 'flex-start', top: -120, paddingLeft: 90, paddingRight: 10 }}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
                            John Doe
                        </Text>
                        <Text style={{ color: 'gray', fontSize: 15, top: -5 }}>
                            So I really need help with integrals. Are you good at solving them?
                        </Text>
                    </View>
                </Pressable>
                <View style={styles.horizontalLine3} />
            </ScrollView>
        </View>
        )}
        </View>
    )
}