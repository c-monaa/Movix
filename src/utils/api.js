import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
// const TMDB_TOKEN = import.meta.env.VITE_APP_TMDB_TOKEN;
const TMDB_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMDQ2MjNjODBhNjAzNzZiZjQyYzIzODgyMzFlNDBjMSIsInN1YiI6IjY0ZGI0ZjUwYmYzMWYyMDFjZTZhN2VjZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CtJ6UT1EJ57iHNUHRusUUQzcf-LbebUIk7chWoL6g5A";

const headers = {
    Authorization: "bearer " + TMDB_TOKEN,
};

export const fetchDataFromApi = async(url, params) => {
    try{
        const {data} = await axios.get(BASE_URL +  url, {
            headers,
            params
        })
        return data;
    } catch(err) {
        console.log(err);
        return err;
    }
}