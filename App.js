import { useState,useEffect } from 'react';
import MQTTService from './src/services/mqttService';
import { View, Text } from 'react-native';
import LightControl from './src/components/LightControl/LightControl';
import Gauges from './src/components/Gauge/Gauges';
import StatusModal from './src/components/StatusModal/StatusModal';

const mqtt = new MQTTService();
export default function App() {
  const [isConnected,setIsConnected] = useState(false);
  const [showError, setShowError] = useState(false);
  const [isLightOn, setisLightOn] = useState(false);
  const [temp,setTemp] = useState(0);
  const [umid,setUmid]= useState(0);

  const mqttConfig={
    host: process.env.EXPO_PUBLIC_MQTT_HOST,
    port: parseInt(process.env.EXPO_PUBLIC_MQTT_PORT),
    path: process.env.EXPO_PUBLIC_MQTT_PATH,
    user: process.env.EXPO_PUBLIC_MQTT_USER,
    pass: process.env.EXPO_PUBLIC_MQTT_PASS,
    clientId: 'RN_APP_' + Math.random(),
  }
  console.log(mqttConfig)

  useEffect(()=>{
    startConnection();
  }, [])

  const startConnection = () => {
    setShowError(false);
    mqtt.connect(
      mqttConfig, (topic,message)=>{
        if(topic === 'casa/temp') setTemp(parseFloat(message))
        if(topic === 'casa/umid') setUmid(parseFloat(message))
        if(topic === 'casa/luz') setisLightOn(message==='1')
      },
      ()=>{
        setIsConnected(true)
        mqtt.subscribe('casa/temp')
        mqtt.subscribe('casa/umid')
        mqtt.subscribe('casa/luz')
    },(err) =>{
      setIsConnected(false)
      setShowError(true)
    }
    )
  }

  const togglelight = () => {
    const newState = isLightOn ? "0" : "1"
    mqtt.publish('casa/luz', newState)
  }

  return (
    <View>
        <Text> Smart Home IOT</Text>
        <LightControl isLightOn={isLightOn} onToggle={togglelight}/>
        <Gauges temp={temp} umid={umid}/>

        <StatusModal 
        visible={showError}
        onRetry={startConnection}
        onLater={()=> setShowError(false)}
        />
    </View>
  );
}

