import React from "react"
import { FlatList, Modal, View, Text, TouchableOpacity } from "react-native"
import { HistoryStyle } from "./HistoryStyle"

export default function History({visible, onClose, data}){

    return(
        <Modal visible={visible} >
            <View style={HistoryStyle.modalContainer}>
                <View style={HistoryStyle.modalContent}>
                    <FlatList 
                        data={data}
                        keyExtractor={(item) => item.id ? item.id.toString() : Math.random().toString()}
                        renderItem={({item}) => (
                             <View style={HistoryStyle.modalText}>
                                <Text style={HistoryStyle.btnText}>
                                    {item.day} - {item.type}: {item.value}
                                </Text>
                            </View>
                        )}
                    />
                    <TouchableOpacity onPress={()=>onClose()} style={HistoryStyle.btnLater}>
                    <Text style={HistoryStyle.btnText}> Voltar</Text>
                </TouchableOpacity>
                </View>
                
            </View>
        </Modal>
    )
}