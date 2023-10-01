import React , {useState,useEffect} from "react";
import { Text,StyleSheet,View ,FlatList, Image } from "react-native";
import yelp from "../api/yelp";


const ResultShowScreen= ({navigation})=>{
    const [result , setResult] = useState(null);
    const id = navigation.getParam('id');
    const getResult = async (id)=>{
        const response = await yelp.get(`/${id}`);
        setResult(response.data);
    }
    useEffect(()=>{
        getResult(id);
    },[]);
    if(!result){
        return null;
    }

    return (
        <>
        <Text style={styles.txt}>{result.name}</Text>
        <FlatList 
            data={result.photos}
            keyExtractor ={(photo)=>photo}
            renderItem ={({item})=>{
                return <Image style={styles.photos} source={{uri: item}}/>
            }
            
            }
        />
        </>
    );

    }

    const styles = StyleSheet.create({
        photos:{
            height:200,
            width:250,
            margin:20,
            alignSelf:"center",
        },
        txt:{
            fontWeight:'bold',
            fontFamily:'Arial',
            fontStyle:'italic',
            fontSize:30,
            padding:5,
            alignSelf:"center"


        }
    });

export default ResultShowScreen;