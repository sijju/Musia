import { View,  StyleSheet, Image, Text } from 'react-native'
import React, {  useEffect } from 'react'
import Animated, { runOnJS, useAnimatedStyle, useSharedValue, withSequence, withSpring } from 'react-native-reanimated'

import logo from '../assets/logo.png'

const SplashScreen = ({navigation}) => {
    const progress = useSharedValue(0)
    const scale  = useSharedValue(0)

    const logoStyles = useAnimatedStyle(()=> ({
      opacity : progress.value,
      
       transform : [{
        scale : scale.value
       }]
    }),[])
    const logoStyle = useAnimatedStyle(()=> ({
      borderRadius : (progress.value * 100)/2,
    }),[])
    useEffect(()=>{
      progress.value = withSequence(
        withSpring(0.5),
        withSpring(1)
      )
      scale.value = withSequence(
       
        withSpring(0.5,{duration:2000} ,(isFinished) => {
          if(isFinished){
            runOnJS(navigation.replace)('app')
          }
        })
      )
    },[])

   


    
    
  return (
    <View style={styles.container}>
     
      <Animated.View style={[styles.logoContainer,logoStyles]}>
        <Animated.Image source={logo} style={[styles.logo,logoStyle]} resizeMode='contain'/>
        <Text style={{textAlign:'center',fontSize:50,marginTop:10}}>Musia</Text>
      </Animated.View>
        
    </View>
  )
}


export default SplashScreen
const styles = StyleSheet.create({
    container : {
        flex:1,
        backgroundColor:'white',
        alignItems:'center',
        justifyContent:'center'
    },
    logoContainer : {
        ...StyleSheet.absoluteFill,
        alignItems:'center',
        justifyContent:'center',
        zIndex:1
    },
    logo:{
      width:150,
      height:150
    }
})