import {TextInput, Text, View, StyleSheet} from 'react-native'
import {useState} from 'react';

export default function InputText(props) {
    const [input, setInput] = useState("");
    function inputHandler(enteredText) {
        setInput(enteredText);
        console.log(enteredText);
    }
    return (
        <View style={styles.container}>
            <TextInput secureTextEntry={props.isSecure} placeholder={props.name} style={styles.input} onChangeText={inputHandler}></TextInput>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        borderWidth: 0.18,
        borderColor: 'grey',
        borderRadius: 10,
        margin: 10,
        marginLeft: 25,
        marginRight: 25
    },
    input: {
      margin: 6,
      padding: 10,
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 15
    },
    
  });
