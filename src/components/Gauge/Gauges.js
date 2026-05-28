import React from "react";
import { View,Text } from "react-native";
import CircularProgress from "react-native-circular-progress-indicator";

export default function Gauges({temp,hum}){
    return(
        <View>
            <View>
                <CircularProgress
                value={temp}
                radius={60}
                title={'C'}
                titleColor={'#fff'}
                activeStrokeColor={"#E74C3C"}
                inActiveStrokeColor={'#2C3E50'}
                />
                <Text>Temperatura</Text>
            </View>

            <View>
                <CircularProgress
                value={temp}
                radius={60}
                title={'%'}
                titleColor={'#fff'}
                activeStrokeColor={"#3498DB"}
                inActiveStrokeColor={'#2C3E50'}
                />
                <Text>Umidade</Text>
            </View>
        </View>
    )
}