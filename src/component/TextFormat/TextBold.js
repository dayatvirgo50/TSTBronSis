import React from 'react'
import { Text } from 'react-native'
import {styles} from '../../style/style'

const TextBold = ({children ,style}) => {
    
    return(
    <Text style={style ?[styles.textBold,style] : styles.textBold}>{children}</Text>
    )
}

export default TextBold;