import React from 'react';
import Card from "../Card/Card";
import {linkImg} from "../keys";

const Page = ({movies}) => {
    return (
        <div className="page">
            {movies.map((movie, index) => {
                return (
                    <Card
                        key={Math.floor(Math.random() * 10000)}
                        index={index}
                        id={movie.id}
                        title={movie.title}
                        img={`${linkImg}${movie.poster_path}`}
                        img2={`${linkImg}${movie.backdrop_path}`}
                    />
                )
            })}
        </div>
    );
};

export default Page;
