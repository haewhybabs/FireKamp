import { AppStack,WelcomeStack } from "./stackNavigator";
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
const AppMainStack = ()=>{
    return(
        <Stack.Navigator
            screenOptions={({ navigation: { navigate, goBack } }) => ({
            headerShown: false,
            gestureEnabled: false,
            })}
        >
            {
                AppStack.map((item,index)=>(
                    <Stack.Screen name={item.name} component={item.screen} key={index} />
                ))
            }
        </Stack.Navigator>
    )
}
const WelcomeMainStack = ()=>{
    return(
        <Stack.Navigator
            screenOptions={({ navigation: { navigate, goBack } }) => ({
            headerShown: false,
            gestureEnabled: false,
          })}
        >
            {
                WelcomeStack.map((item,index)=>(
                   
                    <Stack.Screen name={item.name} component={item.screen} key={index} />
                   
                ))
            }
        </Stack.Navigator>
    )
}
const root = [
    {
        name: "WelcomeStack",
        component:WelcomeMainStack,
        options: { headerShown: false },
    },
    {
      name: "AppStack",
      component: AppMainStack,
      options: { headerShown: false },
    },
];
const MainStack = ()=>{
    return(
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={({ navigation: { navigate, goBack } }) => ({
                headerShown: false,
                gestureEnabled: false,
                })}
                initialRouteName="WelcomeStack"
            >
                {
                    root.map((item,index)=>(
                        <Stack.Screen name={item.name} component={item.component} key={index} />
                    ))
                }
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default MainStack;