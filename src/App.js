import React, {useState} from 'react';
import './App.css';
import Row from './components/Row/Row';
import Banner from './components/Banner/Banner';
import moviesData from './utilities/series';
import moviesRecently from './utilities/series-recently'
import movieTrailer from "movie-trailer";

function App() {
  const [trailerUrl, setTrailerUrl] = useState("");
  const [trailerUrlRec, setTrailerUrlRec] = useState("");

  const openTrailer = (movie) => {
      if (trailerUrl) {
          setTrailerUrl("");
      } else {
          movieTrailer(movie?.title || "")
              .then((url) => {
                  console.log(url);
                  const urlParams = new URLSearchParams(new URL(url).search);
                  setTrailerUrl(urlParams.get("v"))
              })
              .catch((error) => console.log(error));

      }
  };

    const openTrailer2 = (movie) => {
      if (trailerUrlRec) {
          setTrailerUrlRec("");
      } else {
          movieTrailer(movie?.title || "")
              .then((url) => {
                  console.log(url);
                  const urlParams = new URLSearchParams(new URL(url).search);
                  setTrailerUrlRec(urlParams.get("v"))
              })
              .catch((error) => console.log(error));

      }
  };

  const items = moviesData.map((movie) => {
    return ( 
    <img key={movie.id} onClick={() => openTrailer(movie)} className="row__poster" src={movie.image} alt={movie.title} /> ) 
  });

  const moviesRec = moviesRecently.map((movie) => {
    return ( 
    <img key={movie.id} onClick={() => openTrailer2(movie)} className="row__poster" src={movie.image} alt={movie.title} /> ) 
  });


  return (
    <div className="App">
      <Banner />
      <Row title="Popular on Netflix" movies={items} trailerUrl={trailerUrl}/>
      <Row title="Recently Watched" movies={moviesRec} trailerUrl={trailerUrlRec}/>
    </div>
  );
}

export default App;
