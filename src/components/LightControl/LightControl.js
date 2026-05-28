import React  from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";
import LightControlStyles from "./LightControlStyle";

export default function LightControl({isLightOn, onToggle}){
    return(
        <View style={LightControlStyles.card}>
            <TouchableOpacity onPress={onToggle}>
                <Icon/>
            </TouchableOpacity>
            <Text style={LightControlStyles.label}>{isLightOn? 'Luz Ligada' : 'Luz Apagada'}</Text>
        </View>
    )
}