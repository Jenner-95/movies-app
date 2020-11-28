import React from 'react';
import YouTube from 'react-youtube';
import './Row.css';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function Row(props){
    const {title, movies, trailerUrl, trailerUrlRec} = props;
    
    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
            
            autoplay: 1,
        }
    };

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };


    return (
        <div className="row">
            <h3 className="title">{title}</h3>
            <Carousel responsive={responsive}   itemClass="carousel-item-padding-40-px" infinite={false} >
              {movies}
            </Carousel>
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/> }
            {trailerUrlRec && <YouTube videoId={trailerUrlRec} opts={opts}/> }
           
        </div>
    );
}