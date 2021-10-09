import { StyleSheet,PixelRatio } from "react-native";

const scaleFont = (size) => size * PixelRatio.getFontScale();

export const color = {
    primary : '#6F4C5B',
    accent : '#F5E8C7',
    dark : '#DEBA9D',
    darkBlack : '#423F3E',
    bg:'#fcfcfc'
}

export const styles = StyleSheet.create({
    container:{
        flex: 1
    },
    containerCentered:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    
    textThin: {
        fontFamily: 'Century Gothic'
    },
    textBold: {
        fontFamily: 'Century Gothic Bold'
    },
    loginText:{
        fontSize:scaleFont(30)
    },
    loginContainer :{
        flex: 3,justifyContent:"center"
    },
    formLogin:{
        marginTop:20, paddingHorizontal:20
    },
    formInputLogin:{
        flexDirection:"row", alignItems:"center", position:"relative", marginVertical:10
    },
    iconLogin:{
        position:"absolute", left:5
    },
    inputLogin:{
        borderWidth: 1, width:"100%", paddingLeft:40, borderRadius:5 
    },
    btnLogin:{
        borderColor:color.primary,borderWidth:1,
        paddingVertical:10,borderRadius:8
    },
    textLoginBtn:{
        textAlign:'center',
        color:color.primary
    }
})