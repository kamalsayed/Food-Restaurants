import { useState , useEffect } from "react";
import yelp from '../api/yelp';

export default ()=>{
    const [result ,setResult]= useState([]);
    const [errorMsg,setErrorMsg] = useState('');
    //api request
    const searchApi = async (searchTerm)=>{
        try{
        const response = await yelp.get('/search',{
            params:{
                limit:50,
                term:searchTerm,
                location:"NYC",
            }
        });
        setResult(response.data.businesses); 
        }catch(e){
            setErrorMsg('something went wrong');
        }
    }
    
        useEffect(()=>{
            searchApi('pasta');
        } , [2]);
        return [searchApi , result,errorMsg];
    

};