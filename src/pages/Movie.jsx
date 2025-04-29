import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Card from '../components/UI/Card';
import { getMovie } from '../services/GetServices';

const Movie = () => {
    const[data,setData]=useState([])
    // const API = "https://www.omdbapi.com/?i=tt3896198&apikey=4c59a226&s=titanic&page=1";
    const getMovieData = async () => {
        try {
            const res = await getMovie();
            console.log(res.data.Search);
            setData(res.data.Search);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getMovieData();
    }, []);
    return <ul>
        {
            data.map((curElem)=>{
                return <Card key={curElem.imdbID} movieData={curElem}/>
            })
        }
    </ul>
}

export default Movie