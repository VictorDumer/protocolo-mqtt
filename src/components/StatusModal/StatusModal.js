import React from "react";
import {View, Text, TouchableOpacity, Modal, Button } from "react-native";
import ModalStyles from "./StatusModalStyle";

export default function StatusModal({visible, onRetry, onLater}){
    return(
        <Modal visible={visible} transparent animationType="fade">
            <View style={ModalStyles.modalContainer}>
                <View style={ModalStyles.modalContent}>
                    <Text style={ModalStyles.modalText}>
                        Não foi possível conectar ao Broker HiveMQ.
                        Verifique sua conexão e credenciais.
                    </Text>
                    <TouchableOpacity style={ModalStyles.btnRetry} onPress={onRetry}>
                        <Text style={ModalStyles.btnText}>Tentar Novamente</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={ModalStyles.btnLater} onPress={onLater}>
                        <Text style={ModalStyles.btnText}>Tentar mais tarde</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    )
}