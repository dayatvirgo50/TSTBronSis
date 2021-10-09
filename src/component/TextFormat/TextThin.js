import React from 'react'
import { Text } from 'react-native'
import {styles} from '../../style/style'

export const TextThin = ({children ,style}) => {
    
    return(
    <Text style={style ?[styles.textThin,style] : styles.textThin}>{children}</Text>
    )
}

export const TextBold = ({children ,style}) => {
    
    return(
    <Text style={style ?[styles.textBold,style] : styles.textBold}>{children}</Text>
    )
}

