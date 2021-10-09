import React from 'react'
import {View} from 'react-native';
import { styles } from '../../style/style';
import StatusBarPrimary from '../../component/StatusBar/StatusBar';
import { TextThin,TextBold } from '../../component/TextFormat/TextThin';



const History = () =>{
    const data = [
        {
            tgl : '18 Okt 2021',
            amount : '50000',
            meja : 2,
            id:1
        },
        {
            tgl : '18 Okt 2021',
            amount : '30000',
            meja : 1,
            id:2
        },
        {
            tgl : '18 Okt 2021',
            amount : '40000',
            meja : 4,
            id:3
        }
    ]


    return(
        <View style={styles.container}>

        </View>
    )
}

export default History;