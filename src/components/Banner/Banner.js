import React from 'react';
import StarRatings from 'react-star-ratings';
import Badge from 'react-simple-badges'
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
                <div className="banner_rating">
                    <StarRatings
                        rating={4.5}
                        starDimension="14px"
                        starRatedColor="red"
                        starSpacing="1px"
                    />
                    <h5 className="banner__year">2018-2019 </h5>
                    <Badge className="banner__badge" name="TV MA" backgroundColor="#9E9C9C" />
                    <h5 className="banner__year"> 3 Seasons</h5>
                    <Badge className="banner__badge" name="8.1" backgroundColor="#C0BBBA" />
                </div>

                <h1 className="banner__description">Forever alone in a crowd, failed comedian Arthur Fleck seeks connection as he walks the streets of Gotham
                City. Arthur wears two masks -- the one he paints for his day job as a clown, and the guise he projects in a
                futile attempt to feel like he's part of the world around him.</h1>
                <div className="banner_buttons">
                    <button className="banner__button">BILL<br/>FINGER</button>
                    <h5 className="banner_based">Based on your interest in <br/>Bill Finger, Bob Kane y Jerry Robinson</h5>
                </div>
            </div>

            <div className="banner_fadeBottom">

            </div>
        </header>
    )
}
