import {Text, View, StyleSheet, Button, Pressable} from 'react-native';
import InputText from '../components/InputText';

export default function Login({navigation}) {
    return(
        <View>
            <View style={styles.loginContainer}>
                <Text style={styles.loginText}>ĐĂNG NHẬP</Text>
            </View>
            
            <InputText name = "Email" isSecure = 'false'/>
            <InputText name = "Mật khẩu" isSecure = 'true'/>
            <Pressable style={styles.activeButton}  onPress={()=>navigation.navigate("Home")}>
				<Text style={styles.activeButtonText}>
					Đăng nhập
				</Text>
			</Pressable>
            <View style={styles.loginContainer}>
                <Text style={styles.forgetPasswordText}>Quên mật khẩu?</Text>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    loginContainer: {
        alignItems: 'center',
        marginTop: 30,
        marginBottom: 20,

    },
    loginText: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    activeButton: {
		backgroundColor: '#264F7B',
		borderRadius: 80,
		borderWidth: 1,
		borderColor: '#264F7B',
        marginTop: 100,
        marginHorizontal: 50,
	},

	activeButtonText: {
		color: 'white',
		paddingVertical: 15,
        paddingHorizontal: 118,
		alignItems: 'center',
		fontSize: 12,
		fontWeight: 'bold',
	},
    forgetPasswordText: {
        fontSize: 12,
        fontWeight: 'bold',
        color:'#264F7B',
    }
}) 