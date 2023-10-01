import React from "react";
import { StyleSheet , View , Text ,FlatList , TouchableOpacity } from "react-native";
import ResultDetail from "./ResultDetail";
import { withNavigation } from "react-navigation";
const ResultsList = ({title ,result ,navigation})=>{

return (
    <View>
        <Text style={styles.title}>{title}</Text>
        <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={result}
            keyExtractor={(result) =>result.id}
            renderItem={({item})=>{
                return (
                    <TouchableOpacity onPress={()=>{navigation.navigate('ResultShow',{id:item.id})}}>
                <ResultDetail result={item}/>
                </TouchableOpacity>
                );
            }}
        />
        

    </View>

);


};

const styles = StyleSheet.create({
    title:{
        fontSize:18,
        fontWeight:'bold',
        marginLeft:15,
    }



});


export default withNavigation(ResultsList);