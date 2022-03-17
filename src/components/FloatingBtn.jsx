import { setStatusBarBackgroundColor } from "expo-status-bar";
import React from "react";
import { View,Text,StyleSheet,TouchableOpacity } from "react-native";

export default function FloatingBtn(){
    onPress = () => {
        alert("press!!");
      }    
    return(
        <View>
            <TouchableOpacity
                style={styles.btnWropper}
                onPress={onPress}
            >
                <Text style={styles.btnLabel}>+</Text>
            </TouchableOpacity>            
        </View>
    )
}

const styles =StyleSheet.create({
    btnWropper:{
        width:64,
        height:64,
        borderRadius:32,
        color:"#467FD3",
        backgroundColor:"#356CDA",
        alignItems:"center",
        justifyContent:"center",
        shadowColor:"#000000",
        shadowOffset:{ width:0 , height:8 },
        shadowOpacity:0.25,
        shadowRadius:8,
        elevation:8,
    },
    btnLabel:{
        color:"#fff",
        fontSize:30,
        lineHeight:30,
    },
})