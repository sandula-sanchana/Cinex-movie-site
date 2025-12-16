import {Header} from "../../Components/Header/Header.jsx";
import {Carousels} from "../../Components/Carousels/Carousels.jsx";
import Container from 'react-bootstrap/Container';
import './Homepage.css'
import {useEffect, useState} from "react";
import {getLatestMovies} from "../../api/tmdb.js";


const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

export const Homepage = () => {

    const [latest,setLatest]=useState([]);
    const [isLoading,setIsLoading]=useState(true);

    useEffect(() => {
        async function fetchLatestMovies(){

            const response = await getLatestMovies();

            setLatest(response.results);

            setIsLoading(false);
        }

        fetchLatestMovies();
    },[]);

    if (isLoading) {
        return <h1>Loading...</h1>;
    }


    return (
        <>
            <Header />
            <Carousels />

            <Container fluid className="middle-header d-flex justify-content-center align-items-center">
                <h1>Latest Releases</h1>
            </Container>

            {/*<h2>🔥 Trending</h2>*/}
            {/*/!*<div className="movie-grid">*!/*/}
            {/*/!*    {trending.map(movie => (*!/*/}
            {/*/!*        <div className="movie-card" key={movie.id}>*!/*/}
            {/*/!*            <img*!/*/}
            {/*/!*                src={`${IMAGE_BASE_URL}${movie.poster_path}`}*!/*/}
            {/*/!*                alt={movie.title}*!/*/}
            {/*/!*            />*!/*/}
            {/*/!*            <p>{movie.title}</p>*!/*/}
            {/*/!*        </div>*!/*/}
            {/*/!*    ))}*!/*/}
            {/*/!*</div>*!/*/}

            <div className="movie-grid">
                {latest.map(movie => (
                    <div key={movie.id} className="movie-card">
                       <img src={`${IMAGE_BASE_URL}${movie.poster_path}`}/>
                        <p>{movie.title}</p>
                    </div>
                ))}
            </div>

            {/*<h2>⭐ Popular</h2>*/}
            {/*<div className="movie-grid">*/}
            {/*    {Popular.map(movie => (*/}
            {/*        <div className="movie-card" key={movie.id}>*/}
            {/*            <img*/}
            {/*                src={`${IMAGE_BASE_URL}${movie.poster_path}`}*/}
            {/*                alt={movie.title}*/}
            {/*            />*/}
            {/*            <p>{movie.title}</p>*/}
            {/*        </div>*/}
            {/*    ))}*/}
            {/*</div>*/}
        </>
    );
};
