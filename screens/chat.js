import React from 'react'

import {View,Text,StyleSheet,TextInput,TouchableOpcity,Image} from 'react-native'

export default class Chat extends React.Component{
   
    render(){
        return(
            
            <View style={styles.container}>
                <View style={styles.circle}>
                    
                </View>
            </View>
        );
    }
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#F4FSF7"
    },
    circle:{
        width:500,
        height:500,
        borderRadius:500/2,
        backgroundColor:"#FFF",
        position:"absolute",
        left: -120,
        top:-20,
        
    }
})