import React from 'react'
import { StatusBar } from 'react-native'
import { color } from '../../style/style'


const StatusBarPrimary = () =>(
    <StatusBar backgroundColor={color.primary} barStyle='light-content' animated showHideTransition="slide"/>
)

export default StatusBarPrimary