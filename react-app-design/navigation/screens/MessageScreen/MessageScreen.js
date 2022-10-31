import * as React from 'react';
import { View, Text, Button, Image, TextInput, Pressable, ScrollView, StyleSheet, Dimensions } from 'react-native';
import { useGlobalState, setGlobalState } from '../../../index';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function MessageScreen({ navigation }) {
    const [user] = useGlobalState("user");
    const [searchValue] = useGlobalState("searchValue");

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

                <Text style={{ fontSize: 26, fontWeight: 'bold' }}>
                    Message Screen
                </Text>
            </ScrollView>
        </View>
    )
}