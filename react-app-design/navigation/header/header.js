import * as React from 'react';
import { View, Text, Button, Image, TextInput, Pressable, ScrollView, StyleSheet, Dimensions } from 'react-native';
import { useGlobalState, setGlobalState } from '../../index';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


export default function Header({ navigation }) {
    const [searchValue] = useGlobalState("searchValue");

    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;

    //TODO
    //const [profilePicture, setProfilePicture] = useState(user.profilePicture);




    const styles = StyleSheet.create({

        // Overall Header Container
        Container: {
            flexGrow: 1,
            maxHeight: 120,
            // // border for debugging flex
            // border: "solid",
            // borderColor: "blue",
            // borderWidth: 1
        },

        // 
        logoProfileContainer: {
            // // border for debugging flex
            // border: "solid",
            // borderColor: "blue",
            // borderWidth: 1,
            backgroundColor: "#FFFFFF",
            flexDirection: "row",
            justifyContent: "space-between"
        }
    });

    return (
        <View style={styles.Container}>

            {/* Top Bar */}
            <View style={styles.logoProfileContainer}>
                {/* Logo */}
                <Image
                    source={require('../../assets/logo2.png')}
                    style={{ height: 60, width: 100, resizeMode: "contain" }}
                    onPress={() =>
                        navigation.navigate('Home')
                    }
                />

                {/* User Profile Picture */}
                <Pressable
                    onPress={() =>
                        navigation.navigate('Profile')
                    }
                >
                    <Image
                        source={require('../../assets/abdel.jpg')}
                        style={{ height: 60, width: 60, borderRadius: 60, borderWidth: 3, borderColor: '#FFFFFF' }}
                    />
                </Pressable>
            </View>


            {/* Search Bar */}
            <View style={{ flexDirection: 'row', marginBottom: 10, top: -windowHeight * 0.019 }}>
                <TextInput placeholder="Search" value={searchValue} onChangeText={newText => setGlobalState("searchValue", newText)}
                    onSubmitEditing={() => navigation.navigate('Search', { screen: 'Search' })}
                    style={{ backgroundColor: '#F1F1F1', height: 40, width: windowWidth * 0.95, borderRadius: 20, paddingLeft: 40, fontSize: 15 }} />
                <MaterialCommunityIcons name={"magnify"} color={"#9E9E9E"} size={20} style={{ top: windowHeight * 0.0128, position: 'absolute', paddingLeft: 10 }} />
            </View>



        </View>
    )
}