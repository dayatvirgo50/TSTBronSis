import React,{useEffect} from 'react'
import {Image, Text,View} from 'react-native'
import StatusBarPrimary from '../StatusBar/StatusBar'
import { styles } from '../../style/style'


const Splash = ({navigation}) =>{

    useEffect(()=>{
        setTimeout(()=>{
            navigation.replace("Login")
        },5000)
    })

    return(
        <View style={[styles.containerCentered,{backgroundColor:'#fff'}]}>
            <StatusBarPrimary />
            <Image source={require('../../assets/image/logo/logo.png')} style={{height:450,width:250,resizeMode:'contain'}} />
        </View>
    )
}

export default Splash;
