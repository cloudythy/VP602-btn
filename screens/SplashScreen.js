import React from 'react';
import { View, Text , Image, Button} from 'react-native';

class SplashScreen extends React.Component {
  performTimeConsumingTask = async() => {
    return new Promise((resolve) =>
      setTimeout(
        () => { resolve('result') },
        2000
      )
    )
  }
  async componentDidMount() {
    const data = await this.performTimeConsumingTask();
    if (data !== null) {
      this.props.navigation.navigate('Trang chủ');
    }
  }
  render() {
    return (
      <View style={styles.viewStyles}>
        <Image source={require('../assets/welcome.png')} style = {{ width: 200, height: 150 }}/>
        <Text style={styles.textStyles}>
          Một sản phẩm của VP602
        </Text>
        <Button title="Khám phá ngay!" onPress={()=>this.props.navigation.navigate('Trang chủ')} />
      </View>
    );
  }
}
const styles = {
  viewStyles: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  textStyles: {
    padding: 20,
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold'
  }
}
export default SplashScreen;