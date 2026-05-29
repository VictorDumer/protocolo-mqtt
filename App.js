import { useState,useEffect } from 'react';
import MQTTService from './src/services/mqttService';
import { View, Text,TouchableOpacity } from 'react-native';
import LightControl from './src/components/LightControl/LightControl';
import Gauges from './src/components/Gauge/Gauges';
import StatusModal from './src/components/StatusModal/StatusModal';
import AppStyle from './src/styles/appStyle';
import { loadData, insertData } from './src/services/fetchService';
import History from './src/components/History/History';

const mqtt = new MQTTService();
export default function App() {
  const [isConnected,setIsConnected] = useState(false);
  const [showError, setShowError] = useState(false);
  const [showDialog, setShowDialog] = useState(false);
  const [isLightOn, setIsLightOn] = useState(false);
  const [temp,setTemp] = useState(0);
  const [umid,setUmid] = useState(0);
  const [data,setData] = useState([]);

  const newChange = async (type, value) => {
    const newData = {
      day: new Date().toLocaleDateString('pt-BR'),
      type: type,
      value: value
    };

    await insertData(newData);
    load();
  };

  async function load(){
    const data = await loadData();
    try {
      setData(data);
    } catch (error) {
      console.log(error)
    }
  }


  const mqttConfig={
    host: process.env.EXPO_PUBLIC_MQTT_HOST,
    port: parseInt(process.env.EXPO_PUBLIC_MQTT_PORT),
    path: process.env.EXPO_PUBLIC_MQTT_PATH,
    user: process.env.EXPO_PUBLIC_MQTT_USER,
    pass: process.env.EXPO_PUBLIC_MQTT_PASS,
    clientId: 'RN_APP_' + Math.random(),
  }

  useEffect(()=>{
    startConnection();
    load();
  }, [])

  const startConnection = () => {
    setShowError(false);
    mqtt.connect(
      mqttConfig, (topic,message)=>{
        if(topic === 'casa/temp') {
          setTemp(parseFloat(message))
          newChange('temperatura',message)
        }
        if(topic === 'casa/umid') {
          setUmid(parseFloat(message))
          newChange('umidade',message)

          
        }
        if(topic === 'casa/luz') {
            setIsLightOn(message==='1')
            newChange('luz',message)
        }
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
    <View style={AppStyle.container}>
        <Text style={AppStyle.header}> Smart Home IOT</Text>
        <LightControl isLightOn={isLightOn} onToggle={togglelight} />
        <Gauges temp={temp} umid={umid}/>

        <StatusModal 
        visible={showError}
        onRetry={startConnection}
        onLater={()=> setShowError(false)}
        />

        <TouchableOpacity onPress={()=>setShowDialog(true)} style={AppStyle.btnHistory}>
          <Text style={AppStyle.btnText}> History Button</Text>
        </TouchableOpacity>
        
        <History 
        data={data}
        onClose={()=>setShowDialog(false)}
        visible={showDialog}
        />
    </View>
  );
}

