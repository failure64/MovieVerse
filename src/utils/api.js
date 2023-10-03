import axios from "axios"

const API_OPTIONS= {
    method : 'GET',
    headers:{
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NzRmOWZlZTU5OWU3OTBiNGJiYjVkN2UyYjQ0ZmY1MCIsInN1YiI6IjY1MWJmNmJhZWE4NGM3MDBlYjlhZDAxNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.k1cGenU9UgE-JKXn8ynoJUKHC9A13ZxrbLgiMimVj6U'
    }
}
const TMBD_TOKEN = import.meta.env.VITE_APP_TMBD_TOKEN;

export const fetchDataFromApi = async() =>{
    try{
        const data = fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', API_OPTIONS)
        const json = await data.json()
        return json.results
    }catch(err){
        console.log(err);
        return err;
    }
}