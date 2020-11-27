import React from 'react';
import { ImageBackground,StyleSheet, View,Image,Text } from 'react-native';
import Button from '../components/Button';

function WelcomeScreen(props) {
    return (
        <ImageBackground
        blurRadius={2}
        style={styles.backgroound}
        source={require("../assets/Mall.jpg")}
        >
           <View style={styles.logoContainer}>
           <Image
            style={styles.logo}
            source={require("../assets/logo.png")} />
          <Text style={styles.tagline}>Sell what you don't need</Text>  
            </View>
            <View style={styles.buttonsContainer}>
            <Button title='Login'/>
            <Button title="Register" style={styles.button2}/>
            </View>
            


        
  
        </ImageBackground>
    );
}
const styles = StyleSheet.create({
    backgroound:{
        flex:1,
        justifyContent:"flex-end",
        alignItems:"center",
    },
   
    
    
    buttonsContainer:{
padding:20,
width:"100%",

    },
    logo:{
        width:100,
        height:100,
        position:"absolute",
        top:70,

    },
    logoContainer:{
        position:"absolute",
        top:70,
        alignItems:"center",
    },
    tagline:{
        fontSize:25,
        fontWeight:"700",
        paddingVertical:20,
        fontFamily:"Roboto"
    }

})

export default WelcomeScreen;