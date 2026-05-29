import React from "react";
import { View,Text } from "react-native";
import CircularProgress from "react-native-circular-progress-indicator";
import GaugeStyles from "./GaugesStyles";

export default function Gauges({temp,umid}){
    return(
        <View style={GaugeStyles.row}>
            <View style={GaugeStyles.gaugeBox}>
                <CircularProgress
                value={temp}
                radius={60}
                title={'ºC'}
                titleColor={'#fff'}
                activeStrokeColor={"#E74C3C"}
                inActiveStrokeColor={'#2C3E50'}
                />
                <Text style={GaugeStyles.label}>Temperatura</Text>
            </View>

            <View style={GaugeStyles.gaugeBox}>
                <CircularProgress
                value={umid}
                radius={60}
                title={'%'}
                titleColor={'#fff'}
                activeStrokeColor={"#3498DB"}
                inActiveStrokeColor={'#2C3E50'}
                />
                <Text style={GaugeStyles.label}>Umidade</Text>
            </View>
        </View>
    )
}