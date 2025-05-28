import {View,Text,StyleSheet} from 'react-native'
function MusicDetails({duration='asdf', disquera ='asdf', asociados='asdf'}){
    return(
        <View style={styles.details}>
            <Text style={styles.detailItem}>{duration}</Text>
            <Text style={styles.detailItem}>{disquera.toUpperCase()}</Text>
            <Text style={styles.detailItem}>{console.log('asociados',asociados)}</Text>
        </View>
    )
}
export default MusicDetails
const styles = StyleSheet.create({
    details:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        padding:8
    },
    detailItem:{
        marginHorizontal:4,
        fontSize:12
    }
})

