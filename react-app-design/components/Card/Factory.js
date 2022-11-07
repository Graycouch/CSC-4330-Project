import { bundleDirectory } from 'expo-file-system';
import { View, Text, Button, Image, ImageBackground, TextInput, Pressable, ScrollView, StyleSheet, Dimensions } from 'react-native';
import { useGlobalState, setGlobalState } from '../../index.js';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';



const windowWidth = 800;
const windowHeight = 1600;




function renderSwitch(cardType, currentUser) {
    switch (cardType) {
      case "UpcomingLesson":
        return upcomingLesson(currentUser);
      case "MyTeachers":
        return myTeachers(currentUser);
      case "SuggestedTeachers":
        return suggestedTeachers(currentUser);
      default:
        return <Text>card factory error...</Text>;
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
        borderRadius: 20, 
        marginBottom: 30,
    },

    // ProfilePicture
    profilePicture : {
        height: 80, 
        width: 80,
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
        color: '#2970FE'
    },

    right : {
        textAlign: 'right',
        marginRight: 20,
        marginleft: 0
    },

    top : {
        fontSize: 18, 
        fontWeight: '500',

        
        marginTop: 0,
        marginLeft: 20,
        marginBottom: 10,

        lineHeight: 20
    },

    bottom : {
        fontSize: 14, 

        marginTop: 0,
        marginLeft: 20,
        marginBottom: 20,

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



export function CardFactory(props) {
    const [staticContentURL] = useGlobalState("staticContentURL");
    const imageURL = staticContentURL + '/images/';
    return (
    props.users.map((currentUser, index) => (
            
        <Pressable key={index}>
            {/* Card Container */}
            <View style={[styles.cardContainer, {backgroundImage: currentUser.coverPicture === "" ? "url("+imageURL+"defaultBackground.jpg)" : "url("+imageURL+'lsuBannerTemp2.jpeg)'}]}>
                {/* BackgroundImage */}                
                <ImageBackground source={{uri: imageURL+'lsuBannerTemp3.jpg'}} resizeMode="stretch" imageStyle={{borderRadius: 18}}>

                {/* ProfilePictureContainer */}
                <View style={{flexDirection: 'row'}}>
                    {/* ProfilePicture */}
                    <Image source={{ uri: currentUser.profilePicture !== "" ? imageURL + "abdel.jpg" : currentUser.profilePicture }}
                        style={styles.profilePicture} />
                </View>


                {/* Text part of card that changes based on type */}
                {renderSwitch(props.CardType, currentUser)}


                </ImageBackground>
            </View>
        </Pressable>     
    ))
    );
}


function upcomingLesson(currentUser) {
    return (
                <View style={[styles.profileInfoContainer, { flexDirection: 'row', justifyContent: 'space-between', backgroundColor: "rgba(255,255,255,0)" }]}>
                    {/* Info (Left Column) */}
                    <View style={{ flexDirection: 'column', justifyContent: 'flex-start'}}>
                        {/* Username */}
                        <Text style={styles.top}>{currentUser.username}</Text>
                        {/* Major */}
                        <Text style={styles.bottom}>{currentUser.major}</Text>
                    </View>
                    {/* Info (Right Column) */}
                    <View style={{ flexDirection: 'column', justifyContent: 'flex-start' }}>
                        {/* hourlyRate */}
                        <Text style={[styles.blue, styles.top, styles.right]}> ${currentUser.hourlyRate}/hr</Text>
                        {/* LocationInfo */}
                        <Text style={[styles.locationInfo, styles.bottom, styles.right]}>Thursday 5:00PM</Text>
                    </View>
                </View>
    );
}


function myTeachers(currentUser) {
    return (
                <View style={[styles.profileInfoContainer, { flexDirection: 'row', justifyContent: 'space-between', backgroundColor: "rgba(255,255,255,0)" }]}>
                    {/* Info (Left Column) */}
                    <View style={{ flexDirection: 'column', justifyContent: 'flex-start'}}>
                        {/* Username */}
                        <Text style={styles.top}>{currentUser.username}</Text>
                        {/* Major */}
                        <Text style={styles.bottom}>{currentUser.major}</Text>
                    </View>
                    {/* Info (Right Column) */}
                    <View style={{ flexDirection: 'column', justifyContent: 'flex-start' }}>
                        {/* hourlyRate */}
                        <Text style={[styles.blue, styles.top, styles.right]}> ${currentUser.hourlyRate}/hr</Text>
                        {/* LocationInfo */}
                        <Text style={[styles.locationInfo, styles.bottom, styles.right]}>
                        <MaterialCommunityIcons name={"calendar-clock-outline"} color={"#9E9E9E"} size={20} style={{}} />
                             &nbsp;Schedule
                        </Text>
                        
                    </View>
                </View>
    );
}

function suggestedTeachers(currentUser) {
    return (
                <View style={[styles.profileInfoContainer, { flexDirection: 'row', justifyContent: 'space-between', backgroundColor: "rgba(255,255,255,0)" }]}>
                    {/* Info (Left Column) */}
                    <View style={{ flexDirection: 'column', justifyContent: 'flex-start'}}>
                        {/* Username */}
                        <Text style={styles.top}>{currentUser.username}</Text>
                        {/* Major */}
                        <Text style={styles.bottom}>{currentUser.major}</Text>
                    </View>
                    {/* Info (Right Column) */}
                    <View style={{ flexDirection: 'column', justifyContent: 'flex-start' }}>
                        {/* hourlyRate */}
                        <Text style={[styles.blue, styles.top, styles.right]}> ${currentUser.hourlyRate}/hr</Text>
                        {/* LocationInfo */}
                        <Text style={[styles.locationInfo, styles.bottom, styles.right]}>
                        <MaterialCommunityIcons name={"card-account-details-outline"} color={"#9E9E9E"} size={20} style={{}} />
                             &nbsp;Check Profile
                        </Text>
                    </View>
                </View>
    );
}