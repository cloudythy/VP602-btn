//<ion-icon name="checkmark-outline"></ion-icon>
import {View, Modal, Text, Pressable, StyleSheet} from 'react-native';

export default function SuccessModal(props) {
    return (
        <View style={styles.modalContainer}>
            <Modal
                animationType='fade'
                visible = {props.onVisible}
                transparent={true}
            >
                <View style={styles.modal}>
                    <Text style={styles.text}>Mã số sinh viên: {props.data}</Text>
                    
                </View>
                
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    modalContainer: {
        jusifyContent: "center",
        alignItems: "center",
        flex: 1, 
    },
    modal: {
        marginHorizontal: 40,
        marginTop: 190,
        backgroundColor: 'white',
        borderRadius: 20,
        jusifyContent: "center",
        alignItems: "center",
        borderRadius: 20,
        borderColor: 'white',
        padding: 30,
    },
    text: {
        padding: 10,
        textAlign: 'center',
        fontSize: 20,
		fontWeight: 'bold',
        color: "green"
    },
    buttonContainer: {
        marginTop:10,
		justifyContent: 'space-evenly',
		flexDirection: 'row',
	},
})