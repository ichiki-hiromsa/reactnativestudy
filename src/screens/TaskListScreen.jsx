import React from "react";
import { StyleSheet,View,Text } from "react-native";
import FloatingBtn from '../components/FloatingBtn'

export default function TaskListScreen(){
    return(
        <View style={styles.container}>
            <Text style={styles.taskLabel}>
                テキスト1
            </Text>
            <Text style={styles.textLbel}>
                テキスト2
            </Text>
            <Text>
                テキスト3
            </Text>
            <View style={styles.blusBtnPosition}>
                <FloatingBtn />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#DBB381",
        // flexDirection:"row",
        marginTop:32,
    },
    taskLabel:{
        fontSize:32,
        color:"#ffffff",
    },
    important:{
        color:"#dddddd",
        fontWeight:"bold",
    },
    blusBtnPosition:{       
        position:"absolute",
        bottom:30,
        right:30,
    },
    textLbel:{
        paddingVertical:16,
    }
})