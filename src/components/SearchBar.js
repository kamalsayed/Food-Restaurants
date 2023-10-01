import {React} from "react";
import {Text,View,StyleSheet,TextInput} from "react-native";
import {FontAwesome} from "@expo/vector-icons";
const SearchBar=({term, onTermChange ,onTermSubmit})=>{

    return( <View style={styles.background}>
    
              <FontAwesome name="search" style={styles.icons}/>
              <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="search"
                style={styles.inputStyle}
                value={term}
                onChangeText={onTermChange}
                onEndEditing={onTermSubmit}
              />
            </View>
            );
}

const styles =StyleSheet.create({
    background:{
        backgroundColor:"#BEBDB8",
        height:50,
        borderRadius:5 ,
        marginHorizontal:15,
        marginTop:7,
        flexDirection:"row",
    },
    icons:{
        fontSize:30,
        alignSelf:"flex-start",
        marginVertical:10,
        marginLeft:15
    },
    inputStyle:{
       marginHorizontal:15,
       fontSize:20,
       width:400,
       color:"#fff",
    }
});

export default SearchBar;