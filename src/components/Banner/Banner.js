import React from 'react';
import './Banner.css';

export default function Banner() {

    return (
        <header className="banner"
            style={{
                backgroundSize: "cover",
                backgroundImage: `url("/images/films/thriller/joker/large.jpg")`,
                backgroundPosition: "center center"
            }}
        >
            <div className="banner__content">
                <h1 className="banner__title">The Joker</h1>
            <h1 className="banner__description">Forever alone in a crowd, failed comedian Arthur Fleck seeks connection as he walks the streets of Gotham
            City. Arthur wears two masks -- the one he paints for his day job as a clown, and the guise he projects in a
            futile attempt to feel like he's part of the world around him.</h1>
            </div>
            <div className="banner_fadeBottom">

            </div>
        </header>
    )
}
