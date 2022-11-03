import { bundleDirectory } from 'expo-file-system';
import { View, Text, Button, Image, ImageBackground, TextInput, Pressable, ScrollView, StyleSheet, Dimensions } from 'react-native';
import { useGlobalState, setGlobalState } from '../../index.js';




const windowWidth = 800;
const windowHeight = 1600;



export function CardFactory(props) {


    switch (props.CardType) {
      case "UpcomingLesson":
        return UpcomingLesson(props.users);
      case "B":
        return <B />;
      case "C":
        return <C />;
      default:
        return <Text>Reload...</Text>;
    }
}


const styles = StyleSheet.create({


    //CardContainer
    cardContainer : {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '100%', 
        borderWidth: 1,
        borderColor: '#9E9E9E', 
        borderRadius: windowHeight * 0.0256, 
        marginBottom: windowHeight * 0.032,
    },

    // ProfilePicture
    profilePicture : {
        height: 100, 
        width: 100,
        borderRadius: 999, 
        borderWidth: 2, 
        borderColor: '#FFFFFF',
        margin: 15
    },

    // ProfileInfoContainer
    profileInfoContainer : {
        textAlign: 'left', 
        fontWeight: '400',
    },


    /// Text 
    blue : {
        color: '#2970FE',
    },

    right : {
        textAlign: 'right'
    },

    top : {
        fontSize: 22, 
        fontWeight: '500',

        margin: 10,
        marginTop: 0,

        lineHeight: 30
    },

    bottom : {
        fontSize: 18 , 

        margin: 10,
        marginBottom: 40,
        marginTop: 0,

        color: 'grey',

        lineHeight: 20        
    }
});



//Container
    //Flex Row
        //ProfilePicture
    //Flex Row
        //FlexColumn
            //Info
        //FlexColum
            //Info


function UpcomingLesson(users) { 
    const [staticContentURL] = useGlobalState("staticContentURL");
    const imageURL = staticContentURL + '/images/';
    return (
    users.map((currentUser, index) => (
            
        <Pressable key={index} onPress={() => handleUserBoxClick(currentUser)}>
            {/* Card Container */}
            <View style={[styles.cardContainer, {backgroundImage: currentUser.coverPicture === "" ? "url("+imageURL+"defaultBackground.jpg)" : "url("+imageURL+'lsuBannerTemp2.jpeg)'}]}>
                {/* BackgroundImage */}                
                <ImageBackground source={{uri: imageURL+'lsuBannerTemp3.jpg'}} resizeMode="stretch" imageStyle={{borderRadius: windowHeight * 0.0256}}>

                {/* ProfilePictureContainer */}
                <View style={{flexDirection: 'row'}}>
                    {/* ProfilePicture */}
                    <Image source={{ uri: currentUser.profilePicture !== "" ? imageURL + "abdel.jpg" : currentUser.profilePicture }}
                        style={styles.profilePicture} />
                </View>

                {/* ProfileInfoContainer */}
                <View style={[styles.profileInfoContainer, { flexDirection: 'row', justifyContent: 'space-between', backgroundColor: "rgba(255,255,255,0)" }]}>
                    {/* Info (Left Column) */}
                    <View style={{ flexDirection: 'column', justifyContent: 'flex-start'}}>
                        {/* Username */}
                        <Text style={styles.userName}>{currentUser.username}</Text>
                        {/* Major */}
                        <Text style={styles.major}>{currentUser.major}</Text>
                    </View>
                    {/* Info (Right Column) */}
                    <View style={{ flexDirection: 'column', justifyContent: 'flex-start' }}>
                        {/* hourlyRate */}
                        <Text style={styles.hourlyRate}> ${currentUser.hourlyRate} (60 min)</Text>
                        {/* LocationInfo */}
                        <Text style={styles.locationInfo}>Thursday 5:00PM</Text>
                    </View>
                </View>
                </ImageBackground>
            </View>
        </Pressable>     
    ))
    );
}
