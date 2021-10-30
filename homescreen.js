import React,{Component} from "react";
import { Text, View , StyleSheet , SafeAreaView , TouchableOpacity , Platform , StatusBar ,ImageBackground , Image} from "react-native";

export default class HomeScreen extends Component{
    render(){
        return( 
            <View style={
                styles.container
            }>
                <SafeAreaView style={styles.drawItSafeArea}>

                </SafeAreaView>
                <ImageBackground source={require('../assets/bg_updates.jpg')} style={styles.backgroundImage}></ImageBackground>
                <View style={styles.titleBar}>
               <Text style={styles.titleText}>
                ISS TRACER APP 
               </Text>
            </View>
            <TouchableOpacity style={
                styles.rootCard
            }onPress={()=>this.props.navigation.navigate("IssLocation")}> 
                <Text style={styles.rootText}>ISS LOCATION</Text> 
                <Text style={styles.knowMore}>{"knowMore--->"}</Text>
                <Text style={styles.bgDigit}>1</Text>
                <Image source={require("../assets/iss_icon.png")} style={styles.iconImage}></Image>
            </TouchableOpacity>
            <TouchableOpacity style={styles.rootCard}onPress={()=>this.props.navigation.navigate("Meteors")}><Text style={styles.rootText}>METEORS</Text>
            <Text style={styles.knowMore}>{"knowMore--->"}</Text>
            <Text style={styles.bgDigit}>2</Text>
            <Image source={require("../assets/meteor_icon.png")}></Image>
            </TouchableOpacity>
            </View>
        )

    }
}
const styles=StyleSheet.create({
    container:{flex:1
            
    },
    drawItSafeArea:{
        marginTop:Platform.OS==="android"?
        StatusBar.currentHeight:0,

    },
    titleBar:{
        flex:0.15,
        justifyContent:'center',
        alignItems:'center',
    },
    rootCard:{
        flex:0.25,
        marginLeft:50,
        marginRight:50,
        marginTop:50,
        borderRadius:30,
        backgroundColor:"white",
        borderWidth:2,
    },
    titleText:{
        fontSize:40,
        fontWeight:"bold",
        color:"white",
    },
    rootText:{
        fontSize:35,
        fontWeight:"bold",
        color:"black",
        marginTop:75,
        paddingLeft:30,
    },
    backgroundImage:{
        flex:1,
        resizeMode:"cover",
    },
    knowMore:{
        paddingLeft:30,
        color:"red",
        fontSize:15,
    },
    bgDigit:{
        position:"absolute",
        color:"rgba(183,183,183,0.5)"  ,
        fontSize:150,
        right:20,
        bottom:-15,
        zIndex:-1,
  },
  iconImage:{
      position:"absolute",
      height:200,
      width:200,
      resizeMode:"contain",
      right:20,
      top:-80,
  }
})