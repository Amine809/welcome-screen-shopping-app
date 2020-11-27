import React from 'react';
import { Image,StyleSheet,View } from 'react-native';

function ViewImageScreen(props) {
    return (
        <View style={styles.container}>
              <View style={styles.CloseIcon}></View>
              <View style={styles.DeleteeIcon}></View>
        <Image
        resizeMode="contain"
       style={styles.image}
        
        source={require("../assets/chair1.jpg")}/>
            </View>
        
    );
};
const styles = StyleSheet.create({
    CloseIcon:{
width:50,
height:50,
backgroundColor:"#fc5c65",
position:"absolute",
top:40,
left:30,

    },
    container:{
backgroundColor:"black",
flex:1
    },
    DeleteeIcon :{
        width:50,
        height:50,
        backgroundColor:"green",
        position:"absolute",
        top:40,
        right:30,
        
    },
    image:{
        width:"100%",
        height:"100%"
    }
})
export default ViewImageScreen;