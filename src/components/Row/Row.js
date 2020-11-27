import React from 'react';
import moviesData from '../../utilities/series';
import './Row.css';

export default function Row(props) {
    
    return (
        <div className="row">
            <h2>{props.title}</h2>

            <div className="row__posters">
                {moviesData.map(movie => (
                    <img key={movie.id} className="row__poster" src={movie.image} alt={movie.title} />
                ))}

            </div>
        </div>
    );
}
