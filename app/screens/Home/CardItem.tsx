import React from 'react'
import { View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { green, lightBlue, lightBrown, progressDefaultColor } from '../../constants/colors';
import * as Progress from 'react-native-progress';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { styles } from './styles';
import Texts from '../../components/Texts';
export default function CardItem() {
    return (
        <View style={styles.card}>
            <AntDesign name="close" size={20} style={{marginLeft:'auto'}}/>
            <View style={styles.pageContainer}>
                <View style={styles.pageContainer}>
                    <Icon name="file-document" size={40} color={green}/>
                    <View style={styles.cardMidText}>
                        <Texts style={{...styles.midText,paddingBottom:6}}>Birthday 2020.png</Texts>
                        <Texts style={styles.lightText}>2mb</Texts>
                    </View>
                </View>
                <View style={styles.progressWrapper}>
                    <Progress.Circle 
                    size={25} 
                    progress={0.4} 
                    borderColor={progressDefaultColor} 
                    color={lightBlue}
                    />
                    <Texts style={{...styles.lightText}}>Encrypting</Texts>
                </View>
            </View>
        </View>
    )
}
