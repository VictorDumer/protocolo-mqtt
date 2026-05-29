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
    },
    btnHistory: {
        backgroundColor: '#444',
        padding: 15,
        borderRadius: 12,
        width: '100%',
        marginTop:'80%'
    },
    btnText: {
        collor: '#fff',
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
    }
})

export default AppStyle;