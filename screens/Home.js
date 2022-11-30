import React from "react";
import { View, Text, Button, StyleSheet, ImageBackground, Image } from "react-native";
import { useNavigation } from '@react-navigation/native';

export default function Home(){
    const navigation = useNavigation();

    return(
        <View style ={styles.container}>
            <Image source={require('../assets/home.png')} style = {{ width: 300, height: 250 }}/>
            <Text style={styles.textStyles}>Tìm kiếm MSSV thông qua mã vạch</Text>
            <Button title="Nhấn để scan" onPress={()=>navigation.navigate('Scan MSSV')} />
        </View>
        
    )
}


const styles = StyleSheet.create({
    container :{
        flex : 1,
        alignItems : 'center',
        justifyContent :'center',
        backgroundColor: 'white',
        
    },
    textStyles: {
        padding: 20,
        color: 'black',
        fontSize: 18,
        fontWeight: 'Medium'
    }
})
