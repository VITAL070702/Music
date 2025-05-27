import { View, Text, FlatList, StyleSheet } from "react-native";
import { useLayoutEffect } from 'react'

import { MUSIC, CATEGORIES } from "../data/dummy_data";
import MusicItem from "../components/MusicItem";

function MusicOverviewScreen({ route, navigation }){
    const catId = route.params.categoryId
    console.log('catId', catId)

    const displayedMusic = MUSIC.filter((musicItem) => {
        return musicItem.categoryIds.indexOf(catId) >= 0
    })

    useLayoutEffect(() => {
        const categoryTitle = CATEGORIES.find((category) => category.id === catId).title

        navigation.setOptions({
            title: categoryTitle
        })
    }, [catId, navigation])

    function renderMealItem(itemData) {
    
        return(

            <MusicItem
                id={itemData.item.id} 
                title={itemData.item.title}
                imageUrl={itemData.item.imageUrl}
                asosiados={itemData.item.asociados}
                disquera={itemData.item.disquera}
                duration={itemData.item.duration}
            />
        )

    }

    return(
        <View style={styles.container}>
            <Text>Music Overview - { catId }</Text>
            <FlatList 
                data={displayedMusic}
                keyExtractor={(item) => item.id}
                renderItem={renderMusicItem}
            />
        </View>
    )
}

export default MusicOverviewScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    }
})