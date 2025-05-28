import { Image, Text, View, StyleSheet, ScrollView } from "react-native"

import { MUSIC } from '../data/dummy_data'
import MusicDetails from "../components/MusicDetails"

function MusicDetailScree({route, navigation}) {
    const musicId = route.params.musicId
    console.log('music id',musicId)
    

    const selectedMusic = MUSIC.find((music) => music.id === musicId)
    console.log('selected music', selectedMusic)
    const asociados = selectedMusic.asociados.map(asociado => <Text style={styles.textContent}key={asociado}>{asociado}</Text>)
    return(
        <ScrollView>
            <Image style={styles.image} source={{ uri: selectedMusic.imageUrl }} />
            <Text style={styles.title}>{selectedMusic.title}</Text>
            <MusicDetails 
                duration={selectedMusic.duration}
                disquera={selectedMusic.disquera}
                asociados={selectedMusic.asociados}
            />
            <View>
                <Text style={styles.subtitle}>Informacion</Text>
                <Text>{selectedMusic.informacion}</Text>
                <Text style={styles.subtitle}>asociados</Text>
                <Text>{asociados}</Text>
            </View>
        </ScrollView>
    )

}

export default MusicDetailScree

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 350
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        margin: 8,
        textAlign: 'center'
    },
    subtitle: {
        fontSize: 20,
        fontWeight: 'bold',
        margin: 4,
        padding: 6,
        marginHorizontal: 24,
        marginVertical: 4,
        textAlign: 'center',
        borderBottomColor: 'black',
        borderBottomWidth: 1
    },
    textContent: {

        fontSize: 14,
        margin: 4,
        marginVertical: 3,
        marginHorizontal: 24    
    }


})