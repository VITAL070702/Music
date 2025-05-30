import {View,Pressable, Text, StyleSheet, Platform} from "react-native";
function CategoryGridTile({title, color,onPress}){
    return(
        <View style={[styles.gridItem,{backgroundColor:color}]}>
            <Pressable android_ripple={{color:'grey'}}
            //cambia al momento de presionar los botones
         style={({pressed}) =>[styles.button, pressed ? styles.buttonPressed:null,]}
         onPress= {onPress}>
            <View style={styles.innerContainer}>
                <Text style={styles.title}>
                    {title}
                </Text>
            </View>
            </Pressable>
            
        </View>
    )
}
const styles = StyleSheet.create({
    gridItem:{
        flex:1,
        margin:16,
        height:150,
        bordeRadius:8,
        elevation:4,
        backgroundColor:'black',
        shadowColor:'white',
        shadowOpacity:0.25,
        shadowOffset:{width:0, height:2},
        shadowRadius:8,
        overflow:Platform.OS ==='android'?'hidden':'visible'

    },
    button:{
        flex:1
    },
    buttonPressed:{
        opacity:0.5
    },
    innerContainer:{
        flex:1,
        padding:16,
        borderRadius:8,
        justifyContent:'center',
        alignItems:'center'
    },
    title:{
        fontWeight:'bold',
        fontSize:18,
    }
})
export default CategoryGridTile