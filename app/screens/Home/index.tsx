import React,{useContext} from 'react'
import { View,ScrollView, Alert,TouchableOpacity } from 'react-native';
import Header from '../../components/Header';
import { styles } from './styles';
import Texts from '../../components/Texts';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { lightBrown} from '../../constants/colors';
import CardItem from './CardItem';
import { MainItems } from '../../mobx/store';
import { status } from '../../constants/const_string';
import { getRandomInt, makeString } from '../../constants/functions';
import { observer } from 'mobx-react-lite';
export default Home =observer((props)=>{
    const [showUploading,setShowUploading]=React.useState(false);
    const [showNextUp,setShowNextUp]=React.useState(false);
    const [showCompleted,setShowCompleted]=React.useState(false);
    const [showUncompleted,setShowUncompleted]=React.useState(false);
    const [uploading,setUploading]=React.useState(false);
    const [now,setNow]=React.useState(null);
    const [startTime,setStartTime] = React.useState(null);
    const intervalRef=React.useRef(null);
    const uploadingTime = React.useRef(null);
    const currentUploadId = React.useRef(null);
    React.useEffect(()=>{
        const timeSpent = now-startTime;
        console.log(timeSpent);
        console.log(currentUploadId.current);
        if(timeSpent>=uploadingTime.current*1000 && currentUploadId.current){
            MainItems.updateStatus(currentUploadId.current,status.completed);
            // currentUploadId.current=null;
            setShowCompleted(true);
            //check if there is any left in next up
            handlePickNextUpload();
               
        }
    },[now])    
    const handlePickNextUpload=()=>{
        const nextUps = MainItems.generalStore.filter((item)=>item.status===status.nextUp);
        if(nextUps.length>0){
            currentUploadId.current=nextUps[0].id;
            uploadingTime.current=nextUps[0].fileSize;
            MainItems.updateStatus(nextUps[0].id,status.uploading);
            intervalRef.current = setInterval(()=>{
                setNow(new Date().getTime());
            },1000) 
        }
        else{
            handleClear()
        }
    }
    const handleClear = () =>{
        clearInterval(intervalRef.current);
        currentUploadId.current=null;
    }
    const handleAddUpload = () =>{
        const fileSize=getRandomInt(10);
        let newItem = {
            id:Math.random(),
            fileName:makeString(10),
            fileSize,
            status:null
        }
        let nextUps = [];
        let currentUploading=[]
        if(MainItems.generalStore.length>0){
            nextUps = MainItems.generalStore.filter((item)=>item.status===status.nextUp);
            currentUploading=MainItems.generalStore.filter((item)=>item.status===status.uploading);

        }
        //check if there is no next ups
        if(currentUploading.length===0){
            setShowUploading(true)
            uploadingTime.current=fileSize;
            currentUploadId.current=newItem.id;
            setStartTime(new Date().getTime());
            newItem.status=status.uploading;
            MainItems.generalStore.push(newItem);
            intervalRef.current = setInterval(()=>{
                setNow(new Date().getTime());
            },1000) 
        }
        else{
            setShowNextUp(true);
            newItem.status = status.nextUp;
            MainItems.generalStore.push(newItem);
            console.log(MainItems.generalStore)
        }
        
    }
    const handleCancel = (newStatus)=>{
        if(newStatus===status.uploading){
            currentUploadId.current=null;
            clearInterval(intervalRef.current);
            MainItems.handleCancel(status.uploading)
            setShowUncompleted(true);
            handlePickNextUpload();
        }
    }
    

   

    return (
        <View style={styles.container}>
            <Header handleAddUpload={handleAddUpload} />
            <ScrollView showsVerticalScrollIndicator={false}>
                {/* uploading */}
                <View>
                    <View style={styles.pageWrapper}>
                        <View style={styles.pageContainer}>
                            <Texts style={styles.levelText}>Uploading</Texts>
                            <View style={styles.pageContainer}>
                                <TouchableOpacity onPress={()=>handleCancel(status.uploading)}>
                                    <Texts style={styles.cancelText}>cancel upload</Texts>
                                </TouchableOpacity>
                                
                                <AntDesign 
                                    name={showUploading?'up':'down'} size={15} 
                                    color={lightBrown} 
                                    onPress={()=>setShowUploading(!showUploading)}
                                />
                            </View>
                        </View>
                        <View style={styles.underLineSection}/>
                        {showUploading && ((
                            <>
                                {
                                    MainItems.generalStore.filter((item)=>item.status===status.uploading).map((item,index)=>(
                                        <CardItem item={item} 
                                        key={index} timeSpent={now-startTime}
                                         multi ={10000/(item.fileSize*1000)} 
                                         setShowUncompleted={setShowUncompleted}/>
                                    ))
                                }
                            </>
                        ))}
                        
                    </View>
                </View>
                {/* Next up */}
                <View>
                    <View style={styles.pageWrapper}>
                        <View style={styles.pageContainer}>
                            <Texts style={styles.levelText}>Next up</Texts>
                            <View style={styles.pageContainer}>
                                <Texts style={styles.cancelText}>cancel all</Texts>
                                <AntDesign 
                                    name={showNextUp?'up':'down'} size={15} 
                                    color={lightBrown} 
                                    onPress={()=>setShowNextUp(!showNextUp)}
                                />
                            </View>
                        </View>
                        <View style={styles.underLineSection}/>
                        {showNextUp && ((
                            <>
                                {
                                    MainItems.generalStore.filter((item)=>item.status===status.nextUp).map((item,index)=>(
                                        <CardItem item={item} key={index} setShowUncompleted={setShowUncompleted}/>
                                    ))
                                }
                            </>
                        ))}
                        
                    </View>
                </View>
                {/* Completed */}
                <View>
                    <View style={styles.pageWrapper}>
                        <View style={styles.pageContainer}>
                            <Texts style={styles.levelText}>Completed</Texts>
                            <View style={styles.pageContainer}>
                                <Texts style={styles.cancelText}>cancel all</Texts>
                                <AntDesign 
                                    name={showCompleted?'up':'down'} size={15} 
                                    color={lightBrown} 
                                    onPress={()=>setShowCompleted(!showCompleted)}
                                />
                            </View>
                        </View>
                        <View style={styles.underLineSection}/>
                        {showCompleted && ((
                            <>
                                {
                                    MainItems.generalStore.filter((item)=>item.status===status.completed).map((item,index)=>(
                                        <CardItem item={item} key={index} setShowUncompleted={setShowUncompleted}/>
                                    ))
                                }
                            </>
                        ))}
                    </View>
                </View>

                {/* Uncompleted */}
                <View>
                    <View style={styles.pageWrapper}>
                        <View style={styles.pageContainer}>
                            <Texts style={styles.levelText}>UnCompleted</Texts>
                            <View style={styles.pageContainer}>
                                <Texts style={styles.cancelText}>cancel all</Texts>
                                <AntDesign 
                                    name={showUncompleted?'up':'down'} size={15} 
                                    color={lightBrown} 
                                    onPress={()=>setShowUncompleted(!showUncompleted)}
                                />
                            </View>
                        </View>
                        <View style={styles.underLineSection}/>
                        {showUncompleted && ((
                            <>
                                {
                                    MainItems.generalStore.filter((item)=>item.status===status.uncompleted).map((item,index)=>(
                                        <CardItem item={item} key={index} setShowUncompleted={setShowUncompleted}/>
                                    ))
                                }
                            </>
                        ))}
                    </View>
                </View>
            </ScrollView>
        </View>
    )

})
