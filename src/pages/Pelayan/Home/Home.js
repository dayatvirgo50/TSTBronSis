import React, { useState } from 'react'
import { View, TouchableOpacity, Switch,Image ,FlatList} from 'react-native'
import StatusBarPrimary from '../../../component/StatusBar/StatusBar'
import { styles, color } from '../../../style/style'
import { TextThin, TextBold } from '../../../component/TextFormat/TextThin'
import Ionicons from 'react-native-vector-icons/Ionicons'


const Home = () => {
    const [isEnabled, setIsEnabled] = useState(false);
    const data = [1,2,3,4,5];
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    return (
        <View style={[styles.container,{backgroundColor:color.bg}]}>
            <StatusBarPrimary />
            <View style={{ backgroundColor: color.primary, height: "25%", padding: 20, paddingTop: 30 }}>
                <TextThin style={{ color: '#fff', fontSize: 30 }}>Hai, Yulia</TextThin>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <TextThin style={{ color: '#fff' }}>OPEN</TextThin>
                    <Switch
                        trackColor={{ false: "#767577", true: color.accent }}
                        thumbColor={isEnabled ? color.dark : "#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                    />
                </View>
            </View>
            <View style={{ backgroundColor: '#fff', height: 90, position: 'absolute', top: '19%', zIndex: 100, width: '80%', alignSelf: 'center', borderRadius: 10, elevation: 5, padding: 15 }}>
                <TextBold style={{ fontSize: 18 }}>Kas : Rp100.000.000 </TextBold>
                <TextThin>Tanggal : 30-09-2021 / 01-10-2021</TextThin>
            </View>
            <View style={{width:'90%',marginTop:80,alignSelf:'center',padding:10,flexDirection:'row',justifyContent:'space-around'}}>
                <View style={{borderWidth:1,borderColor:color.accent,padding:10,width:100,alignItems:'center',borderRadius:10,backgroundColor:'#fff',elevation:10}}>
                    <Ionicons name="cart-outline" size={45} color={color.dark}/>
                    <TextThin style={{color:color.primary}}>Belanja</TextThin>
                </View>
                <View style={{borderWidth:1,borderColor:color.accent,padding:10,width:100,alignItems:'center',borderRadius:10,backgroundColor:'#fff',elevation:10}}>
                    <Image source={require('../../../assets/image/icons/table.png')} style={{width:45,height:45}}/>
                    <TextThin style={{color:color.primary}}>Meja</TextThin>
                </View>
                <View style={{borderWidth:1,borderColor:color.accent,padding:10,width:100,alignItems:'center',borderRadius:10,backgroundColor:'#fff',elevation:10}}>
                    <Ionicons name="list-outline" size={45} color={color.dark}/>
                    <TextThin style={{color:color.primary}}>History</TextThin>
                </View>
            </View>
            <View style={{padding:20}}>
                <TextThin style={{fontSize:24}}>Meja Terisi</TextThin>
                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                    
                    <FlatList
                        data={data}
                        numColumns={2}
                        contentContainerStyle={{width:'80%',alignSelf:'center'}}
                        renderItem={({item,index})=>(
                            <View key={index} style={{ padding: 10, borderRadius: 10, elevation: 4, backgroundColor: '#fff', width: '40%', flexWrap: 'wrap' ,margin:15,alignItems:'center'}}>
                            <TextThin style={{textAlign:'center'}}>{item} - 19:00</TextThin>
                        </View>
                        )}
                    />
              
                </View>
            </View>

        </View>
    )
}
export default Home;