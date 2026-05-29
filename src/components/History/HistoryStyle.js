import { StyleSheet } from "react-native";

export const HistoryStyle= StyleSheet.create({
    modalContainer: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.85)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent: {
        backgroundColor: '#222',
        padding: 30,
        borderRadius: 20,
        width: '85%',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#333',
        maxHeight:'60%',
    },
    modalText: {
        marginBottom: 25,
        textAlign: 'center',
        fontSize: 16,
    },
    btnText: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
    },
    btnLater: {
        backgroundColor: '#444',
        padding: 15,
        borderRadius: 12,
        width: '100%',
    },
})