import React from 'react'
import { View,StyleSheet} from 'react-native';
import { black, lightBlue, white } from '../../constants/colors';
import { screenHeight, screenWidth } from '../../constants/dimensions';
import Texts from '../Texts';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function index({handleAddUpload}) {
    return (
        <View style={styles.container}>
            <View style={styles.headerWrapper}>
                <View style={styles.rightWrapper}>
                    <Texts style={styles.textStyle}>Manage Files</Texts>
                </View>
                <View style={styles.rightWrapper}> 
                    <AntDesign name="plus" size={25} color={lightBlue} onPress={handleAddUpload}/>
                </View>
            </View>
        </View>
    )
}
const styles =StyleSheet.create({
    container:{
        height:screenHeight(12),
        backgroundColor:white,
        shadowColor: "#EBEBEB",
        shadowOpacity: 1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
        elevation: 2,
    },
    headerWrapper:{
        paddingTop:screenHeight(7),
        paddingLeft:20,
        paddingRight:20,
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'center'
    },
    rightWrapper:{
        marginLeft:'auto'
    },
    textStyle:{
        color:black,
        fontSize:15
    }
})
