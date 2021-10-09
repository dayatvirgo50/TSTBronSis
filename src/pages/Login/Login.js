import React, { useState } from 'react'
import { TextInput, Text, TouchableOpacity, View } from 'react-native'
import { styles } from '../../style/style'
import StatusBarPrimary from '../../component/StatusBar/StatusBar'
import Ionicons from 'react-native-vector-icons/Ionicons'
import {TextBold, TextThin} from '../../component/TextFormat/TextThin'

const Login = ({navigation}) => {


    return (
        <View style={styles.container}>
            <StatusBarPrimary />
            <View style={styles.loginContainer}>
                <View style={{alignItems:"center"}}>
                    <TextThin style={styles.loginText}>Login</TextThin>
                </View>
                <View style={styles.formLogin}>
                    <View style={styles.formInputLogin}>
                        <Ionicons name='person-outline' size={30} style={styles.iconLogin} />  
                        <TextInput placeholder='Username' style={styles.inputLogin} />
                    </View>
                    <View style={styles.formInputLogin}>
                        <Ionicons name='lock-closed-outline' size={30} style={styles.iconLogin} />  
                        <TextInput placeholder='Password' secureTextEntry style={styles.inputLogin} />
                    </View>
                    <TouchableOpacity style={styles.btnLogin} onPress={()=>navigation.replace("Pelayan")}>
                        <TextBold style={styles.textLoginBtn}>LOGIN</TextBold>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default Login