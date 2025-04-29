import axios from "axios";

const api=axios.create({
baseURL:
"https://www.omdbapi.com/"
});

//creating a get request function
export const getMovie=()=>{
    return api.get("?i=tt3896198&apikey=4c59a226&s=titanic&page=1");
}