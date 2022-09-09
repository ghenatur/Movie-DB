import React from 'react';
import './Card.css'

const Card = ({title,index,img,img2}) => {
    return (

        <div className={'card'}>
            {/*<p>{index+1}</p>*/}
            <h2>{title}</h2>
            <img className={'img-card'} src={img} alt={title}/>
            {/*<img className={'img-card'} src={img2} alt={title}/>*/}
        </div>

    );
};

export default Card;
