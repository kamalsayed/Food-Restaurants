import React from "react";
import { StyleSheet , View , Text ,Image } from "react-native";

const ResultDetail =({result})=>{

return (   
    <View style={styles.item}>
    <Image style={styles.image} source={result.image_url?{ uri: result.image_url}:""}/>
    <Text style={styles.name}>{result.name}</Text>
    <Text>{result.rating} Stars , {result.review_count} Reviews</Text>
    </View>
    );

}
const styles = StyleSheet.create({
    image:{
        width:250,
        height:150,
        borderRadius:4, 
    },
    item:{
        marginHorizontal:15,
        marginVertical:10,
    },
    name:{
        fontWeight:'bold',
        fontSize:16,
    }
});

export default ResultDetail;