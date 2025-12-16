import {useEffect, useState} from "react";
import {getPopularMovies} from "../../api/tmdb.js";
import {Header} from "../../Components/Header/Header.jsx";
import Container from "react-bootstrap/Container";
import  './Popular.css'

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

export const Popular=()=>{

    const [popularMovies,setPopularMovies]=useState([]);

   useEffect(()=>{
       async function getPopularMoviesX(){
           const resp=await getPopularMovies();

           setPopularMovies(resp.results);
       }

       getPopularMoviesX();
   },[])
    return (
        <>
            <Header />
            <Container fluid className="middle-header d-flex justify-content-center align-items-center">
                <h1>Popular Movies</h1>
            </Container>

            <div className="movie-grid">
                {
                    popularMovies.map((movie)=>{
                        return <div className="movie-card" key={movie.id}>
                            <img src={`${IMAGE_BASE_URL}${movie.poster_path}`} alt=""/>
                            <p>{movie.title}</p>
                        </div>
                    })
                }
            </div>

        </>
    )
}