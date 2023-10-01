import {React , useState , useEffect }  from "react";
import SearchBar from "../components/SearchBar";
import {Text,View,StyleSheet,ScrollView} from "react-native";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";

const SearchScreen= ()=>{
    const [ term , setTerm]= useState('');
    const [searchApi , result , errorMsg]=useResults();
    const filterResultsWithPrice =(price)=>{
        return result.filter(result=>{
            return result.price === price;
        })
    }


    return (
    <>
    <SearchBar term={term} onTermChange={setTerm} onTermSubmit={()=>{searchApi(term)}} />
    {(errorMsg) ? <Text style={styles.textStyle}>{errorMsg}</Text> : null}
   
        <ScrollView>
        {(filterResultsWithPrice('$').length)?<ResultsList result={filterResultsWithPrice('$')} title="Cost Effective"/>:null}
        {(filterResultsWithPrice('$$').length)?<ResultsList result={filterResultsWithPrice('$$')} title="Bit Pricer"/>:null}
        {(filterResultsWithPrice('$$$').length)?<ResultsList result={filterResultsWithPrice('$$$')} title="Big Spender"/>:null}
        </ScrollView>
    </>
    );
};

const styles =StyleSheet.create({
    textStyle:{
        fontSize:15,
        color: '#fff',
        margin:15,
        backgroundColor: "red",

    },
   

});

export default SearchScreen;