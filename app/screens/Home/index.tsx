import React from 'react'
import { View, Text, processColor, ScrollView } from 'react-native';
import Header from '../../components/Header';
import { styles } from './styles';
import Texts from '../../components/Texts';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { lightBrown} from '../../constants/colors';
import CardItem from './CardItem';
export default function index() {
    const [showUploading,setShowUploading]=React.useState(false);
    const [showNextUp,setShowNextUp]=React.useState(false);
    const [showCompleted,setShowCompleted]=React.useState(false);
    const [showUncompleted,setShowUncompleted]=React.useState(false);

    return (
        <View style={styles.container}>
            <Header />
            <ScrollView showsVerticalScrollIndicator={false}>
                {/* uploading */}
                <View>
                    <View style={styles.pageWrapper}>
                        <View style={styles.pageContainer}>
                            <Texts style={styles.levelText}>Uploading</Texts>
                            <View style={styles.pageContainer}>
                                <Texts style={styles.cancelText}>cancel uploads</Texts>
                                <AntDesign name="up" size={15} color={lightBrown}/>
                            </View>
                        </View>
                        <View style={styles.underLineSection}/>
                        {showUploading && ((
                            <CardItem />
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
                                <AntDesign name="up" size={15} color={lightBrown}/>
                            </View>
                        </View>
                        <View style={styles.underLineSection}/>
                        {showNextUp && ((
                            <>
                                <CardItem />
                                <CardItem />
                                <CardItem />
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
                                <AntDesign name="up" size={15} color={lightBrown}/>
                            </View>
                        </View>
                        <View style={styles.underLineSection}/>
                        {showCompleted && ((
                            <>
                                <CardItem />
                                <CardItem />
                                <CardItem />
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
                                <AntDesign name="up" size={15} color={lightBrown}/>
                            </View>
                        </View>
                        <View style={styles.underLineSection}/>
                        {showUncompleted && ((
                            <>
                                <CardItem />
                                <CardItem />
                                <CardItem />
                            </>
                        ))}
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}
