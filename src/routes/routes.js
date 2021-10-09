import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator  } from '@react-navigation/native-stack';
import Login from '../pages/Login/Login';
import Splash from '../component/Splash/Splash'
import Home from '../pages/Pelayan/Home/Home';
import Belanja from '../pages/Pelayan/Belanja/Belanja';


const Stack = createNativeStackNavigator();

const PelayanStack = () => {
    return(
    <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} options={{headerShown:false}}/>
        <Stack.Screen name="Belanja" component={Belanja} options={{title:'Belanja',headerStyle:{elevation:0}}} />
    </Stack.Navigator>
)}

const Routes =()=>(
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Splash">
            <Stack.Screen name="Splash" component={Splash} options={{headerShown:false}}/>
            <Stack.Screen name="Login"  component={Login} options={{headerShown:false}}/>
            <Stack.Screen name="Pelayan" component={PelayanStack}  options={{headerShown:false}}/>
        </Stack.Navigator>
    </NavigationContainer>
)

export default Routes;