import React from "react";
import {View,Text, TouchableOpacity, Modal } from "react-native";
import ModalStyles from "./StatusModalStyle";
import { Button } from "react-native/types_generated/index";

export default function StatusModal({visible,onRetry, onLater}){
    return(
        <Modal visible={visible} transparent animationType="fade">
            <View style={ModalStyles.modalContainer}>
                <View style={ModalStyles.modalContent}>
                    <Text style={ModalStyles.modalText}>
                        Não foi possível conectar ao Broker HiveMQ.
                        Verifique sua conexão e credenciais.
                    </Text>
                    <TouchableOpacity style={ModalStyles.btnRetry}>
                        <Text>Tentar Novamente</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={ModalStyles.btnLater}>
                        <Text style={ModalStyles.btnText}>Tentar mais tarde</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    )
}