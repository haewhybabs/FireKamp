import React from 'react'
import { View, Text,Image,StyleSheet} from 'react-native'
import Texts from '../../components/Texts';
import { white } from '../../constants/colors';
export default function index({navigation,route}) {
    React.useEffect(()=>{
        setTimeout(() => {
            navigation.navigate('AppStack')
        }, 3000);
    })
    return (
        <View style={styles.container}>
            <Image source={require('../../assets/images/logo.png')}/>
        </View>
    )
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:white,
        justifyContent:'center',
        alignItems:'center'
    },
})
