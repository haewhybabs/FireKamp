import { StyleSheet } from "react-native";
import { cardColor, lightBlue, lightTextColor, lineColor, midTextColor, white } from "../../constants/colors";
import { screenWidth } from "../../constants/dimensions";
export const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:white
    },
    pageWrapper:{
        padding:30,
    },
    pageContainer:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    levelText:{
        fontSize:16
    },
    cancelText:{
        paddingRight:5,
        color:lightBlue
    },
    underLineSection:{
        borderBottomWidth:1,
        marginTop:15,
        marginBottom:10,
        borderBottomColor:lineColor
    },
    card:{
        height:100,
        backgroundColor:cardColor,
        borderRadius:10,
        marginTop:10,
        padding:15
    },
    midText:{
        color:midTextColor,
        fontSize:13
    },
    lightText:{
        color:lightTextColor,
        fontSize:10,
    },
    cardMidText:{
        paddingLeft:5
    },
    progressWrapper:{
       
        alignItems:'center',
        paddingRight:screenWidth(5)
    }
})