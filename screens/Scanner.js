import React,{useState , useEffect} from "react";
import {Text,View,StyleSheet,Button,Linking, Modal,Alert } from 'react-native';
import {BarCodeScanner } from 'expo-barcode-scanner'; 
import { useNavigation } from '@react-navigation/native'

export default function Scanner(){
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    const navigation = useNavigation();
    
    useEffect(() => {
        const getBarCodeScannerPermissions = async () => {
        const { status } = await BarCodeScanner.requestPermissionsAsync();
        setHasPermission(status === 'granted');
        };
    
        getBarCodeScannerPermissions();
    }, []);
    
    const handleBarCodeScanned = ({ data }) => {
        setScanned(true);
        Alert.alert(
            `Kết quả`, 
            (`Không tìm thấy dữ liệu` && (data == null)) || `MSSV là ${data}`, 
            [
                { text: 'OK', onPress: () => navigation.navigate('Trang chủ') },
                { text: 'Tiếp tục scan', onPress: () => setScanned(false) }
            ]
        )
    };

    
    if (hasPermission === null) {
    return <Text>Cấp quyền camera cho ứng dụng</Text>;
    }
    if (hasPermission === false) {
    return <Text>Không có quyền truy cập camera</Text>;
    }

    return (
    <View style={styles.container}>
        <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
        />
    </View>
    ); 
}

const styles = StyleSheet.create({
    container:{
        flex : 1,
        flexDirection : 'column',
        justifyContent :'center'
    }
})