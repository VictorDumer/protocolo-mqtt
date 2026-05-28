import React from "react";
import { StyleSheet } from "react-native";

const AppStyle = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: 'rgba(0,0,0,0.85)',
        padding:20,
        alignItems:'center'
    },
    header:{
        color: '#fff',
        fontSize:24,
        fontWeight:'bold',
        marginTop:40,
        marginBottom:20,
    }
})

export default AppStyle;