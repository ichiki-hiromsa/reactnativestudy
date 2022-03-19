import React,{ useState } from "react";
import { StyleSheet,View,Text,TextInput } from "react-native";
import FloatingBtn from '../components/FloatingBtn'

export default function CreateTaskScreen(){
    const [task,setTask] = useState("");    
    return(
        <View style={styles.container}>
            <View>
                <TextInput
                    style={styles.textBox}
                    onChangeText={setTask}
                    value={task}
                >
                </TextInput>
            </View>
            <View style={styles.btnPosition}>
                <FloatingBtn>X</FloatingBtn>
            </View>
        </View>
    )
}

const styles =StyleSheet.create({
    container:{
        flex:1,
        marginTop:32,
        backgroundColor:"#333333",
        justifyContent:"center",
    },
    textBox:{
        //marginTop:30,
        //flex:1,
        backgroundColor:"#ffffff",
        borderColor: "black",
        borderWidth: 1,
    },    
    btnPosition:{       
        position:"absolute",
        bottom:30,
        right:30,
    },    
})