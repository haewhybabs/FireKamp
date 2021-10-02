import React from 'react'
import { View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { green, lightBlue, lightBrown, progressDefaultColor, red } from '../../constants/colors';
import * as Progress from 'react-native-progress';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { styles } from './styles';
import Texts from '../../components/Texts';
import { status } from '../../constants/const_string';
import { MainItems } from '../../mobx/store';
interface CardProps{
    item:any,
    timeSpent?:any
    fileSize?:any
    multi?:any,
    setShowUncompleted?:any
  }
export default function CardItem({item,timeSpent,fileSize,multi,setShowUncompleted}:CardProps) {
    
    const timeCalculation= (timeSpent*multi)/10000
    const handleCancel = (id,status) =>{
        MainItems.updateStatus(id,status)
        setShowUncompleted(true);
        
    }
    return (
        <View style={styles.card}>
            {
                item.status !=status.uploading &&((
                    <AntDesign name="close" size={20} style={{marginLeft:'auto'}} onPress={()=>handleCancel(item.id,status.uncompleted)}/>
                ))
            }
            
            <View style={styles.pageContainer}>
                <View style={styles.pageContainer}>
                    <Icon name="file-document" size={40} color={green}/>
                    <View style={styles.cardMidText}>
                        <Texts style={{...styles.midText,paddingBottom:6}}>{item.fileName}</Texts>
                        <Texts style={styles.lightText}>{item.fileSize}mb</Texts>
                    </View>
                </View>
                <View style={styles.progressWrapper}>
                    {
                        item.status===status.uploading && ((
                            <Progress.Circle 
                            size={25} 
                            progress={timeCalculation} 
                            borderColor={progressDefaultColor} 
                            color={lightBlue}
                            />
                        ))
                    }

                    {
                        item.status===status.nextUp && ((
                            <Progress.Circle 
                            size={25} 
                            progress={0.0} 
                            borderColor={progressDefaultColor} 
                            color={lightBlue}
                            />
                        ))
                    }
                    {
                        item.status===status.completed && ((
                            <AntDesign size={20} name="checkcircle" color={green} />
                        ))
                    }
                    {
                        item.status===status.uncompleted && ((
                            <AntDesign size={20} name="checkcircleo" color={red} />
                        ))
                    }
                    <Texts style={{...styles.lightText}}>
                        {item.status===status.completed?'Done':item.status===status.uploading?'Encrypting':
                        item.status===status.nextUp?'Waiting':item.status===status.uncompleted?'Canceled':null}
                    </Texts>
                </View>
            </View>
        </View>
    )
}
